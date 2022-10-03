import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"
import React from "react";
import { AddNewMessageActionCreator,NewMessageOnChangeActionCreator} from "../../Redux/MessagesReduser";




function Dialogs(props) {

    let DialogsDataRestore = props.MessagesPage.DialogsData.map(el => {
        return (
            <div className={s.dialog_item}>
                <NavLink to={"/messages/" + el.id}>{el.name}</NavLink>
            </div>
        )
    })
    let MessagesDataRestore = props.MessagesPage.MessagesData.map(el => {
        return (
            <div className={s.message}>{el.message}</div>
        )
    })

    let AddNewMessage = () => {

        props.dispatch(AddNewMessageActionCreator());
    }

    let NewMessageOnChange = (e) => {
        let newText = e.target.value;
        props.dispatch(NewMessageOnChangeActionCreator(newText));
    }

    return (
        <div className={s.dialog_window}>
            <div className={s.dialog_items}>
                {DialogsDataRestore}
            </div>

            <div className={s.messages}>
                {MessagesDataRestore}
                <div className={s.newMessageBox}>
                    <div>
                        <textarea value={props.MessagesPage.NewMessageText} onChange={NewMessageOnChange} />
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