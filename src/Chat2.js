import { useState } from 'react';
import "./Chat2.css";

function Chat2() {
    const [size, setSize] = useState("S");

    function changeSize(){
       if (size == "S"){
           setSize("M");
       }
       else if (size == "M"){
           setSize("L");
       }
       else if (size == "L"){
           setSize("S");
       }
    }

    return(
      <div>
      <input type="button" value="Size" onClick={changeSize}/>
      <div className={'circle ' + size}></div>
      </div>
    )
}

export default Chat2;