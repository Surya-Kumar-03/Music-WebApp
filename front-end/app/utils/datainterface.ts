export interface InterfaceMusic {
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

export interface InterfacegenreMusic {
	genre: string;
	music: InterfaceMusic[];
}

export interface InterfacePlayer {
	muted: boolean;
	seeking: boolean;
	loop: boolean;
	volume: number;
}
