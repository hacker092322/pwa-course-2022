import "../css/Chatbox.css";
import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

export function Chat (props) {
  let data = props.data;
  const myRef = useRef(null)

  useEffect(() => {
    myRef.current && myRef.current.scrollIntoView()  
  },[data])

  return (
    <div className="chatbox">
      {
        data.map((item,i) => {
          return (<div ref={myRef} key={`${item.key}-${i}`} className={`chatbox-item ${item.position}`}>
            <div>{item.displayName}</div>
          </div>)
        })
      }
    </div>
  )
}

export default Chat;