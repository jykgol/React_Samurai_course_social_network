import React from "react";
import Header from "./components/Header/Header";
import ContentContainer from "./components/Content/ContentContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import LeftmenuContainer from "./components/Leftmenu/LeftmenuContainer";
import Mysic from "./components/Mysic/Mysic";
import Settings from "./components/Settings/Settings";
import "./styles/App.css"
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {

    return (
        <div className="page">
            <div className="app_wraper">
                <div className="app_wraper_header">
                    <Header />
                </div>
                <div className="app_wraper_content _content">
                    <div className="app_wraper_left_content">
                        <LeftmenuContainer />
                    </div>
                    <div className="app_wraper_main_content">
                        <Routes>
                            <Route path="/profile/*" element={<ContentContainer />} />
                            <Route path="/messages/*" element={<DialogsContainer />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/mysic" element={<Mysic />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/users" element={<UsersContainer />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
