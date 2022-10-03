import React from "react";
import { AddNewMessageActionCreator,NewMessageOnChangeActionCreator} from "../../Redux/MessagesReduser";
import Dialogs from "./Dialogs";



function DialogsContainer(props) {

    let AddNewMessage = () => {
        props.dispatch(AddNewMessageActionCreator());
    }

    let NewMessageOnChange = (text) => {
        props.dispatch(NewMessageOnChangeActionCreator(text));
    }

    return <Dialogs MessagesPage={props.MessagesPage} AddNewMessage={AddNewMessage} NewMessageOnChange={NewMessageOnChange}/>
}

export default DialogsContainer;