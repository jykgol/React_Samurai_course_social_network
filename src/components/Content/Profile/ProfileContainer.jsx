import { connect } from "react-redux";
import Profile from "./Profile";


let mapStateToProps = (state) => {
  return {
    ProfileImage: state.ProfilePage.PostsPageData.ProfileData.ProfileImage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {

  }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;