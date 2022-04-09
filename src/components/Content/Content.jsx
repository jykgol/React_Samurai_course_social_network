import s from "./Content.module.css"
import Posts from "./Posts/Posts";
import Profile from "./Profile/Profile";

function Content(props) {

  return (
    <div className={s.Content}>
      <Profile/>
      <Posts PostsPageData={props.ProfilePage.PostsPageData} dispatch={props.dispatch}/>
      
    </div>
  );
}

export default Content;