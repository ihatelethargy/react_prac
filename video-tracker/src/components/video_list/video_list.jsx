import React from 'react';
import VideoItem from '../video_item/video_item'
import './video_list.css';

const VideoList = (props) => {

    const displayType = props.display === 'list' ? 'list' : 'grid';
    console.log(displayType);
    return(
            <ul className={`wrapper ${displayType}`}>
                {props.videos.map(video=>(
                    <VideoItem 
                    key={video.id}
                    video={video}
                    onVideoClick={props.onVideoClick}
                    display={props.display}
                    />
                ))} 
            </ul>
    );
}


export default VideoList;