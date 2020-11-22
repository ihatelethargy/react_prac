import React from 'react';
import './video_detail.css';

const Video_detail = (props) => (
    
    <section className={`detail`}>
        <iframe 
                className={`video`}
                type="text/html" 
                width="100%" 
                height="800px"
                src={`https://www.youtube.com/embed/${props.video.id}`}
                frameborder="0" 
                allowfullscreen
                >                    
                </iframe>
                <div className="videoContents">
                    <h2 className="videoTitle">{props.video.snippet.title}</h2>
                    <h3 className="videoChannel">{props.video.snippet.channelTitle}</h3>
                    <pre className="videoDesc">{props.video.snippet.description}</pre>
                </div>
    </section>
)


export default Video_detail;