'use client';
import ReactPlayer from 'react-player';
import Slider from '@mui/material/Slider';
import Image from 'next/image';
import PlayPauseButton from '../playButton';
import React, {useRef, useState} from 'react';
import {InterfacePlayer} from '@/app/utils/datainterface';
import {useSelector, useDispatch} from 'react-redux';
import AudioPlayer from '@/app/redux/features/audioPlayer';
import type {RootState} from '../../redux/store';

const increaseVolumeBy = 5;

const PlayAudio = () => {
	const dispatch = useDispatch();
	const reduxAudioPlayer: any = useSelector((state: RootState) => state.AudioPlayer);
	const playButton = useRef<HTMLDivElement | null>(null);
	const [rendered, setRendered] = useState(false);
	const volumeSlider = useRef<HTMLInputElement>(null);
	React.useEffect(() => {
		const handleKeyDown = (event: any) => {
			if (event.key === ' ') {
				event.preventDefault();
				playButton.current?.click();
			} else if (event.key === 'ArrowUp') {
				event.preventDefault();
				volumeSlider.current?.setAttribute('increase', '');
				volumeSlider.current?.click();
			} else if (event.key === 'ArrowDown') {
				event.preventDefault();
				volumeSlider.current?.removeAttribute('increase');
				volumeSlider.current?.click();
			}
		};
		if (reduxAudioPlayer.visible) {
			window.addEventListener('keydown', handleKeyDown);
		}
		setRendered(true);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [reduxAudioPlayer.visible]);

	const [playerState, setPlayerState] = useState<InterfacePlayer>({
		muted: false,
		seeking: false,
		loop: false,
		volume: 0.5,
	});

	const Player = useRef<ReactPlayer | null>(null);

	const handleProgress = (changeState: {
		loaded: number;
		playedSeconds: number;
		loadedSeconds: number;
		played: number;
	}) => {
		if (reduxAudioPlayer.playing && !playerState.seeking) {
			dispatch(AudioPlayer.played(changeState.playedSeconds));
		}
		if (changeState.playedSeconds === reduxAudioPlayer.duration) {
			if (!playerState.loop) {
				// if loop is off pause the video and set progress bar to start
				dispatch(AudioPlayer.pause());
				dispatch(AudioPlayer.played(0));
			}
		}
	};
	const handleDuration = (duration: number) => {
		dispatch(AudioPlayer.duration(duration));
	};

	const getProgressValue = (currVal: number, totalVal: number) => {
		return Math.min(100, Math.ceil((currVal / totalVal) * 100));
	};

	const handlePlayPause = () => {
		if (reduxAudioPlayer.playing) {
			dispatch(AudioPlayer.pause());
		} else {
			dispatch(AudioPlayer.play());
		}
	};

	const handleSeek = (event: any, new_value: any) => {
		const seekTo = (new_value / 100) * reduxAudioPlayer.duration;
		dispatch(AudioPlayer.played(seekTo));
	};
	const handleSeekMouseDown = (event: any) => {
		setPlayerState({...playerState, seeking: true});
	};

	const handleSeekMouseUp = (event: any) => {
		setPlayerState({...playerState, seeking: false});
		Player.current?.seekTo(reduxAudioPlayer.played);
	};

	const handleLoop = () => {
		setPlayerState({...playerState, loop: !playerState.loop});
	};
	const [showSlider, setShowSlider] = useState(false); // state to track if slider should be shown

	const handleVolumeChange = (event: any, newValue: any) => {
		setPlayerState({...playerState, volume: newValue / 100}); // update volume value
	};
	const handleMuteUnmute = (event: any) => {
		if (playerState.volume === 0) {
			return;
		}
		setPlayerState({...playerState, muted: !playerState.muted});
	};
	const secondToMinute = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const extraSeconds = Math.ceil(seconds % 60);
		const minutes_str = minutes < 10 ? '0' + minutes : minutes;
		const extraSeconds_str = extraSeconds < 10 ? '0' + extraSeconds : extraSeconds;
		return minutes_str + ':' + extraSeconds_str;
	};

	return (
		<>
			{reduxAudioPlayer.visible ? (
				<>
					<div className="shadow-xl bg-slate-100 w-full h-20 relative">
						<div className="absolute h-0 -top-4 w-full">
							<Slider
								className="hover:h-1 top-0 py-4"
								sx={{
									'& .MuiSlider-thumb': {
										'width': 8,
										'height': 8,
										'transition': '0.3s',
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
								value={getProgressValue(
									reduxAudioPlayer.played,
									reduxAudioPlayer.duration
								)}
								onChange={handleSeek}
								defaultValue={0}
								aria-label="Small"
								valueLabelDisplay="auto"
								onMouseDown={handleSeekMouseDown}
								onMouseUp={handleSeekMouseUp}
							/>
						</div>
						<div>
							<div className="flex justify-end w-full h-3 px-2">
								<div className="flex gap-1 text-sm">
									<span>{secondToMinute(reduxAudioPlayer.played)}</span>
									<span>/</span>
									<span>{secondToMinute(reduxAudioPlayer.duration)}</span>
								</div>
							</div>
							<div className="w-full flex justify-between items-start p-2">
								<div className="flex gap-3 sm:w-1/3 justify-start h-full items-center">
									<div className="w-10">
										<Image
											src="/poster.jpeg"
											height={40}
											width={40}
											alt="player poster"
										/>
									</div>
									<div className="flex flex-col w-36">
										<span className="font-sm w-[80%] truncate">
											{reduxAudioPlayer.song_name}
										</span>
										<span className="font-xs w-[90%] truncate text-slate-600">
											{reduxAudioPlayer.artist}
										</span>
									</div>
								</div>
								<div className="flex gap-3 w-20 sm:w-1/3 justify-center h-full items-center">
									<div className="hidden sm:flex justify-center items-center cursor-pointer p-2 rounded-full transition-all hover:bg-slate-300">
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
									<div
										ref={playButton}
										className="flex justify-center items-center"
										onClick={handlePlayPause}>
										<PlayPauseButton play={reduxAudioPlayer.playing} />
									</div>
									<div className="hidden sm:flex justify-center items-center  cursor-pointer p-2 rounded-full transition-all hover:bg-slate-300">
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
								<div className="w-1/3 hidden sm:flex justify-end h-full items-center gap-3">
									{/* Volume */}
									<div
										className={'flex items-center cursor-pointer'}
										onMouseEnter={() => setShowSlider(true)}
										onMouseLeave={() => setShowSlider(false)}>
										{/* Volume icon */}
										<div onClick={handleMuteUnmute}>
											{playerState.volume === 0 || playerState.muted ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="currentColor"
													className={
														(showSlider ? 'bg-slate-300' : '') +
														' ' +
														'p-2 rounded-full w-10 h-10'
													}>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
													/>
												</svg>
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="currentColor"
													className={
														(showSlider ? 'bg-slate-300' : '') +
														' ' +
														'p-2 rounded-full w-10 h-10'
													}>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
													/>
												</svg>
											)}
										</div>

										{/* Volume slider */}
										<input
											className="hidden"
											type="number"
											ref={volumeSlider}
											value={parseInt((playerState.volume * 100).toFixed())}
											onClick={(e: any) => {
												if (!showSlider) {
													setShowSlider(true);
													setTimeout(() => {
														setShowSlider(false);
													}, 1000);
												}

												let newVal = Math.max(
													parseInt(e.target.value) - increaseVolumeBy,
													0
												);
												if (e.target.hasAttribute('increase')) {
													newVal = Math.min(
														parseInt(e.target.value) + increaseVolumeBy,
														100
													);
												}
												handleVolumeChange(e, newVal);
											}}
										/>
										<Slider
											value={parseInt((playerState.volume * 100).toFixed())}
											onChange={handleVolumeChange}
											style={{
												visibility: showSlider ? 'visible' : 'hidden',
												width: showSlider ? '100px' : '0px',
												marginLeft: '8px',
												opacity: showSlider ? 1 : 0, // set opacity based on showSlider state
												transition: 'width 0.2s ease', // add sliding animation with transition
											}}
											aria-labelledby="horizontal-slider"
										/>
									</div>
									<div
										className={
											(playerState.loop ? 'text-blue-500' : '') +
											' ' +
											'cursor-pointer'
										}
										onClick={handleLoop}>
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
												d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>

					{rendered && (
						<div className="hidden">
							<ReactPlayer
								ref={Player}
								url={reduxAudioPlayer.link}
								controls={false}
								height={'40px'}
								loop={playerState.loop}
								playing={reduxAudioPlayer.playing}
								onProgress={handleProgress}
								onDuration={handleDuration}
								volume={playerState.volume}
								muted={playerState.muted}
							/>
						</div>
					)}
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default PlayAudio;
