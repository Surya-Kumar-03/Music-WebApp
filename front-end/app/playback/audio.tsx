"use client";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import Slider from "@mui/material/Slider";

const PlayAudio = () => {
	return (
		<>
			<div className='bg-green-500 px- h-20 w-full'>
				<Slider
					size='small'
					defaultValue={0}
					aria-label='Small'
					valueLabelDisplay='auto'
				/>
			</div>

			{/* <div className='bg-green-500'>
				<ReactPlayer
					url={"/sample_audio.mp3"}
					controls={true}
					height={"40px"}
				/>
			</div> */}
		</>
	);
};

export default PlayAudio;
