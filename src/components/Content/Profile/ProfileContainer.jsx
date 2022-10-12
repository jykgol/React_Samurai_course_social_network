import { connect } from "react-redux";
import Profile from "./Profile";


let mapStateToProps = (state) => {
  return {
    ProfileData: state.ProfilePage.PostsPageData.ProfileData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {

  }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;