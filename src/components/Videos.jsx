import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

import "./Videos.scss";

const Videos = ({ videos, channelVideos }) => {
  return (
    <div className="videos">
      {videos.map((video) => (
        <>
          {video.id.videoId && (
            <VideoCard
              key={video.id.videoId}
              video={video}
              channelVideos={channelVideos}
            />
          )}
          {video.id.channelId && (
            <ChannelCard key={video.id.channelId} channelDetails={video} />
          )}
        </>
      ))}
    </div>
  );
};

export default Videos;
