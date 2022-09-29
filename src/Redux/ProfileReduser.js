const AddPost = "ADD-POST";
const NewPostOnchange = "NEW-POST-TEXT-ON-CHANGE";
const LikeCountOnChange = "LIKE-COUNT-ON-CHANGE";
const Reduse = "REDUCE";
const Increase = "INCREASE";

const ProfileReduser = (state, action) => {

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