import React from "react";
import { Link } from "react-router-dom";

import { AiFillCheckCircle } from "react-icons/ai";

import moment from "moment";

import "./VideoCard.scss";

const VideoCard = ({ video, suggested, channelVideos }) => {
  const { snippet } = video;

  const channelLink = (
    <Link to="/" className="video-card__channel-name">
      {snippet.channelTitle}
      <AiFillCheckCircle />
    </Link>
  );

  const cardStyle = suggested
    ? "video-card video-card--suggested"
    : "video-card";
  const imgStyle = suggested
    ? "video-card__img video-card__img--suggested"
    : "video-card__img";

  return (
    <Link to={`/video/${video.id.videoId}`} className={cardStyle}>
      <div className="video-card__top">
        <img
          src={snippet.thumbnails.high.url}
          alt={snippet.title}
          className={imgStyle}
        />
      </div>

      <div className="video-card__bottom">
        <h3 className="video-card__title">
          {snippet.title.length > 40
            ? snippet.title.slice(0, 40) + "..."
            : snippet.title}
        </h3>
        {!channelVideos ? channelLink : ""}
        <span className="video-card__published">
          {moment(snippet.publishTime).format("MMM Do Y")}
        </span>
      </div>
    </Link>
  );
};

export default VideoCard;
