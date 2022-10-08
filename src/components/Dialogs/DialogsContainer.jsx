import React from "react";
import { AddNewMessageActionCreator, NewMessageOnChangeActionCreator } from "../../Redux/MessagesReduser";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";



function DialogsContainer(props) {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState();
                    let AddNewMessage = () => {
                        store.dispatch(AddNewMessageActionCreator());
                    }

                    let NewMessageOnChange = (text) => {
                        store.dispatch(NewMessageOnChangeActionCreator(text));
                    }
                    return (<Dialogs MessagesPage={state.MessagesPage} AddNewMessage={AddNewMessage} NewMessageOnChange={NewMessageOnChange} />)

                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;