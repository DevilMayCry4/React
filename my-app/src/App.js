
import './App.css';
import MessageContent from './MessageContent';




const messagetype = {importantAndUrgent:0,important:1,urgent:2,noImportantAndurgent:3}

const meesaQequeue = [{message:"ces",isCheck:true,time:"",type:messagetype.important,},
{message:"231",isCheck:true,time:"",type:messagetype.important,},
{message:"3",isCheck:true,time:"",type:messagetype.importantAndUrgent,},
{message:"asd",isCheck:true,time:"",type:messagetype.urgent,},
{message:"22",isCheck:true,time:"",type:messagetype.noImportantAndurgent,},
{message:"sss",isCheck:true,time:"",type:messagetype.important,},
{message:"sss",isCheck:true,time:"",type:messagetype.important,},
{message:"ddd",isCheck:true,time:"",type:messagetype.important,},
{message:"dd",isCheck:true,time:"",type:messagetype.important,},
{message:"dd",isCheck:true,time:"",type:messagetype.important,}
];

const group1 = [];
const group2 = [];
const group3 = [];
const group4 = [];

meesaQequeue.forEach(obj => {
  switch (obj.type) {
    case messagetype.important:
      group1.push(obj);
      break;
    case messagetype.urgent:
      group2.push(obj);
      break;
    case messagetype.noImportantAndurgent:
      group3.push(obj);
      break;
    case messagetype.importantAndUrgent:
      group4.push(obj);
      break; 
    default:break;
  }
});


function App() { 
  return (
    <>
   <div className='container'>
    <MessageContent messageQueue={group1}/> 
    <MessageContent messageQueue={group2}/> 
    <MessageContent messageQueue={group3}/> 
    <MessageContent messageQueue={group4}/> 
   </div>
</>
 
  );
}

export default App;
