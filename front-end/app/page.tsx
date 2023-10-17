import Image from 'next/image';
import {Inter} from 'next/font/google';
import {InterfacegenreMusic} from './utils/datainterface';
import MusicListSmall from './components/cards/musicListSmall';
import PlayAudio from './components/playback/audio';
const inter = Inter({subsets: ['latin']});

const DummyMusic: InterfacegenreMusic[] = [
	{
		genre: 'Metal',
		music: [
			{
				name: 'Peacefull PianoPeacefull PianoPeacefull PianoPeacefull PianoPeacefull PianoPeacefull PianoPeacefull PianoPeacefull PianoPeacefull PianoPeacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_asudio.mp3',
				type: 'video',
			},
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
		],
	},
	{
		genre: 'Electric',
		music: [
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
		],
	},
	{
		genre: 'Romantic',
		music: [
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
		],
	},
	{
		genre: 'Rap',
		music: [
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
			{
				name: 'Peacefull Piano',
				artist: '',
				album: '',
				thumbnail: '/poster.jpeg',
				duration: 120,
				date: '24/06/2023',
				clicks: 120,
				likes: 129,
				genre: '',
				link: '/sample_audio.mp3',
				type: 'video',
			},
		],
	},
];

const Home = () => {
	// TODO make API call here

	return (
		<>
			<div className="">
				<div className="mb-10">
					{DummyMusic.map((genre: InterfacegenreMusic, index: number) => {
						return (
							<>
								{genre.music.length > 0 ? (
									<MusicListSmall
										key={genre.music[0].name + index + genre.genre}
										title={genre.genre}
										musics={genre.music}
									/>
								) : (
									<></>
								)}
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Home;
