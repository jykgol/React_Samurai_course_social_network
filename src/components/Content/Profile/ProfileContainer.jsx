import { connect } from "react-redux";
import { PhotoStartOnChange } from "../../../Redux/ProfileReduser";
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
      dispatch(PhotoStartOnChange(Increase));
    },
    ReduceButton: () => {
      dispatch(PhotoStartOnChange(Reduse));
    }

  }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;