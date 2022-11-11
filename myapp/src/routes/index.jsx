import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import { Chats } from "../components/Chats";
import Profile from "../components/Profile";
import Error from "../components/Error";
import "./Routes.css"

export const Routers = () => {
  return (
    <BrowserRouter>
      <Link to="/" className="Nav">
        Home
      </Link>
      <Link to="/chats" className="Nav">
        Chats
      </Link>
      <Link to="/profile" className="Nav">
        Profile
      </Link>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chats" element={<Chats />}>
          <Route exact path="/chats/:chatId" element={<Chats />} />
        </Route>
        {/* <Route exact path="/chats/:chatId" element={<Chats />} /> */}

        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
