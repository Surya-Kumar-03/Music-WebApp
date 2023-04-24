'use client';
import {createSlice} from '@reduxjs/toolkit';

interface GlobalAudioPlayer {
	visible: boolean;
	link: string;
	playing: boolean;
	song_name: string;
	artist: string;
	duration: number;
	played: number;
}

const initialState: GlobalAudioPlayer = {
	visible: false,
	link: '',
	playing: false,
	song_name: '',
	artist: '',
	duration: 1,
	played: 0,
};

export const Player = createSlice({
	name: 'AudioPlayer',
	initialState,
	reducers: {
		show: (state) => {
			state.visible = true;
		},
		hide: (state) => {
			state.visible = false;
		},
		link: (state, action) => {
			state.link = action.payload;
		},
		song_name: (state, action) => {
			state.song_name = action.payload;
		},
		artist: (state, action) => {
			state.artist = action.payload;
		},
		duration: (state, action) => {
			state.duration = action.payload;
		},
		played: (state, action) => {
			state.played = action.payload;
		},
		play: (state) => {
			state.playing = true;
		},
		pause: (state) => {
			state.playing = false;
		},
	},
});

const AudioPlayer: any = {
	player: Player,

	show: Player.actions.show,
	hide: Player.actions.hide,
	link: Player.actions.link,
	song_name: Player.actions.song_name,
	artist: Player.actions.artist,
	duration: Player.actions.duration,
	played: Player.actions.played,
	play: Player.actions.play,
	pause: Player.actions.pause,
};

export const {show, hide, link, song_name, artist, duration, played, play, pause} =
	Player.actions;

export default AudioPlayer;
