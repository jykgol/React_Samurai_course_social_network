import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersAC, setUsersAC, unFollowAC } from "../../Redux/UsersReduser";
import Users from "./UsersClass";

let mapStateToProps = (state) => {
    return {
        UsersData: state.UsersPage.UsersData,
        PageSize: state.UsersPage.PageSize,
        TotalUsers: state.UsersPage.TotalUsers,
        CurrentPage: state.UsersPage.CurrentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id));
        },
        unFollow: (id) => {
            dispatch(unFollowAC(id));
        },
        setUsers: (usersData) => {
            dispatch(setUsersAC(usersData));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setTotalUsers: (TotalUsers) => {
            dispatch(setTotalUsersAC(TotalUsers));
        },

    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;