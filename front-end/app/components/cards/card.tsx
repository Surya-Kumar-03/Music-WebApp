'use client';
import {useState} from 'react';
import {InterfaceMusic} from '../../utils/datainterface';
import PlayPauseButton from '../playButton';
import Image from 'next/image';
import Skeleton from './skeleton';
import {useDispatch, useSelector} from 'react-redux';
import AudioPlayer from '@/app/redux/features/audioPlayer';
import MusicPlayingAnimation from '../musicPlayingAnimation';
import {RootState} from '@/app/redux/store';

const Card = (props: {review?: boolean; data: InterfaceMusic}) => {
	const reduxAudioPlayer: any = useSelector((state: RootState) => state.AudioPlayer);
	const dispatch = useDispatch();
	const [cardHover, setCardHover] = useState(false);
	const [loadingImage, setLoadingImage] = useState(true);
	const data = props.data;

	const PlayMusic = (event: any) => {
		if (reduxAudioPlayer.link !== data.link) {
			dispatch(AudioPlayer.link(data.link));
			dispatch(AudioPlayer.show());
			dispatch(AudioPlayer.play());
			dispatch(AudioPlayer.played(0));
			dispatch(AudioPlayer.duration(1));
			dispatch(AudioPlayer.song_name(data.name));
			dispatch(AudioPlayer.artist(data.artist));
			return true;
		}
		return false;
	};

	const toggleMusic = (event: any) => {
		if (reduxAudioPlayer.link !== data.link) {
			PlayMusic(event);
		} else {
			if (reduxAudioPlayer.playing) {
				dispatch(AudioPlayer.pause());
			} else {
				dispatch(AudioPlayer.play());
			}
		}
		event.stopPropagation();
	};

	return (
		<>
			<div
				className={
					(!props.review ? 'hover:bg-slate-200' : '') +
					' ' +
					'relative flex flex-col p-3 gap-3 shadow-lg w-60 cursor-pointer transition-colors  rounded-xl justify-center items-center'
				}
				onClick={PlayMusic}
				onMouseEnter={() => {
					if (props.review) return;
					setCardHover(true);
				}}
				onMouseLeave={() => {
					if (props.review) return;
					setCardHover(false);
				}}>
				<div className="h-56 w-56 rounded-xl">
					{data.thumbnail === '' || data.thumbnail === undefined || loadingImage ? (
						<Skeleton.Image />
					) : (
						<></>
					)}
					<div className={loadingImage === true ? 'opacity-0' : 'opacity 1'}>
						<Image
							src={data.thumbnail}
							height={224}
							width={224}
							alt={data.name}
							className="w-full h-full rounded-xl"
							onLoad={() => {
								setLoadingImage(false);
							}}
						/>
					</div>
				</div>
				<div
					className={
						(cardHover ? 'opacity-1 bottom-12' : 'opacity-0 bottom-6') +
						' absolute transition-all right-5'
					}
					onClick={toggleMusic}>
					<PlayPauseButton
						play={reduxAudioPlayer.link === data.link && reduxAudioPlayer.playing}
					/>
				</div>
				<div className="flex h-5 w-56 justify-between items-center relative">
					<div className="truncate w-[80%]">
						<span className="font-semibold">{data.name}</span>
					</div>
					{reduxAudioPlayer.link === data.link ? (
						<MusicPlayingAnimation playing={reduxAudioPlayer.playing} />
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	);
};

export default Card;
