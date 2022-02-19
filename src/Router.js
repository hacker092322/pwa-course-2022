import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from './Profile.js';

function Router(){
return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={ <App/>} />
       <Route path="/Profile" element={ <Profile/> } />
     </Routes>
    </BrowserRouter>
 )
}

export default Router;