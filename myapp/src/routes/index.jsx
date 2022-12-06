import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import { Chats } from "../components/Chats";
import Profile from "../components/Profile";
import Error from "../components/Error";
import "./Routes.css"
import { Cataas } from "../components/Cataas";
import { SignUp } from "../components/Signup"

export const Routers = () => {
    return (
        <BrowserRouter>
            <Link to="/login">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/" className="Nav">
                Home
            </Link>
            <Link to="/chats" className="Nav">
                Chats
            </Link>
            <Link to="/profile" className="Nav">
                Profile
            </Link>
            <Link to="/cataas" className="Nav">
                Cataas
            </Link>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/chats" element={<Chats />}>
                    <Route exact path="/chats/:chatId" element={<Chats />} />
                </Route>
                {/* <Route exact path="/chats/:chatId" element={<Chats />} /> */}
                <Route path="/cataas" element={<Cataas />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};