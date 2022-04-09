import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"
import React from "react";
import { AddNewMessageActionCreator, NewMessageOnChangeActionCreator } from "../../Redux/State";



function Dialogs(props) {

  let DialogsDataRestore = props.MessagesPage.DialogsData.map(el => {
    return(
      <div className={s.dialog_item}>
      <NavLink to={"/messages/" + el.id}>{el.name}</NavLink>
      </div>
    )
  })
  let MessagesDataRestore = props.MessagesPage.MessagesData.map(el => {return(
    <div className={s.message}>
      {el.message}
    </div>
    )})
  
  let newMessage = React.createRef();
  
  let AddNewMessage = () => {

    props.dispatch(AddNewMessageActionCreator());
  }

  let NewMessageOnChange = () => {
    let newText = newMessage.current.value;
    props.dispatch(NewMessageOnChangeActionCreator(newText));
  }

  return (
    <div className={s.dialog_window}>
      <div className={s.dialog_items}>
        {DialogsDataRestore}
      </div>

      <div className={s.messages}>
        {MessagesDataRestore}
        <div>
          <div>
          <textarea ref={newMessage} value={props.MessagesPage.NewMessageText} onChange={NewMessageOnChange}/>
          </div>
          <div>
          <button onClick={AddNewMessage}>send</button>   
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Dialogs;