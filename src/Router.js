import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Userlist from "./Userlist";
import Title from "./Title";
import Profile from "./Profile";
import { useAuthStateContext, LoginComponent } from './context/FirebaseAuthContextProvider';
import ChatStateProvider from "./context/FirebaseChatContextProvider";

function Router(){
  const { authState } = useAuthStateContext();
  if (authState && authState.state === "AUTHENTICATION_LOADING") {
    return <div>Loading...</div>;
  }
  else if (authState && authState.state === "AUTHENTICATED") {
    return (
      <ChatStateProvider self={authState.user}>
      <BrowserRouter>
       <Routes>
         <Route path="/Chat/:uid" element={ <App/>} />
         <Route path="/" element={ <Title/>} />
         <Route path="/Userlist" element={ <Userlist/> } />
         <Route path="/Profile" element={<Profile />}/>
       </Routes>
      </BrowserRouter>
      </ChatStateProvider>
   );
  } else {
    return <LoginComponent />;
  }
}

export default Router;