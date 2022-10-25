import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsers, setUsers, toggleIsFetching, unFollow } from "../../Redux/UsersReduser";
import UsersClass from "./UsersClass";

let mapStateToProps = (state) => {
    return {
        UsersData: state.UsersPage.UsersData,
        PageSize: state.UsersPage.PageSize,
        TotalUsers: state.UsersPage.TotalUsers,
        CurrentPage: state.UsersPage.CurrentPage,
        isFetching: state.UsersPage.isFetching,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id) => {
//             dispatch(followAC(id));
//         },
//         unFollow: (id) => {
//             dispatch(unFollowAC(id));
//         },
//         setUsers: (usersData) => {
//             dispatch(setUsersAC(usersData));
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page));
//         },
//         setTotalUsers: (TotalUsers) => {
//             dispatch(setTotalUsersAC(TotalUsers));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },

//     }
// }

const UsersContainer = connect(mapStateToProps, { follow, unFollow, setUsers, setCurrentPage, setTotalUsers, toggleIsFetching })(UsersClass);

export default UsersContainer;