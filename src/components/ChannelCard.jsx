import React from "react";
import { Link } from "react-router-dom";
import "./ChannelCard.scss";

const ChannelCard = ({ channelDetails }) => {
  const { snippet } = channelDetails;
  console.log(snippet);

  return (
    <Link to={`/channel/${snippet.channelId}`} className="channel-card">
      <div className="channel-card__top">
        <img
          src={snippet.thumbnails.high.url}
          alt={snippet.channelTitle}
          className="channel-card__img"
        />
      </div>
      <h3 className="channel-card__title">{snippet.channelTitle}</h3>
      <p className="channel-card__desc">
        {snippet.description ? snippet.description : "no description"}
      </p>
    </Link>
  );
};

export default ChannelCard;
