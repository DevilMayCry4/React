import './MessageLabel.css';

function MessageLabel(message){
    console.log(message);
    let item = message.props;
    return item?(
        <> 
        <div className="container">
  <div  className="content">{item.message}</div>
  <input type="checkbox" className="checkbox" checked={item.isCheck}  />
</div>
        </>
    ):<></>
}

export default MessageLabel;