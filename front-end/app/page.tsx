import Image from "next/image";
import { Inter } from "next/font/google";
import { genreMusic } from "./utils/datainterface";
import MusicListSmall from "./components/cards/musicListSmall";
import PlayAudio from "./components/playback/audio";
const inter = Inter({ subsets: ["latin"] });

const DummyMusic: genreMusic[] = [
	{
		genre: "Metal",
		music: [
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
		],
	},
	{
		genre: "Electric",
		music: [
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
		],
	},
	{
		genre: "Romantic",
		music: [
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
		],
	},
	{
		genre: "Rap",
		music: [
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
			{
				name: "Peacefull Piano",
				artist: "",
				album: "",
				thumbnail: "/poster.jpeg",
				duration: 120,
				date: "24/06/2023",
				clicks: 120,
				likes: 129,
				genre: "",
				link: "#",
				type: "video",
			},
		],
	},
];

const Home = () => {
	// TODO make API call here

	return (
		<>
			<div className=''>
				<div className='pb-20'>
					{DummyMusic.map((genre: genreMusic) => {
						return (
							<MusicListSmall
								key={genre.genre}
								title={genre.genre}
								musics={genre.music}
							/>
						);
					})}
				</div>
				<div className='sticky bottom-0 flex justify-center items-center'>
					<PlayAudio />
				</div>
			</div>
		</>
	);
};

export default Home;
