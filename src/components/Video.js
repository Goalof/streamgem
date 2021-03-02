import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import { Box, Icon } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { FaPlay } from "react-icons/fa";
const overrides = {
	'Wrapper': {
		kind: 'Box'
	},
	'Button': {
		kind: 'Icon'
	}
};

const Player = ({ ...props
}) => {
	const [isPlay, setPlay] = useState(false);
	const playerRef = useRef(null);
	const {
		override,
		rest
	} = useOverrides(props, overrides, {});

	const handlerClick = () => {
		setPlay(true);
		playerRef.current.internalPlayer.playVideo();
	};

	return <Box position="relative" {...rest}>
		      
		<YouTube videoId="tPoRAL7Lm1M" opts={{
			width: '100%',
			height: '590px',
			playerVars: {
				autoplay: 0
			}
		}} ref={playerRef} />
		      
		<Icon
			top="calc(50% - 50px)"
			left="calc(50% - 50px)"
			width="100px"
			height="100px"
			background-color="#8C30F5"
			border-radius="100%"
			position="absolute"
			display={isPlay ? 'none' : 'flex'}
			size="22px"
			category="fa"
			icon={FaPlay}
			color="#FFFFFF"
			align-items="center"
			justify-content="center"
			{...override('Button')}
			onClick={handlerClick}
		/>
		    
	</Box>;
};

export default Object.assign(Player, {
	title: 'CustomCursor',
	overrides
});