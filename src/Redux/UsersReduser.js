const follow = 'Follow';
const unFollow = 'UnFollow';
const setUsers = 'setUsers';

let initialstate = {
    UsersData: [],
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
                { ...state, UsersData: [...state.UsersData, ...action.usersData] }
            )

        default: return state;

    }


}

export const followAC = (userId) => ({ type: follow, userId });
export const unFollowAC = (userId) => ({ type: unFollow, userId });
export const setUsersAC = (usersData) => ({ type: setUsers, usersData });

export default UsersReduser;