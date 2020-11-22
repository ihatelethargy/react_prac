import { useState,useEffect } from 'react';
import './app.css';
import Navbar from './components/navbar/navbar';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube
    .search(query)
    .then(videos => setVideos(videos))
  }
    
  useEffect(()=>{
    youtube
    .mostPopular()
    .then(videos => setVideos(videos))
  }, [])
  
  return (
    <div className="app">
      <Navbar onSearch={search}/>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
