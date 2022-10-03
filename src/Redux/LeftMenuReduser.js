let initialstate = {
    NavbarData: [
        { navLink_to: "/", text: "Profile", img_src: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png" },
        { navLink_to: "/messages", text: "Messages", img_src: "https://cdn-icons-png.flaticon.com/512/589/589671.png" },
        { navLink_to: "/news", text: "News", img_src: "https://cdn-icons-png.flaticon.com/512/1074/1074106.png" },
        { navLink_to: "/mysic", text: "Mysic", img_src: "https://cdn-icons-png.flaticon.com/512/748/748134.png" },
        { navLink_to: "/settings", text: "Settings", img_src: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png" },
    ]
};

const LeftMenuReduser = (state = initialstate, action) => {
    
    return state;
}

export default LeftMenuReduser;