import SearchBar from '../SearchBar/SearchBar';
import youtube from '../../api/youtube'
import VideoList from '../VideoList/VideoList'
import VideoDetail from '../VideoDetail/VideoDetail'

import React from 'react';

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
        )
    }
}

export default App