import s from "./Content.module.css"
import PostsContainer from "./Posts/PostsContainer";
import ProfileContainer from "./Profile/ProfileContainer";

function Content(props) {

  return (
    <div className={s.Content}>
      <ProfileContainer ProfileData={props.ProfilePage.PostsPageData.ProfileData}/>
      <PostsContainer PostsPageData={props.ProfilePage.PostsPageData} dispatch={props.dispatch}/>
      
    </div>
  );
}

export default Content;