"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { GenereMusic } from "../../utils/datainterface";
import MusicListAll from "@/app/cards/musicListAll";
import { useState } from "react";
import { useEffect } from "react";

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

const Home = (props: { params: { type: string } }) => {
	const [Loader, setLoader] = useState(0);
	useEffect(() => {
		const genere = props.params.type;
		console.log(genere);
		// TODO make API call for genere here
	}, []);
	return (
		<>
			<div>
				{DummyMusic.map((genere: GenereMusic) => {
					return (
						<MusicListAll
							key={genere.genere}
							title={props.params.type}
							musics={genere.music}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Home;
