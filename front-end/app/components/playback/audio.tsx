'use client';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import Slider from '@mui/material/Slider';
import Image from 'next/image';
import PlayButton from '../playButton';

const PlayAudio = () => {
	return (
		<>
			<div className="shadow-xl bg-slate-200 w-full sm:w-[80%] h-20 relative">
				<Slider
					className="-top-4 hover:h-1 absolute"
					sx={{
						'& .MuiSlider-thumb': {
							'width': 8,
							'height': 8,
							'transition': '0.3s cubic-bezier(.47,1.64,.41,.8)',
							'&.Mui-active': {
								width: 20,
								height: 20,
							},
						},
						'& .MuiSlider-rail': {
							opacity: 0.28,
							color: 'black',
						},
					}}
					size="small"
					defaultValue={0}
					aria-label="Small"
					valueLabelDisplay="auto"
				/>
				<div className="bg-slate-200 h-full w-full flex justify-between items-center p-2">
					<div className="flex gap-3">
						<Image src="/poster.jpeg" height={40} width={40} alt="player poster" />
						<div className="flex flex-col">
							<span className="font-sm">Song Title</span>
							<span className="font-xs text-slate-600">Artist Name</span>
						</div>
					</div>
					<div className="flex gap-3">
						<div className="flex justify-center items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
								/>
							</svg>
						</div>
						<div className="flex justify-center items-center">
							<PlayButton />
						</div>
						<div className="flex justify-center items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
								/>
							</svg>
						</div>
					</div>

					{/* Volume */}
					<div className="relative cursor-pointer hover:bg-blue-300 text-blue-500 p-2 rounded-full">
						{/* <div className='absolute bg-green-500 h-32 -top-[100%]'>
							<Slider
								className=''
								aria-label='Temperature'
								orientation='vertical'
								defaultValue={30}
								valueLabelDisplay='auto'
							/>
						</div> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
							/>
						</svg>
					</div>
				</div>
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
