import React from "react";
import Content from "./Content";
import axios from "axios";
import { PhotoStartOnChange, setUserProfile } from "../../Redux/ProfileReduser";
import { connect } from "react-redux";


class ContentContainer extends React.Component {

  componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/"+2).then(
          Response => {
            this.props.setUserProfile(Response.data);
            
        })
  }


  render() {
    return (
      <Content {...this.props} />
    )
  }

}

let mapStateToProps = (state) => {
  return(
    {
      ProfileData: state.ProfilePage.ProfileData,
      ProfileServerData: state.ProfilePage.ProfileServerData,
    }
  )
}

export default connect(mapStateToProps,{setUserProfile,PhotoStartOnChange})(ContentContainer);