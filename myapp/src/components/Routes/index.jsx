import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from '../Home';
import { Chats } from '../Chats';
import Profile from '../Profile';
// import Error from '../Error'

export const Routers = () => {
    return (
        <BrowserRouter>
            <Link to="/" className="Nav">Home</Link>
            <Link to="/chats" className="Nav">Chats</Link>
            <Link to="/profile" className="Nav">Profile</Link>
            <Routes>
                <Route exact path="/" element={<Home />} />


                <Route path="/chats/:chatId?" element={<Chats />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="/dashboard" element={<Navigate to="/" />} />

            </Routes>
        </BrowserRouter >
    )
}