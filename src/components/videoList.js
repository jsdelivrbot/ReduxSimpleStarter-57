
import React from 'react';


const VideoList = (props) =>
{

	const videoItems = props.vidoes.map((video) => {
		return <VideoListItem video={video} />
	});

	return 
	(
		<ul classname="col-md-4 list-group">
		{videoItems}
		</ul>	
	);
};

export default VideoList;