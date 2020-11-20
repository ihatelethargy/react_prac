import { useState,useEffect } from 'react';
import './app.css';
import Navbar from './components/navbar/navbar';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  const search = query => {
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDmklK6OYBIL-AwZ4lBTkTj0iuZ7tGS2Yw`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item=>({...item, id: item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }
  useEffect(()=>{
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDmklK6OYBIL-AwZ4lBTkTj0iuZ7tGS2Yw", requestOptions)
      .then(response => response.json())
      .then(result => {setVideos(result.items);})
      .catch(error => console.log('error', error));
  }, [])
  return (
    <div className="app">
      <Navbar onSearch={search}/>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
