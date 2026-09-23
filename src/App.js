import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";


import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import UserContext from "./components/UserContext";

import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";
import ReducerCounter from "./components/ReducerCounter";
import NewCounter from "./components/NewCounter";

const AppLayout = () => {
    const [name, setName] = useState('Dinesh');
    return (
        <div className="app">
            <UserContext.Provider value={name}>
                <Header />
                <Body />
                <Timer />
                <Stopwatch />
                <ReducerCounter />
                <NewCounter />
                <Footer />
            </UserContext.Provider>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
