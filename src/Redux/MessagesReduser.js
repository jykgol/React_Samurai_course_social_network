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
        case NewMessageOnChange: {
            let stateCopy = { ...state };
            stateCopy.NewMessageText = action.newText;
            return stateCopy;
        }
        case AddNewMessage: {
            let stateCopy = { ...state };
            let text = stateCopy.NewMessageText;
            let newMessage = {
                id: stateCopy.MessagesData.length + 1,
                message: text,
            }
            stateCopy.MessagesData = [ ...state.MessagesData,newMessage];
            stateCopy.NewMessageText = '';
            return stateCopy;
        }
        default:
            return state;
    }
}


export let AddNewMessageActionCreator = () => ({ type: AddNewMessage })
export let NewMessageOnChangeActionCreator = (newText) => ({ type: NewMessageOnChange, newText: newText })
export default MessagesReduser;