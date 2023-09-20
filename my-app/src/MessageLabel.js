function MessageLabel(props){
    return (
        <>
       <div> {props.message}</div>
       <input
        type="checkbox"
        checked={props.message.isCheck} 
      />
        </>
    );
}

export default MessageLabel;