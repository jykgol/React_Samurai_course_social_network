import { combineReducers, configureStore } from '@reduxjs/toolkit';
import LeftMenuReduser from './LeftMenuReduser';
import MessagesReduser from './MessagesReduser';
import ProfileReduser from './ProfileReduser';

let store = configureStore({
    reducer: {
        ProfilePage: ProfileReduser,
        MessagesPage: MessagesReduser,
        LeftmenuPage: LeftMenuReduser
    }
});

export default store;