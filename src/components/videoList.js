
import React from 'react';


const VideoList = (props) =>
{
	return 
	(
		<ul classname="col-md-4 list-group">
		{props.vidoes.length}
		</ul>	
	);
};

export default VideoList;