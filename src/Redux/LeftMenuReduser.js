const IsHiddenMenuSetCase = "IsHiddenMenuSet";

let initialstate = {
    isHiddenMenu: false,
    NavbarData: [
        { id: 1, navLink_to: "/", text: "Profile", img_src: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png" },
        { id: 2, navLink_to: "/users", text: "Users", img_src: "https://cdn-icons-png.flaticon.com/512/1500/1500455.png" },
        { id: 3, navLink_to: "/messages", text: "Messages", img_src: "https://cdn-icons-png.flaticon.com/512/589/589671.png" },
        { id: 4, navLink_to: "/news", text: "News", img_src: "https://cdn-icons-png.flaticon.com/512/1074/1074106.png" },
        { id: 5, navLink_to: "/mysic", text: "Mysic", img_src: "https://cdn-icons-png.flaticon.com/512/748/748134.png" },
        { id: 6, navLink_to: "/settings", text: "Settings", img_src: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png" },
        
    ]
};

const LeftMenuReduser = (state = initialstate, action) => {

    switch (action.type){

        case (IsHiddenMenuSetCase): {
            return {...state, isHiddenMenu: !state.isHiddenMenu}
        }

        default: return state;
    }

}

export default LeftMenuReduser;

export const IsHiddenMenuSet = () => ({type: IsHiddenMenuSetCase});