import s from "./Content.module.css"
import PostsContainer from "./Posts/PostsContainer";
import Profile from "./Profile/Profile";

function Content(props) {
  return (
    <div className={s.Content}>
      <Profile {...props} />
      <PostsContainer />
    </div>
  );
}

export default Content;