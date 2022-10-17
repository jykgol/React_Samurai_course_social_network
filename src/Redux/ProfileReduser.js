const AddPost = "ADD-POST";
const NewPostOnchange = "NEW-POST-TEXT-ON-CHANGE";
const LikeCountOnChange = "LIKE-COUNT-ON-CHANGE";
const SetImage = "SET-IMAGE";
const Reduse = "REDUCE";
const Increase = "INCREASE";
const PhotosStartOnChange = "PHOTO-START-ON-CHANGE";


let initialstate = {
    PostsPageData: {
        PostsData: [
            { id: 0, like_count: 78, liked: false, text: "У Фрэнка опять проблемы: он проспорил довольно крупную сумму денег, в результате чего Лиама берут в заложники. Галлагерам придется постараться, чтобы выкупить брата.", imgSrc: "https://cdn-icons-png.flaticon.com/512/235/235355.png", author: "Koala San" },
            { id: 1, like_count: 2, liked: true, text: "post nahoooi", imgSrc: "https://cdn-icons-png.flaticon.com/512/235/235355.png", author: "Koala San" },
        ],
        newPostText: "New text is waiting for you"
    },
    ProfileData: {
        ProfileImage: "https://sun9-82.userapi.com/impg/yoNEV77YAGNbEnggrxM2azysdivaE7r2avPB7Q/HIlFUm5Hvyg.jpg?size=863x1080&quality=95&sign=3d0862e05fc06275ab8999115c4162de&type=album",
        Visible: true,
        PhotosStart: 0,
        Photos: [
            { id: 0, src: "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" },
            { id: 1, src: "https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" },
            { id: 2, src: "https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" },
            { id: 3, src: "https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" },
            { id: 4, src: "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" },
            { id: 5, src: "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" },
            { id: 6, src: "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" },
            { id: 7, src: "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" },
            { id: 8, src: "https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" },
        ]
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

        case SetImage: {
            return {
                ...state, ProfileData:
                    { ...state.ProfileData, ProfileImage: action.newImgUrl }
            }
        }

        case PhotosStartOnChange: {
            stateCopy = { ...state, ProfileData: { ...state.ProfileData } };

            if (action.change === Increase) {
                if (stateCopy.ProfileData.PhotosStart < (stateCopy.ProfileData.Photos.length-5)) {
                    stateCopy.ProfileData.PhotosStart += 1;
                }
            }
            else if (action.change === Reduse) {
                if (stateCopy.ProfileData.PhotosStart > 0) {
                    stateCopy.ProfileData.PhotosStart -= 1;
                }
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
export let PhotoStartOnChangeActionCreator = (change) => ({ type: PhotosStartOnChange, change })
export let SetImageActionCreator = (newImgUrl) => ({ type: SetImage, newImgUrl })
export default ProfileReduser;