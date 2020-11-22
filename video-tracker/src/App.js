import { useState,useEffect } from 'react';
import './app.css';
import Navbar from './components/navbar/navbar';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail'

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    console.log('selected')
    setSelectedVideo(video);
  }

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
  console.log(videos)
  return (
    <div className="app">
      <Navbar onSearch={search}/>

      <div className="contents">

      {selectedVideo &&<div className="contentsDetail">         
          <VideoDetail video={selectedVideo}/>
        </div>}

        <div className="contentsList">
          <VideoList videos={videos} 
                    onVideoClick={selectVideo}
                    display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
