
import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Video from './views/Video/Video';
import axios from "./axios/axios";

function App() {

  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   async function fetchVideos(){
  //     const response = await axios.get('videos.json');
  //     setVideos(response.data);

  //     return response;
  //   }

  //   fetchVideos();
  // }, []);

    const shouldFetchVideos = useRef(true);
    const [isFetchingVideos, setisFetchingVideos] = useState(false);
    const [videos, setVideos] = useState([]);

    const fetchVideos = () => {
        if(shouldFetchVideos.current){
            shouldFetchVideos.current = false; // Needed this because React strict mode mounts components twice on init lifecycle

            setisFetchingVideos(true); // Notify state of json fetching status

            fetch('videos.json', {    // Called from public directory
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                // console.log(response);
                return response.json();
            })
            .then(myJson => {
                // console.log(myJson);

                setVideos(myJson.videos);
                setisFetchingVideos(false);
            }); 
        }
    }

    useEffect(() => {
        fetchVideos();
    }, []);

  return (
    <div className="app">

      <div className='app__videos'>
        
        {
          isFetchingVideos ? <span>Loading videos...</span> 
          :
          videos.map((eachVideos, index) => {
            return <Video 
              key={eachVideos.id}
              index={index}
              url={eachVideos.url} 
              channel={eachVideos.channel} 
              description={eachVideos.description} 
              song={eachVideos.song} 
              likes={eachVideos.likes} 
              messages={eachVideos.messages} 
              shares={eachVideos.shares}
            />
          })
        }


      </div>

    </div>
  );
}

export default App;
