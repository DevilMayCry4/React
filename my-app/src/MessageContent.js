import MessageLabel from "./MessageLabel";
import './MessageContent.css';

function MessageContent(props){ 
    let items = props.messageQueue;
    let i = 1;
    const list = items.map(message=>{return  <MessageLabel key={i++}  props={message}/>});
    console.log(list)
   return (<div className="box">{list}</div> );
};
export default MessageContent;