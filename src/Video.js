import React,{ useState, useRef} from "react";
import VideoFooter from "./VideoFooter.js";
import VideoSidebar from "./VideoSidebar.js";
import "./Video.css";

function Video({ url, channel, description, song, likes, shares, messages}) {
  const videoRef = useRef(null);
  const [ playing, setPlaying ] = useState(false);
  const onVideoClick = () => {
    if(playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }
  return (
    <div className="video">
      <video 
      className="video_player"
      loop
      onClick={onVideoClick}
      ref={videoRef}
      src={url}
      ></video>
      <VideoFooter 
      channel={channel}
      description={description}
      song={song}/>
      <VideoSidebar likes={likes} messages={messages} shares={shares}/>
    </div>
  );
}

export default Video;
