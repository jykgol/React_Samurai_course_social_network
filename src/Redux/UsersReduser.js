const follow = 'Follow';
const unFollow = 'UnFollow';
const setUsers = 'setUsers';
const setCurrentPage = 'setCurrentPage';
const setTotalUsers = 'setTotalUsers';

let initialstate = {
    UsersData: [],
    PageSize: 12,
    TotalUsers: 78,
    CurrentPage: 1,
};

const UsersReduser = (state = initialstate, action) => {

    switch (action.type) {

        case (follow):
            return (
                {
                    ...state,
                    UsersData: state.UsersData.map( el => {
                        if (el.id === action.userId){
                            return { ...el, followed: true};
                        }else{
                            return el;
                        }
                    }
                    )
                });

        case (unFollow):
            return (
                {
                    ...state,
                    UsersData: state.UsersData.map((el) => {
                        if (el.id === action.userId){
                            return { ...el, followed: false }
                        }
                        else
                            return el;
                    }
                    )
                })

        case (setUsers):
            return (
                { ...state, UsersData: [...action.usersData] }
            )
        case (setCurrentPage):
            return (
                { ...state, CurrentPage: action.page }
            )
        case (setTotalUsers):
            return (
                { ...state, TotalUsers: action.TotalUsers }
            )

        default: return state;

    }


}

export const followAC = (userId) => ({ type: follow, userId });
export const unFollowAC = (userId) => ({ type: unFollow, userId });
export const setUsersAC = (usersData) => ({ type: setUsers, usersData });
export const setCurrentPageAC = (page) => ({ type: setCurrentPage, page });
export const setTotalUsersAC = (TotalUsers) => ({ type: setTotalUsers, TotalUsers });

export default UsersReduser;