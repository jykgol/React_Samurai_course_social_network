import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"
import React from "react";

function Dialogs(props) {

    let DialogsDataRestore = props.MessagesPage.DialogsData.map(el => {
        return (
            <div key={el.id} className={s.dialog_item}>
                <NavLink to={"/messages/" + el.id}>{el.name}</NavLink>
            </div>
        )
    })
    let MessagesDataRestore = props.MessagesPage.MessagesData.map(el => {
        return (
            <div key={el.id} className={s.message}>{el.message}</div>
        )
    })

    let onAddNewMessage = () => {
        props.AddNewMessage();
    }

    let onNewMessageOnChange = (e) => {
        let newText = e.target.value;
        props.NewMessageOnChange(newText);
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
                        <textarea value={props.MessagesPage.NewMessageText} onChange={onNewMessageOnChange} />
                    </div>
                    <div>
                        <button onClick={onAddNewMessage}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;