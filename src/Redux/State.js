const AddPost = "ADD-POST";
const NewPostOnchange = "NEW-POST-TEXT-ON-CHANGE";
const AddNewMessage = "ADD-NEW-MESSAGE";
const NewMessageOnChange = "NEW-MESSAGE-ON-CHANGE";

let store = {
  _state: {
    MessagesPage: {
      NewMessageText: "privet debil",
      DialogsData: [
        { id: 1, name: 'Terpila1' },
        { id: 2, name: 'Terpila2' },
        { id: 3, name: 'Terpila3' },
        { id: 4, name: 'Terpila4' },
        { id: 5, name: 'Terpila5' },
      ],
      MessagesData: [
        { id: 1, message: 'Go doty' },
        { id: 2, message: 'Tvoi rot toptal' },
        { id: 3, message: 'Zaebal' },
        { id: 4, message: 'Ok' },
        { id: 5, message: 'Zhdem' }
      ],

    },
    ProfilePage: {
      PostsPageData: {
        PostsData: [
          { id: 1, like_count: 78, text: "У Фрэнка опять проблемы: он проспорил довольно крупную сумму денег, в результате чего Лиама берут в заложники. Галлагерам придется постараться, чтобы выкупить брата.", imgSrc: "https://cdn-icons-png.flaticon.com/512/235/235355.png", author: "Koala San" },
          { id: 2, like_count: 2, text: "post nahoooi", imgSrc: "https://cdn-icons-png.flaticon.com/512/235/235355.png", author: "Koala San" },
        ],
        newPostText: "New text is waiting for you",
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
    if (action.type === AddPost) {
      let newPost = {
        id: this.getState().ProfilePage.PostsPageData.PostsData.length + 1,
        text: this.getState().ProfilePage.PostsPageData.newPostText,
        like_count: 0,
        author: "Koala San",
        imgSrc: "https://cdn-icons-png.flaticon.com/512/235/235355.png"
      }
      this.getState().ProfilePage.PostsPageData.newPostText = '';
      this.getState().ProfilePage.PostsPageData.PostsData.push(newPost);
      this.RenderEntireTree(this.getState());
    }
    else if (action.type === NewMessageOnChange) {
      this.getState().MessagesPage.NewMessageText = action.newText;
      this.RenderEntireTree(this.getState());
    }
    else if (action.type === NewPostOnchange) {
      this.getState().ProfilePage.PostsPageData.newPostText = action.newText;
      this.RenderEntireTree(this.getState());
    }
    else if (action.type === AddNewMessage) {
      let text = this.getState().MessagesPage.NewMessageText;
      let newMessage = {
        id: this.getState().MessagesPage.MessagesData.length + 1,
        message: text,
      }
      this.getState().MessagesPage.MessagesData.push(newMessage);
      this.getState().MessagesPage.NewMessageText = '';
      this.RenderEntireTree(this.getState());
    }
    else if (action.type === "LIKE-COUNT-ON-CHANGE") {
      if (action.change === "INCREASE") {
        this._state.ProfilePage.PostsPageData.PostsData.map(el => { if (el.id === action.id) { el.like_count += 1; return true } else return false })
        this.RenderEntireTree(this.getState());

      }
      else if (action.change === "REDUCE") {
        this._state.ProfilePage.PostsPageData.PostsData.map(el => { if (el.id === action.id) { el.like_count -= 1; return true } else return false })
        this.RenderEntireTree(this.getState());

      }
    }
  }

}


export let addPostActionCreator = () => ({type: AddPost})
export let newPostOnChangeActionCreator = (newText) => ({type: NewPostOnchange,newText: newText})
export let AddNewMessageActionCreator = () => ({type: AddNewMessage})
export let NewMessageOnChangeActionCreator = (newText) => ({type:NewMessageOnChange,newText: newText})
export default store;
