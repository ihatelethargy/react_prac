import React from 'react';
import './video_item.css';

const VideoItem = (props) => {
    const displayType = props.display === 'list' ? 'list' : 'grid';
    return(
        <li onClick={()=> props.onVideoClick(props.video)} display={displayType}>
            <div className={`boxWrapper ${displayType}`}>
                <div className="box-img">
                    <img src={props.video.snippet.thumbnails.medium.url} alt=""/>
                </div>
                <div className="box-contents">
                    <h1 className="contentsTitle">{props.video.snippet.title}</h1> 
                    <p className="contentsChannel">{props.video.snippet.channelTitle}</p>
                </div>
            </div>
        </li>     
    )  
}

export default VideoItem;