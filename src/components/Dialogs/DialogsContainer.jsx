import { connect } from "react-redux";
import { AddNewMessageActionCreator, NewMessageOnChangeActionCreator } from "../../Redux/MessagesReduser";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        MessagesPage: state.MessagesPage
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        AddNewMessage: () => {
            dispatch(AddNewMessageActionCreator())
        },
        NewMessageOnChange: (text) => {
            dispatch(NewMessageOnChangeActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;