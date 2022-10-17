import { connect } from "react-redux";
import { PhotoStartOnChangeActionCreator } from "../../../Redux/ProfileReduser";
import Profile from "./Profile";
const Reduse = "REDUCE";
const Increase = "INCREASE";


let mapStateToProps = (state) => {
  return {
    ProfileData: state.ProfilePage.ProfileData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    IncreaseButton: () => {
      dispatch(PhotoStartOnChangeActionCreator(Increase));
    },
    ReduceButton: () => {
      dispatch(PhotoStartOnChangeActionCreator(Reduse));
    }

  }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;