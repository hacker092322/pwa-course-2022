import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { Link } from 'react-router-dom';

function FriendList(){
  const { userList } = useChatStateContext();

  return(
    <div>
    <div className="imagePlus">
    <img src="plus-icon-13062.png" width="30" height="30"></img>
     </div>
      <div className="friend-list">
      {
        userList.map((item) => {
          return (
            <Link to={`/privatechat/${item.key}`} key={item.key}>
            <button type="button">
              <div className={`friend-list-item ${item.position}`}>
                <div>{item.displayName}</div>
              </div>
            </button>
            </Link>
          )
        })
      }
      </div>
      </div>
    
  )
}

export default FriendList;