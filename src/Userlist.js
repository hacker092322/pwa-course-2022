import './Userlist.css';
import App from './components/App';
import Avatar from './components/Avatar';
import { useChatStateContext } from './context/FirebaseChatContextProvider';
import { Link } from 'react-router-dom';

function Userlist() {
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
                <Link to={`/Chat/${item.key}`} key={item.key}>
                <div className={`friend-list-item ${item.position}`}>
                <div>{item.displayName}</div>
                </div>
               </Link>
                )
                })
            }
      </div>
        </div>
        
    )
}
//<div><button>Mr. Test</button></div>
//<div><button>Mr. X</button></div>
//<div><button>L Man 1</button></div>
//<div><button>OwO</button></div>
//<div><button>M-M</button></div>
//<div><button>Lazy</button></div>
//<div><button>POPP</button></div>
//<div><button>Test2</button></div>
//<div><button>Test3</button></div>

export default Userlist;