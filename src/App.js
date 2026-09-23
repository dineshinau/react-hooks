import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import UserContext from "./components/UserContext";

const AppLayout = () => {
    const [name, setName] = useState('Dinesh');
    return (
        <div className="app">
            <UserContext.Provider value={name}>
                <Header />
                <Body />
                <Footer />
            </UserContext.Provider>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
