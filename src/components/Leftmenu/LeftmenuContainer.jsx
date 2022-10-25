import { connect } from "react-redux";
import { IsHiddenMenuSet } from "../../Redux/LeftMenuReduser";
import Leftmenu from "./Leftmenu";

let mapStateToProps = (state) => {
    return {
        NavbarData: state.LeftmenuPage.NavbarData,
        isHiddenMenu: state.LeftmenuPage.isHiddenMenu,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         IsHiddenMenuSet: () => {dispatch(IsHiddenMenuSetAC())},
//     }
// }
const LeftmenuContainer = connect(mapStateToProps, {IsHiddenMenuSet})(Leftmenu);

export default LeftmenuContainer;