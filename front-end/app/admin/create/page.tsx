"use client";
import Card from "@/app/components/cards/card";
import {
	Box,
	Button,
	FormControl,
	Input,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { useState } from "react";
import { app } from "../../config/firebase.config";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";

// TODO Get the List of genre from backend or add all the list here itself
const ListOfgenre = ["Metal", "Romance", "Rock", "Rap"];

const CreateSong = () => {
	const [genre, setgenre] = useState("");
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [musicFile, setMusicFile] = useState<File>();
	const [videoFile, setVideoFile] = useState<File>();

	const handleMusicUpload = (event: any) => {
		setMusicFile(event.target.files[0]);
	};
	const handleVideoUpload = (event: any) => {
		setVideoFile(event.target.files[0]);
	};
	const handleImageChange = (e: any) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		// TODO make your API call here
	};

	const firebaseAuth = getAuth(app);
	useEffect(() => {
		firebaseAuth.onAuthStateChanged(async userCredentials => {
			if (
				userCredentials &&
				userCredentials.displayName === "Neffex Official"
			) {
			} else {
				window.location.href = "/";
			}
		});
	}, []);
	return (
		<>
			<div className='flex justify-center items-center flex-col gap-5'>
				<span className='font-bold underline text-2xl'>Add Song</span>
				<div className='flex w-full'>
					<div className='w-full'>
						<form
							className='w-full px-10 flex gap-10 flex-col'
							onSubmit={handleSubmit}
						>
							<div className='flex gap-4'>
								<div className='w-full'>
									<FormControl fullWidth>
										<TextField
											required
											id='outlined-basic'
											className='w-full'
											label='Song Name'
											variant='outlined'
											value={name}
											onChange={event => {
												setName(event.target.value);
											}}
										/>
									</FormControl>
								</div>
								<div className='w-full'>
									<FormControl fullWidth>
										<TextField
											id='outlined-basic'
											className='w-full'
											label='Album Name'
											variant='outlined'
										/>
									</FormControl>
								</div>
							</div>
							<div className='flex gap-4'>
								<div className='w-full'>
									<FormControl fullWidth>
										<TextField
											required
											id='outlined-basic'
											className='w-full'
											label='Artist Name'
											variant='outlined'
										/>
									</FormControl>
								</div>
								<div className='w-full'>
									<FormControl fullWidth>
										<InputLabel id='demo-simple-select-label'>genre</InputLabel>
										<Select
											required
											labelId='demo-simple-select-label'
											id='demo-simple-select'
											value={genre}
											label='genre'
											onChange={event => {
												setgenre(event.target?.value as string);
											}}
										>
											{ListOfgenre.map((gen, index) => {
												return (
													<MenuItem key={index} value={index}>
														{gen}
													</MenuItem>
												);
											})}
										</Select>
									</FormControl>
								</div>
							</div>
							<div>
								<Button
									variant='outlined'
									component='label'
									className={" w-full max-w-xl"}
								>
									Upload your Song Poster Here*
									<input
										hidden
										accept='image/*'
										multiple
										type='file'
										onChange={e => {
											handleImageChange(e);
										}}
									/>
								</Button>
							</div>
							<div>
								<Button
									variant='outlined'
									component='label'
									className={" w-full max-w-xl"}
									disabled={videoFile ? true : false}
								>
									{musicFile ? musicFile.name : "Upload Your Song Here*"}
									<input
										hidden
										accept='audio/*'
										multiple
										type='file'
										onChange={handleMusicUpload}
									/>
								</Button>
							</div>
							<div>
								<Button
									variant='outlined'
									component='label'
									className={" w-full max-w-xl"}
									disabled={musicFile ? true : false}
								>
									{videoFile ? videoFile.name : "Upload Your Video Here*"}
									<input
										hidden
										accept='video/*'
										multiple
										type='file'
										onChange={handleVideoUpload}
									/>
								</Button>
							</div>
							<Button type='submit' variant='contained' className='bg-blue-500'>
								Add Song
							</Button>
						</form>
					</div>
					<div className='pr-10'>
						<Card
							review={true}
							data={{
								name: name || "Song Name",
								artist: "",
								album: "",
								thumbnail: image,
								duration: 120,
								date: new Date(),
								clicks: 120,
								likes: 129,
								genre: "",
								link: "#",
								type: "video",
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateSong;
