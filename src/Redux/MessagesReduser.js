const AddNewMessage = "ADD-NEW-MESSAGE";
const NewMessageOnChange = "NEW-MESSAGE-ON-CHANGE";

const MessagesReduser = (state, action) => {
    switch (action.type) {
        case NewMessageOnChange:
            state.NewMessageText = action.newText;
            return state;
        case AddNewMessage:
            let text = state.NewMessageText;
            let newMessage = {
                id: state.MessagesData.length + 1,
                message: text,
            }
            state.MessagesData.push(newMessage);
            state.NewMessageText = '';
            return state;
        default:
            return state;
    }
}


export let AddNewMessageActionCreator = () => ({ type: AddNewMessage })
export let NewMessageOnChangeActionCreator = (newText) => ({ type: NewMessageOnChange, newText: newText })
export default MessagesReduser;