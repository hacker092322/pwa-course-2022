import '../css/Titlebar.css';
import { Link } from 'react-router-dom';

function Titlebar ({value}) {
  return (
    <div className="titlebar">
        <Link to="/friend-list">
        <button type="buttonBar">
        <div className="imageLeft">
        <img src="/images/left_icon.png" alt="Left Arrow" width="30" height="30"></img>
        </div>
        </button>
        </Link>
         {value}
        <div className="imagePlus">
        <img src="images/plus-icon-13062.png" width="30" height="30"></img>
        </div>
    </div>
  )
}

export default Titlebar;