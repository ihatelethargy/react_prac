import { useState,useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);


  useEffect(()=>{
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDmklK6OYBIL-AwZ4lBTkTj0iuZ7tGS2Yw", requestOptions)
      .then(response => response.json())
      .then(result => {setVideos(result.items); console.log(result)})
      .catch(error => console.log('error', error));
  }, [])
  return (
    <>
      <Navbar/>
      <VideoList videos={videos} />
    </>
  );
}

export default App;
