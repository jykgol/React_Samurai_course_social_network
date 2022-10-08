import StoreContext from "../../../StoreContext";
import Profile from "./Profile";


function ProfileContainer(props) {

  return (
    <StoreContext.Consumer>
      { store => {
          let state = store.getState();
          return (<Profile ProfileImage={state.ProfilePage.PostsPageData.ProfileData.ProfileImage}/>)
        }
      }
    </StoreContext.Consumer>
  )
}

export default ProfileContainer;