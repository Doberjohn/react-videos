import React from 'react';

class VideoDetail extends React.Component {

    render() {
        const { video } = this.props;

        if (video === null) {
            return <div>Loading...</div>
        }

        return (
            <div>
                {video.snippet.title}
            </div>
        )
    }
}

export default VideoDetail;