'use client';
import Card from '@/app/components/cards/card';
import api from '@/app/api';
import {
	Box,
	Button,
	FormControl,
	Input,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import {useState} from 'react';
import {app, storage} from '../../config/firebase.config';
import {getAuth} from 'firebase/auth';
import {useEffect} from 'react';
import {
	getStorage,
	ref,
	getDownloadURL,
	uploadBytesResumable,
	deleteObject,
	getMetadata,
} from 'firebase/storage';
import axios from 'axios';
// TODO Get the List of genre from backend or add all the list here itself
const ListOfgenre = ['Metal', 'Romance', 'Rock', 'Rap'];

const CreateSong = () => {
	const [genre, setgenre] = useState('');
	const [songName, setSongName] = useState('');
	const [albumName, setAlbumName] = useState('');
	const [artistName, setArtistName] = useState('');
	const [image, setImage] = useState('');

	const getMediaDuration = (mediaUrl: string, mediaType: string) => {
		return new Promise((resolve, reject) => {
			const media =
				mediaType === 'audio' ? new Audio() : document.createElement('video');
			media.src = mediaUrl;
			media.onloadedmetadata = () => {
				resolve(media.duration);
			};
			media.onerror = (error) => {
				reject(error);
			};
		});
	};

	const [AudioDisplay, setAudioDisplay] = useState('Upload Your Song Here*');
	const [AudioUrl, setAudioUrl] = useState('');

	const uploadAudio = (e: any) => {
		setImageUploading(true);
		setAudioDisplay('Uploading, Please wait!');
		const uploadFile = e.target.files[0];
		const storageRef = ref(storage, `/audios/${Date.now()}-${uploadFile.name}`);
		const uploadTask = uploadBytesResumable(storageRef, uploadFile);
		uploadTask.on(
			'state_changed',
			() => {
				// This function is optional and can be used to track progress of the upload
			},
			(error) => {
				console.error(error);
				setImageUploading(false);
				setAudioDisplay('Try Again, Please!');
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref)
					.then((url) => {
						setAudioUrl(url);
						setImageUploading(false);
						setAudioDisplay('Song Upload Successful!');
						const audioDur = getMediaDuration(AudioUrl, 'audio');
					})
					.catch((error) => {
						console.error(error);
						setImageUploading(false);
					});
			}
		);
	};

	const [VideoDisplay, setVideoDisplay] = useState('Upload Your Video Here*');
	const [VideoUrl, setVideoUrl] = useState('');

	const uploadVideo = (e: any) => {
		setImageUploading(true);
		setVideoDisplay('Uploading, Please wait!');
		const uploadFile = e.target.files[0];
		const storageRef = ref(storage, `/videos/${Date.now()}-${uploadFile.name}`);
		console.log(uploadFile);
		const uploadTask = uploadBytesResumable(storageRef, uploadFile);
		uploadTask.on(
			'state_changed',
			() => {
				// This function is optional and can be used to track progress of the upload
			},
			(error) => {
				console.error(error);
				setImageUploading(false);
				setVideoDisplay('Try Again, Please!');
			},
			async () => {
				getDownloadURL(uploadTask.snapshot.ref)
					.then((url) => {
						setVideoUrl(url);
						setImageUploading(false);
						setVideoDisplay('Video Upload Successful!');
					})
					.catch((error) => {
						console.error(error);
						setImageUploading(false);
					});
			}
		);
	};

	const [imageDisplay, setImageDisplay] = useState('Upload your Song Poster Here*');
	const [imageUploading, setImageUploading] = useState(false);
	const [imageUrl, setImageUrl] = useState(
		'https://yt3.googleusercontent.com/vCqmJ7cdUYpvR0bqLpWIe8ktaor4QafQLlfQyTuZy-M9W_YafT8Wo9kdsKL2St1BrkMRpVSJgA=s900-c-k-c0x00ffffff-no-rj'
	);

	const uploadImage = (e: any) => {
		setImageUploading(true);
		setImageDisplay('Uploading, Please wait!');
		const uploadPoster = e.target.files[0];
		const storageRef = ref(storage, `/images/${Date.now()}-${uploadPoster.name}`);
		const uploadTask = uploadBytesResumable(storageRef, uploadPoster);
		uploadTask.on(
			'state_changed',
			() => {
				// This function is optional and can be used to track progress of the upload
			},
			(error) => {
				console.error(error);
				setImageUploading(false);
				setImageDisplay('Try Again, Please!');
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref)
					.then((url) => {
						setImageUrl(url);
						setImageUploading(false);
						setImageDisplay('Song Poster Upload Successful!');
					})
					.catch((error) => {
						console.error(error);
						setImageUploading(false);
					});
			}
		);
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		// TODO make your API call here
		// 	const formData = {
		// 		name: songName,
		// 		artist: artistName,
		// 		album: albumName,
		// 		thumbnail: imageUrl,
		// 		duration: 0,
		// 		date: Date.now(),
		// 		clicks: 0,
		// 		likes: 0,
		// 		genre: genre
		// 	};
		// 	try {
		// 		const response = await api.post('/upload/song', {songName, artistName, albumName, imageUrl,duration:0,date: Date.now(), clicks:0, likes:0, genre}, {
		// 			headers: {
		// 				'Content-Type': 'multipart/form-data',
		// 			},
		// 		});
		// 		console.log(response.data);
		// 	} catch (err) {
		// 		console.error(err);
		// 	}

		const songData = {
			name: songName,
			artist: artistName,
			mediaUrl: AudioUrl !== '' ? AudioUrl : VideoUrl,
			album: albumName,
			thumbnail: imageUrl,
			duration: 0,
			date: new Date(),
			clicks: 0,
			likes: 0,
			genre: ListOfgenre[parseInt(genre)],
		};
		console.log(songData);

		api
			.post('/upload/song', songData)
			.then((response) => console.log(response.data))
			.catch((error) => console.error(error));
	};

	const firebaseAuth = getAuth(app);
	useEffect(() => {
		firebaseAuth.onAuthStateChanged(async (userCredentials) => {
			if (
				(userCredentials && userCredentials.displayName === 'Neffex Official') ||
				(userCredentials && userCredentials.displayName === 'Aryan amish')
			) {
			} else {
				window.location.href = '/';
			}
		});
	}, []);
	return (
		<>
			<div className="flex justify-center items-center flex-col gap-5 mb-10">
				<span className="font-bold underline text-2xl">Add Song</span>
				<div className="flex w-full">
					<div className="w-full">
						<form
							className="w-full px-10 flex gap-10 flex-col"
							onSubmit={handleSubmit}>
							<div className="flex gap-4">
								<div className="w-full">
									<FormControl fullWidth>
										<TextField
											required
											id="outlined-basic"
											className="w-full"
											label="Song Name"
											variant="outlined"
											value={songName}
											onChange={(event) => {
												setSongName(event.target.value);
											}}
										/>
									</FormControl>
								</div>
								<div className="w-full">
									<FormControl fullWidth>
										<TextField
											id="outlined-basic"
											className="w-full"
											label="Album Name"
											variant="outlined"
											value={albumName}
											onChange={(e) => {
												setAlbumName(e.target.value);
											}}
										/>
									</FormControl>
								</div>
							</div>
							<div className="flex gap-4">
								<div className="w-full">
									<FormControl fullWidth>
										<TextField
											required
											id="outlined-basic"
											className="w-full"
											label="Artist Name"
											variant="outlined"
											value={artistName}
											onChange={(e) => {
												setArtistName(e.target.value);
											}}
										/>
									</FormControl>
								</div>
								<div className="w-full">
									<FormControl fullWidth>
										<InputLabel id="demo-simple-select-label">Genre</InputLabel>
										<Select
											required
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={genre}
											label="genre"
											onChange={(event) => {
												setgenre(event.target?.value as string);
											}}>
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
									variant="outlined"
									component="label"
									className={' w-full max-w-xl'}>
									{imageDisplay}
									<input
										hidden
										accept="image/*"
										multiple
										type="file"
										name="upload-file"
										onChange={uploadImage}
									/>
								</Button>
							</div>
							<div>
								<Button
									variant="outlined"
									component="label"
									className={' w-full max-w-xl'}
									disabled={VideoUrl !== ''}>
									{AudioDisplay}
									<input
										hidden
										accept="audio/*"
										multiple
										type="file"
										onChange={uploadAudio}
									/>
								</Button>
							</div>
							<div>
								<Button
									variant="outlined"
									component="label"
									className={' w-full max-w-xl'}
									disabled={AudioUrl !== ''}>
									{VideoDisplay}
									<input
										hidden
										accept="video/*"
										multiple
										id="video"
										type="file"
										onChange={uploadVideo}
									/>
								</Button>
							</div>
							<Button
								type="submit"
								variant="contained"
								className="bg-blue-500"
								disabled={imageUploading || (VideoUrl === '' && AudioUrl === '')}>
								Add Song
							</Button>
						</form>
					</div>
					<div className="pr-10">
						<Card
							review={true}
							data={{
								name: songName || 'Song Name',
								artist: '',
								album: '',
								thumbnail: image,
								duration: 120,
								date: '24/06/2023',
								clicks: 120,
								likes: 129,
								genre: '',
								link: '#',
								type: 'video',
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateSong;
