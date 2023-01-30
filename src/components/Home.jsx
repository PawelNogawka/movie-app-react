import React, { useState, useEffect } from "react";

import Categories from "./categories";
import Videos from "./Videos";

import { fetchApi } from "../utils/fetchApi";

import "./Home.scss";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("new");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetchApi(
        `search?q=${selectedCategory}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`
      );

      setVideos(data.items);
    };

    getVideos();
  }, [selectedCategory]);

  return (
    <div className="home">
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Videos videos={videos} />
    </div>
  );
};

export default Home;
