import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
                <Route path='/Settings' component={Settings}/>
            </div>

        </div>
        </BrowserRouter>)
}


export default App;