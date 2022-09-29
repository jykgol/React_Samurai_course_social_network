import LeftMenuReduser from "./LeftMenuReduser";
import MessagesReduser from "./MessagesReduser";
import ProfileReduser from "./ProfileReduser";


let store = {
    _state: {
        MessagesPage: {
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

        },
        ProfilePage: {
            PostsPageData: {
                PostsData: [
                    { id: 1, like_count: 78, text: "У Фрэнка опять проблемы: он проспорил довольно крупную сумму денег, в результате чего Лиама берут в заложники. Галлагерам придется постараться, чтобы выкупить брата.", imgSrc: "https://cdn-icons-png.flaticon.com/512/235/235355.png", author: "Koala San" },
                    { id: 2, like_count: 2, text: "post nahoooi", imgSrc: "https://cdn-icons-png.flaticon.com/512/235/235355.png", author: "Koala San" },
                ],
                newPostText: "New text is waiting for you",
                ProfileData:{
                    ProfileImage:"https://sun9-82.userapi.com/impg/yoNEV77YAGNbEnggrxM2azysdivaE7r2avPB7Q/HIlFUm5Hvyg.jpg?size=863x1080&quality=95&sign=3d0862e05fc06275ab8999115c4162de&type=album",
                }
            }
        },
        LeftmenuPage: {
            NavbarData: [
                { navLink_to: "/", text: "Profile", img_src: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png" },
                { navLink_to: "/messages", text: "Messages", img_src: "https://cdn-icons-png.flaticon.com/512/589/589671.png" },
                { navLink_to: "/news", text: "News", img_src: "https://cdn-icons-png.flaticon.com/512/1074/1074106.png" },
                { navLink_to: "/mysic", text: "Mysic", img_src: "https://cdn-icons-png.flaticon.com/512/748/748134.png" },
                { navLink_to: "/settings", text: "Settings", img_src: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png" },
            ]
        },

    },
    getState() {
        return this._state;
    },
    RenderEntireTree() {
        console.log('State is changed');
    },
    subscribe(observer) {
        this.RenderEntireTree = observer;
    },
    dispatch(action) {

        this.getState().ProfilePage=ProfileReduser(this.getState().ProfilePage,action);
        this.getState().MessagesPage=MessagesReduser(this.getState().MessagesPage,action);
        this.getState().LeftmenuPage=LeftMenuReduser(this.getState().LeftmenuPage,action);
        
        this.RenderEntireTree(this.getState());       
    }

}

export default store;
