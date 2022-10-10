import { connect } from "react-redux";
import { addPostActionCreator, newPostOnChangeActionCreator, LikeCountOnChangeActionCreator } from "../../../Redux/ProfileReduser";
import Posts from "./Posts"
const Reduse = "REDUCE";
const Increase = "INCREASE";


let mapStateToProps = (state) => {
    return {
        PostsData: state.ProfilePage.PostsPageData.PostsData,
        newPostText: state.ProfilePage.PostsPageData.newPostText
    }
  }
  let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        PostChange: (text) => {dispatch(newPostOnChangeActionCreator(text))},
        Increment: (id) => {dispatch(LikeCountOnChangeActionCreator(Increase, id))},
        Decrement: (id) => {dispatch(LikeCountOnChangeActionCreator(Reduse, id))},
    }
  }
  const PostsContainer = connect (mapStateToProps, mapDispatchToProps)(Posts);


export default PostsContainer;