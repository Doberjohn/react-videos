import './VideoItem.css';

import React from 'react';

class VideoItem extends React.Component {

    render() {        
        const {video, onVideoSelect} = this.props;

        return (
            <div id="video-item" className="item" onClick={() => onVideoSelect(video)}>
                <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                <div className="content">
                    <div className="header">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoItem;