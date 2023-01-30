import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { fetchApi } from "../utils/fetchApi";

import VideoCard from "./VideoCard";

import { AiFillCheckCircle } from "react-icons/ai";

import millify from "millify";
import moment from "moment/moment";

import "./VideoDetails.scss";

import ReactPlayer from "react-player/youtube";

const VideoDetails = () => {

  const [details, setDetails] = useState([]);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try{const videoDetails = await fetchApi(
        `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`
      );

      setDetails(videoDetails.items[0]);

      const suggestedVideos = await fetchApi(
        `search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=20`
      );

      setVideos(suggestedVideos.items);}
      catch(error){
        setError(error);
      }
      
    };
    getData();
  }, [id]);

  if (error) {
    return <p className="api-message api-message__error">There is an error: {error.message}</p>;
  }

  if (!details?.snippet) return <p className="api-message api-message__loading">Loading...</p>;

  const {
    snippet: { title, channelTitle, description, tags, publishedAt },
    statistics: { commentCount, viewCount, likeCount },
  } = details;



  return (
    <div className="video-details">
      <div className="video-details__card">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          className="video-details__player"
        />

        <div className="video-details__bottom">
          <div className="video-details__row">
            <div className="video-details__header">
              <h3 className="video-details__title">{title}</h3>
              <span className="video-details__channelTitle">
                {channelTitle}
                <AiFillCheckCircle />
              </span>
              <span className="video-details__publishDate">
                {moment(publishedAt).format("MMM Do Y")}
              </span>
            </div>
            <div className="video-details__stats">
              <span className="video-details__box">
                Views: {millify(viewCount)}
              </span>
              <span className="video-details__box">
                Likes: {millify(likeCount)}
              </span>
            </div>
          </div>
          <p className="video-details__desc">{description}</p>
          <div className="video-details__tags">
            {tags && tags.map((tag,index) => <div key={tags[index]}>{tag}</div>)}
          </div>
          <span className="video-details__comments">
            comments({commentCount ? commentCount : 0})
          </span>
        </div>
      </div>
      <div className="video-details__suggested-videos">
        {videos.map((video) => (
          <VideoCard video={video} suggested />
        ))}
      </div>
    </div>
  );
};

export default VideoDetails;
