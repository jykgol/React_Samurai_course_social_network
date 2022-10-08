import s from "./Content.module.css"
import PostsContainer from "./Posts/PostsContainer";
import ProfileContainer from "./Profile/ProfileContainer";

function Content(props) {

  return (
    <div className={s.Content}>
      <ProfileContainer />
      <PostsContainer />
    </div>
  );
}

export default Content;