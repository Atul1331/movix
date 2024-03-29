import React, { useState } from "react";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { PlayIcon } from "../Playbtn";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="videosSection">
            <ContentWrapper>
                <div className="sectionHeading">Official Videos</div>
                {!loading ? (
                    <div className="videos">
                        {data?.results?.map((video) => {
                            return (
                                <div
                                    className="videoItem"
                                    key={video.id}
                                    onClick={() => {
                                        
                                        setVideoId(video.key);
                                        setShow(true);

                                    }}
                                >
                                    <Img

                                        src={
                                            video?.key
                                                ? `https://img.youtube.com/vi/${video.key}/mqdefault.jpg`
                                                : "https://www.2embed.to/embed/tmdb/tv?id=tt11870456"

                                        }
                                    />
                                    <div className="videoTitle">
                                        {video.name}
                                    </div>
                                    <PlayIcon
                                        className="playIcon"
                                        onClick={() => {
                                            
                                            setVideoId(video.key);
                                            setShow(true);

                                        }}
                                    />
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;