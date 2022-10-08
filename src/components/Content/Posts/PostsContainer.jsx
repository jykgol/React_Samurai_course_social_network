import React from "react";
import { addPostActionCreator, newPostOnChangeActionCreator, LikeCountOnChangeActionCreator } from "../../../Redux/ProfileReduser";
import StoreContext from "../../../StoreContext";
import Posts from "./Posts"
const Reduse = "REDUCE";
const Increase = "INCREASE";

function PostsContainer(props) {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                    let PostChange = (text) => {
                        store.dispatch(newPostOnChangeActionCreator(text));

                    }
                    let Increment = (id) => {
                        store.dispatch(LikeCountOnChangeActionCreator(Increase, id));
                    }
                    let Decrement = (id) => {
                        store.dispatch(LikeCountOnChangeActionCreator(Reduse, id));
                    }
                    return <Posts addPost={addPost}
                        PostChange={PostChange}
                        Increment={Increment}
                        Decrement={Decrement}
                        PostsData={state.ProfilePage.PostsPageData.PostsData}
                        newPostText={state.ProfilePage.PostsPageData.newPostText} />
                }
            }
        </StoreContext.Consumer>


    )
}

export default PostsContainer;