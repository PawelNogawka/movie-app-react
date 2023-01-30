import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import VideoDetails from "./components/VideoDetails";
import SearchVideos from "./components/SearchVideos";
import ChannelDetails from "./components/ChannelDetails";

import "./App.scss";

const App = () => {
  return (
    <div className="container">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/video/:id" element={<VideoDetails/>} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchVideos />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
