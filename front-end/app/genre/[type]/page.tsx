"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { genreMusic } from "../../utils/datainterface";
import MusicListAll from "@/app/components/cards/musicListAll";
import { useState } from "react";
import { useEffect } from "react";

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

const Home = (props: { params: { type: string } }) => {
	const [Loader, setLoader] = useState(0);
	useEffect(() => {
		const genre = props.params.type;
		console.log(genre);
		// TODO make API call for genre here
	}, []);
	return (
		<>
			<div>
				{DummyMusic.map((genre: genreMusic) => {
					return (
						<MusicListAll
							key={genre.genre}
							title={props.params.type}
							musics={genre.music}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Home;
