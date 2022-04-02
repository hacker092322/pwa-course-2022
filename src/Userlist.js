import './Userlist.css';
import { Link } from 'react-router-dom';

function Userlist() {
    return(
        <div>
            <div className="imagePlus">
            <img src="plus-icon-13062.png" width="30" height="30"></img>
            </div>
            <Link to="/Chat">
            <button type="button">
            Mr. Test
           </button>
           </Link>
           <Link to="/Chat">
            <button type="button">
            Mr. X
           </button>
           </Link>
           <Link to="/Chat">
            <button type="button">
            L Man
           </button>
           </Link>
           <Link to="/Chat">
            <button type="button">
            POPP
           </button>
           </Link>
           <Link to="/Chat">
            <button type="button">
            OwO
           </button>
           </Link>
           <Link to="/Chat">
            <button type="button">
            M-M
           </button>
           </Link>
        </div>
        
    )
}
//            <div className="UserName">Mr. Test</div>
//            <div className="UserName">Mr. X</div>
//            <div className="UserName">L Man 1</div>
//            <div className="UserName">OwO</div>
//            <div className="UserName">M-M</div>
//            <div className="UserName">Lazy</div>
//            <div className="UserName">POPP</div>
//            <div className="UserName">Test2</div>

export default Userlist;