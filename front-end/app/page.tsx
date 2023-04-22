import Image from "next/image";
import { Inter } from "next/font/google";
import { GenereMusic } from "./utils/datainterface";
import MusicListSmall from "./cards/musicListSmall";
import PlayAudio from "./playback/audio";
const inter = Inter({ subsets: ["latin"] });

const DummyMusic: GenereMusic[] = [
	{
		genere: "Metal",
		music: [
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
		],
	},
	{
		genere: "Electric",
		music: [
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
		],
	},
	{
		genere: "Romantic",
		music: [
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
		],
	},
	{
		genere: "Rap",
		music: [
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
			},
			{
				title: "Peacefull Piano",
				poster: "/poster.jpeg",
				link: "/music/89",
				type: "audio",
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
					{DummyMusic.map((genere: GenereMusic) => {
						return (
							<MusicListSmall
								key={genere.genere}
								title={genere.genere}
								musics={genere.music}
							/>
						);
					})}
				</div>
				{/* <div className='sticky bottom-0'>
					<PlayAudio />
				</div> */}
			</div>
		</>
	);
};

export default Home;