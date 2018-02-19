
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import {SearchBar} from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

console.log(VideoList);

//import Component from 'react';

const API_KEY = "AIzaSyAaKgvqL_uNRlt-9h5y5pV59OlC0lAAcLQ"

class App extends React.Component 
{
	constructor()
	{
		super();
		this.state = { 
			videos: [], 
			selectedVideo: null ,
			term: ''
		};
		this.videoSearch('surfboards');
	}

	videoSearch(term)
	{
		YTSearch({key: API_KEY, term: term}, (videos) =>
		{
			this.setState({ 
				videos: videos,
				selectedVideo: videos[]
			 });
		});
	}

	onInputChange = (term) => 
	{
		this.setState({term});
	}

	render() 
	{
		return (
			<div>
				<SearchBar onSearchTermChange={this.onInputChange} value={this.state.term} />
				{this.state.selectedVideo && <VideoDetail video={this.state.selectedVideo}/> }
				
				{this.state.videos.length > 0 && <VideoList
					onVideoSelect={video => this.state({selectedVideo})}
				 videos={this.state.videos} />}
			</div>
		)
	}
} 

const Something = props => <div>something to inject</div>


ReactDOM.render(<App />, document.querySelector('#app')); 