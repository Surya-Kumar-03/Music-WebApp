export interface Music{
    title: string,
    poster: string,
    link: string,
    type:string,
}

export interface GenereMusic{
    genere: string,
    music: Music[],
}