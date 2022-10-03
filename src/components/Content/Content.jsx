import s from "./Content.module.css"
import PostsContainer from "./Posts/PostsContainer";
import Profile from "./Profile/Profile";

function Content(props) {

  return (
    <div className={s.Content}>
      <Profile ProfileData={props.ProfilePage.PostsPageData.ProfileData}/>
      <PostsContainer PostsPageData={props.ProfilePage.PostsPageData} dispatch={props.dispatch}/>
      
    </div>
  );
}

export default Content;