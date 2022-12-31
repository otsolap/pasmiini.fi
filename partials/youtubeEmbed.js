import React from "react";

const YoutubeEmbed = ({ src, className }) => {
  
  const YouTubeGetID = (url) => {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  };

  return (
      <iframe
        className={`youtube ${className}`}
        src={`https://www.youtube.com/embed/${YouTubeGetID(src)}`}
        playsInline
        controls="0"
        fs="0"
        rel="0"
        enablejsapi="1"
        hl="fi"
        modestbranding="1"
        title="Pasmiini Video"
      />
  );
};

export default YoutubeEmbed;
