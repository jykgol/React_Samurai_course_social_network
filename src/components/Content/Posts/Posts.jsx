import React from "react";
import s from "./Posts.module.css"
import Post from "./Post/Post";

function Posts(props) {

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.PostChange(text);
    }
    let onIncrement = (id) => {
        props.Increment(id);
    }
    let onDecrement = (id) => {
        props.Decrement(id);
    }
    let PostsDataRestore = props.PostsData.map(el => <Post key={el.id} Increment={onIncrement} Decrement={onDecrement} liked={el.liked} id={el.id} like_count={el.like_count} text={el.text} imgSrc={el.imgSrc} author={el.author} />)

    return (
        <div className={s.posts}>
            <div className={s.postContent}>
                <div className={s.newPostInput}>
                    <textarea className={s.newPostTextArea} value={props.newPostText} onChange={onPostChange} />
                </div>
                <div>
                    <button className={s.newPostButton} onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div>
                {PostsDataRestore}
            </div>
        </div>
    );
}

export default Posts;