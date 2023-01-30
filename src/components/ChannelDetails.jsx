import React, { useEffect, useState } from "react";

import Videos from "./Videos";

import { useParams } from "react-router-dom";

import { fetchApi } from "../utils/fetchApi";

import millify from "millify";
import moment from "moment/moment";

import BannerDefaultImg from "../assets/channel-detalis-default.jpg";

import "./ChannelDetails.scss";

const ChannelDetails = () => {
  const [details, setDetails] = useState([]);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try{
        const channelDetails = await fetchApi(
          `channels?part=snippet%2Cstatistics&id=${id}`
        );
  
        setDetails(channelDetails.items[0]);
  
        const channelVideos = await fetchApi(
          `search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`
        );
  
        setVideos(channelVideos.items);
      }catch(error){
        setError(error)
      }

      
    };
    getData();
  }, [id]);

  let bannerImgSrc = "";
  if (
    details.brandingSettings &&
    details.brandingSettings.image &&
    details.brandingSettings.image.bannerExternalUrl
  ) {
    bannerImgSrc = details.brandingSettings.image.bannerExternalUrl;
  } else {
    bannerImgSrc = BannerDefaultImg;
  }


  if (error) {
    return <p className="api-message api-message__error">There is an error: {error.message}</p>;
  }

  if (!details?.snippet) return <p className="api-message api-message__loading">Loading...</p>;

  return (
    <main className="channel-details">
      <div className="channel-details__img-box">
        <img
          className="channel-details__img"
          src={bannerImgSrc}
          alt={details.snippet.title}
        />
      </div>
      <div className="channel-details__container">
        <div className="channel-details__card">
          <div className="channel-details__avatar">
            <img
              className="channel-details__avatar-img"
              src={details.snippet.thumbnails.default.url}
              alt={details.snippet.title}
              width={88}
              height={88}
            />
          </div>
          <h1 className="channel-details__title">{details.snippet.title}</h1>
          <ul className="channel-details__list">
            <li className="channel-details__list-item">
              subscribers:
              <span>{millify(details.statistics.subscriberCount)}</span>
            </li>
            <li className="channel-details__list-item">
              Videos:
              <span>{millify(details.statistics.videoCount)}</span>
            </li>
            <li className="channel-details__list-item">
              All views:
              <span>{millify(details.statistics.viewCount)}</span>
            </li>
            <li className="channel-details__list-item">
              Published at:
              <span>
                {moment(details.snippet.publishedAt).format("MMM Do Y")}
              </span>
            </li>
          </ul>
        </div>
        <div className="channel-details__row">
          <div className="channel-details__desc">
            <h2 className="channel-details__desc-title">desciption:</h2>
            <p className="channel-details__desc-content">
              {details.snippet.description}
            </p>
          </div>
          <Videos videos={videos} channelVideos={true} />
        </div>
      </div>
    </main>
  );
};

export default ChannelDetails;
