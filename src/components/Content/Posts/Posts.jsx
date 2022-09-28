import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";
import { addPostActionCreator, newPostOnChangeActionCreator } from "../../../Redux/State";


function Posts(props) {

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(newPostOnChangeActionCreator(text));
  }

  let newPostElement = React.createRef();

  let PostsDataRestore = props.PostsPageData.PostsData.map( el =>  <Post dispatch={props.dispatch} id={el.id} like_count= {el.like_count} text={el.text} imgSrc={el.imgSrc} author={el.author}/> )

  return (
    <div className={s.posts}>
      <div className={s.postContent}>
        <div className={s.newPostInput}><textarea className={s.newPostTextArea} ref={newPostElement} value={props.PostsPageData.newPostText} onChange={onPostChange} /></div>
        <div><button className={s.newPostButton} onClick={addPost}>add post</button></div>
      </div>
      <div>
         {PostsDataRestore}
      </div>
    </div>
  );
}

export default Posts;