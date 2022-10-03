const AddNewMessage = "ADD-NEW-MESSAGE";
const NewMessageOnChange = "NEW-MESSAGE-ON-CHANGE";

let initialstate = {
    NewMessageText: "Empty",
    DialogsData: [
        { id: 1, name: 'Terpila1' },
        { id: 2, name: 'Terpila2' },
        { id: 3, name: 'Terpila3' },
        { id: 4, name: 'Terpila4' },
        { id: 5, name: 'Terpila5' },
    ],
    MessagesData: [
        { id: 1, message: 'Go Matematiky' },
        { id: 2, message: 'Rot toptal matematiki' },
        { id: 3, message: 'Zaebala realno!!' },
        { id: 4, message: 'Kak ssaniy dolche milk dlya zhopy' },
        { id: 5, message: 'Realno!!' }
    ],
};

const MessagesReduser = (state = initialstate, action) => {
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