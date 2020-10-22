import React from "react";
import VideoItem from "./video-item";

const VideoList = ({ videos, onVideoSelect }) => {
  const listVideos = videos.map((video, idx) => {
    return (
      <VideoItem
        key={idx.toString()}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{listVideos}</div>;
};

export default VideoList;
