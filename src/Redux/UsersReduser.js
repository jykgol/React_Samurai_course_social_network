const followCase = 'followCase';
const unFollowCase = 'unFollowCase';
const setUsersCase = 'setUsersCase';
const setCurrentPageCase = 'setCurrentPageCase';
const setTotalUsersCase = 'setTotalUsersCase';
const toggleIsFetchingCase = 'toggleIsFetchingCase';

let initialstate = {
    UsersData: [],
    PageSize: 12,
    TotalUsers: 78,
    CurrentPage: 1,
    isFetching: true,
};

const UsersReduser = (state = initialstate, action) => {

    switch (action.type) {

        case (followCase):
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

        case (unFollowCase):
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

        case (setUsersCase):
            return (
                { ...state, UsersData: [...action.usersData] }
            )
        case (setCurrentPageCase):
            return (
                { ...state, CurrentPage: action.page }
            )
        case (setTotalUsersCase):
            return (
                { ...state, TotalUsers: action.TotalUsers }
            )
        case (toggleIsFetchingCase):
            return (
                { ...state, isFetching: action.isFetching}
            )
                
        default: return state;

    }


}

export const follow = (userId) => ({ type: followCase, userId });
export const unFollow = (userId) => ({ type: unFollowCase, userId });
export const setUsers = (usersData) => ({ type: setUsersCase, usersData });
export const setCurrentPage = (page) => ({ type: setCurrentPageCase, page });
export const setTotalUsers = (TotalUsers) => ({ type: setTotalUsersCase, TotalUsers });
export const toggleIsFetching = (isFetching) => ({ type: toggleIsFetchingCase, isFetching });

export default UsersReduser;