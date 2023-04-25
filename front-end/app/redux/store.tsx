'use client';

import {configureStore} from '@reduxjs/toolkit';
import Player from './features/audioPlayer';

export const store = configureStore({
	reducer: {
		AudioPlayer: Player.player.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
