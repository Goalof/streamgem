import React, { useState } from 'react';
import { Box } from '@quarkly/widgets';
import YouTubePlayer from './YouTubePlayer';

const Video = ({
	videoId,
	...props
}) => {
	const [player, setPlayer] = useState(<Box />);
	setTimeout(() => {
		setPlayer(<YouTubePlayer videoId={videoId} />);
	}, 2000);
	return <Box {...props}>
		{player}
	</Box>;
};

export default Object.assign(Video, {
	title: 'YouTubePlayer',
	propInfo: {
		videoId: {
			control: 'input',
			weight: 1
		}
	},
	defaultProps: {
		videoId: 'Rzgdz1mbLbE'
	}
});