const MusicPlayingAnimation = (props: {playing: boolean}) => {
	return (
		<div className="flex justify-center items-center">
			<div
				className={
					(props.playing ? 'music-playing-animation' : '') +
					' ' +
					'h-1 rounded-md flex items-end'
				}>
				<div className="bar w-1 bg-slate-600 ml-[1px] h-1"></div>
				<div className="bar w-1 bg-slate-600 ml-[1px] h-1"></div>
				<div className="bar w-1 bg-slate-600 ml-[1px] h-2"></div>
				<div className="bar w-1 bg-slate-600 ml-[1px] h-2"></div>
				<div className="bar w-1 bg-slate-600 ml-[1px] h-1"></div>
			</div>
		</div>
	);
};

export default MusicPlayingAnimation;
