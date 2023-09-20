import MessageLabel from "./MessageLabel";
import './MessageContent.css';

function MessageContent(props){ 
    let item = props.messageQueue;
    const list = item?item.map(message=><MessageLabel key={message.message} props={message}/>):<div/>;
   return (<div className="box">{list}</div> );
};
export default MessageContent;