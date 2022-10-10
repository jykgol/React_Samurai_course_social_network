const AddPost = "ADD-POST";
const NewPostOnchange = "NEW-POST-TEXT-ON-CHANGE";
const LikeCountOnChange = "LIKE-COUNT-ON-CHANGE";
const Reduse = "REDUCE";
const Increase = "INCREASE";

let initialstate = {
    PostsPageData: {
        PostsData: [
            { id: 0, like_count: 78, liked: false, text: "У Фрэнка опять проблемы: он проспорил довольно крупную сумму денег, в результате чего Лиама берут в заложники. Галлагерам придется постараться, чтобы выкупить брата.", imgSrc: "https://cdn-icons-png.flaticon.com/512/235/235355.png", author: "Koala San" },
            { id: 1, like_count: 2, liked: true, text: "post nahoooi", imgSrc: "https://cdn-icons-png.flaticon.com/512/235/235355.png", author: "Koala San" },
        ],
        newPostText: "New text is waiting for you",
        ProfileData: {
            ProfileImage: "https://sun9-82.userapi.com/impg/yoNEV77YAGNbEnggrxM2azysdivaE7r2avPB7Q/HIlFUm5Hvyg.jpg?size=863x1080&quality=95&sign=3d0862e05fc06275ab8999115c4162de&type=album",
        }
    }
};

const ProfileReduser = (state = initialstate, action) => {
    let stateCopy;

    switch (action.type) {
        case AddPost:
            let newPost = {
                id: state.PostsPageData.PostsData.length,
                text: state.PostsPageData.newPostText,
                liked: false,
                like_count: 0,
                author: "Koala San",
                imgSrc: "https://cdn-icons-png.flaticon.com/512/235/235355.png"
            }
            stateCopy = { ...state, PostsPageData: { ...state.PostsPageData, newPostText: '', PostsData: [...state.PostsPageData.PostsData, newPost] } };
            return stateCopy;

        case NewPostOnchange:
            stateCopy = { ...state, PostsPageData: { ...state.PostsPageData, newPostText: action.newText } };
            return stateCopy;

        case LikeCountOnChange: {
            stateCopy = { ...state, PostsPageData: { ...state.PostsPageData } };
            let OldPostsData = [...state.PostsPageData.PostsData];
            if (action.change === Increase) {
                let newPostData = OldPostsData.map(el => {
                    if (el.id === action.id) {
                        let new_el = { ...el };
                        new_el.like_count += 1;
                        new_el.liked = !el.liked;
                        return new_el;
                    } else {
                        let new_el = { ...el }
                        return new_el;
                    }

                })
                stateCopy.PostsPageData.PostsData = [...newPostData];
            }
            else if (action.change === Reduse) {
                let newPostData = OldPostsData.map(el => {
                    if (el.id === action.id) {
                        let new_el = { ...el };
                        new_el.like_count -= 1;
                        new_el.liked = !el.liked;
                        return new_el;
                    } else {
                        let new_el = { ...el }
                        return new_el;
                    }
                })
                stateCopy.PostsPageData.PostsData = [...newPostData];
            }
            return stateCopy;
        }
        default:
            return state;
    }
}

export let addPostActionCreator = () => ({ type: AddPost })
export let newPostOnChangeActionCreator = (newText) => ({ type: NewPostOnchange, newText: newText })
export let LikeCountOnChangeActionCreator = (change, id) => ({ type: LikeCountOnChange, change: change, id: id })
export default ProfileReduser;