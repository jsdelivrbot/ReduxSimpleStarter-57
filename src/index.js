
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList'

const API_KEY = "AIzaSyAaKgvqL_uNRlt-9h5y5pV59OlC0lAAcLQ"

// Create a new component
// Component should create HTML
// Take the components HTML and put it on the page (in the DOM)

class App extends Component 
{
	constructor(props)
	{
		super(props);
		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>
		{
			this.setState({ videos });
		});

	}

	render() 
	{
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
} 


ReactDOM.render(<App />, document.querySelector('.container')); 