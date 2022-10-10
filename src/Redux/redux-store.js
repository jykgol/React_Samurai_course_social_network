import { configureStore } from '@reduxjs/toolkit';
import LeftMenuReduser from './LeftMenuReduser';
import MessagesReduser from './MessagesReduser';
import ProfileReduser from './ProfileReduser';
import UsersReduser from './UsersReduser';

let store = configureStore({
    reducer: {
        ProfilePage: ProfileReduser,
        MessagesPage: MessagesReduser,
        LeftmenuPage: LeftMenuReduser,
        UsersPage: UsersReduser,

    }
});

window.store = store;

export default store;