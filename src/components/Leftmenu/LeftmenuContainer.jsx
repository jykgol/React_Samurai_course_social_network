import { connect } from "react-redux";
import Leftmenu from "./Leftmenu";

let mapStateToProps = (state) => {
    return {
        NavbarData: state.LeftmenuPage.NavbarData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const LeftmenuContainer = connect(mapStateToProps, mapDispatchToProps)(Leftmenu);

export default LeftmenuContainer;