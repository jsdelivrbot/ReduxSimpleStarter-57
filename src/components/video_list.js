
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = props =>
{

	const videoItems = props.videos.map(video => 
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video} />  
	);

	return 
	(
		<ul classname="col-md-4 list-group">
			{videoItems}
		</ul>	
	);
};

export default VideoList;