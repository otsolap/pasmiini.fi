import React from "react";

const YoutubeEmbed = ({ link }) => {
  
  const YouTubeGetID = (url) => {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  };

  return (
    <div className="video">
      <iframe
        width="700"
        height="500"
        src={YouTubeGetID(link)}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Pasmiini Video"
      />
    </div>
  );
};

export default YoutubeEmbed;
