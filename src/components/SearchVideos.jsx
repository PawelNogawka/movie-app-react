import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { fetchApi } from "../utils/fetchApi";

import Videos from "./Videos";

const SearchVideos = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  let { searchTerm } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      try{
        const data = await fetchApi(
          `search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`
        );
        setVideos(data.items);
      }
      catch(error){
        setError(error)
      }
      
    };

    getVideos();
  }, [searchTerm]);

  if (error) {
    return <p className="api-message api-message__error">There is an error: {error.message}</p>;
  }

  if (videos.length < 1) return <p className="api-message api-message__loading">Loading...</p>;

  return (
    <div className="search-videos">
      <Videos videos={videos} />
    </div>
  );
};

export default SearchVideos;
