import React from "react";
import { addPostActionCreator, newPostOnChangeActionCreator, LikeCountOnChangeActionCreator } from "../../../Redux/ProfileReduser";
import Posts from "./Posts"
const Reduse = "REDUCE";
const Increase = "INCREASE";

function PostsContainer(props) {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let PostChange = (text) => {
        props.dispatch(newPostOnChangeActionCreator(text));

    }
    let Increment = (id) => {
        props.dispatch(LikeCountOnChangeActionCreator(Increase, id));
    }
    let Decrement = (id) => {
        props.dispatch(LikeCountOnChangeActionCreator(Reduse, id));
    }
    return (
        <div>
            <Posts addPost={addPost} PostChange={PostChange} Increment={Increment} Decrement={Decrement} PostsData={props.PostsPageData.PostsData} newPostText={props.PostsPageData.newPostText} />
        </div>
    )
}

export default PostsContainer;