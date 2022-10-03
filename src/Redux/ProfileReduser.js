const AddPost = "ADD-POST";
const NewPostOnchange = "NEW-POST-TEXT-ON-CHANGE";
const LikeCountOnChange = "LIKE-COUNT-ON-CHANGE";
const Reduse = "REDUCE";
const Increase = "INCREASE";

let initialstate = {
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
};

const ProfileReduser = (state = initialstate, action) => {

    switch(action.type){
        case AddPost:
            let newPost = {
                id: state.PostsPageData.PostsData.length + 1,
                text: state.PostsPageData.newPostText,
                like_count: 0,
                author: "Koala San",
                imgSrc: "https://cdn-icons-png.flaticon.com/512/235/235355.png"
            }
            state.PostsPageData.newPostText = '';
            state.PostsPageData.PostsData.push(newPost);
            return state;
        case NewPostOnchange:
            debugger;
            state.PostsPageData.newPostText = action.newText;
            return state;
        case LikeCountOnChange:
            if (action.change === Increase) {
                state.PostsPageData.PostsData.map(el => { if (el.id === action.id) { el.like_count += 1;}})
            }
            else if (action.change === Reduse) {
                state.PostsPageData.PostsData.map(el => { if (el.id === action.id) { el.like_count -= 1;}})
            }
            return state;
        default:
            return state;
    }
}

export let addPostActionCreator = () => ({ type: AddPost })
export let newPostOnChangeActionCreator = (newText) => ({ type: NewPostOnchange, newText: newText })
export let LikeCountOnChangeActionCreator = (change,id) => ({ type: LikeCountOnChange, change: change, id: id})
export default ProfileReduser;