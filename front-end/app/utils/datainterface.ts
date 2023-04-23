export interface Music {
	name: string;
	artist: string;
	album: string;
	thumbnail: string;
	duration: number;
	date: string;
	clicks: number;
	likes: number;
	genre: string;
	link: string;
	type: 'video' | 'audio';
}

export interface genreMusic {
	genre: string;
	music: Music[];
}
