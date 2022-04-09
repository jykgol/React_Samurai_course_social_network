import React from 'react';
import Leftmenu from './components/Leftmenu/Leftmenu';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Mysic from './components/Mysic/Mysic';
import Settings from './components/Settings/Settings';
import "./styles/App.css"


function App(props) {

  return (
    <BrowserRouter>
      <div className="page">
        <div className='app_wraper'>
          <div className="_content">
            <Header />
          </div>
          <div className="app_wraper_content _content">
            <Leftmenu LeftmenuPage={props.state.LeftmenuPage} />
            <div className='app_wraper_main_content'>
              <Routes>
                <Route path="/" element={<Content ProfilePage={props.state.ProfilePage} dispatch={props.dispatch} />} />
                <Route path="/messages/*" element={<Dialogs MessagesPage={props.state.MessagesPage} dispatch={props.dispatch} />} />
                <Route path="/news" element={<News />} />
                <Route path="/mysic" element={<Mysic />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
