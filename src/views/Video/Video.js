

import React, { useEffect, useRef, useState } from 'react';
import VideoFooter from '../Video Footer/VideoFooter';
import VideoSidebar from '../Video Sidebar/VideoSidebar';
import './Video.css';

function Video({ index, url, channel, description, song, likes, messages, shares }) {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if(isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        }else{
            videoRef.current.play();
            setIsPlaying(true);
        }
    }

    // useEffect(() => {
    //     console.log(index);
    //     index === 0 && videoRef.current.click();
    // }, []);

  return ( 
    <div className='video'>
        <video className='video_player' ref={videoRef} onClick={handleVideoPress} loop src={url}></video>

        <VideoFooter channel={channel} description={description} song={song}/>

        <VideoSidebar likes={likes} shares={shares} messages={messages}/>
    </div>
  )
}

export default Video