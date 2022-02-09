export interface ICharacter {
    id: string,
    gender: string,
    image: string,
    name: string,
    status: string,
    type: string,
    __typename: string,
    species?: string,
    episode?: IEpisodeData[],
    location?: ICharacterLocationOrOrigin 
}
export interface iCharacterBar {
    characters: ICharacter[],
    count: number,
    names: string[]
}


export interface IEpisodeCard {
    id: string,
    name: string,
    characters: ICharacter[],
    airDate: string
}
interface ICharacterLocationOrOrigin{
    created: string,
    dimension: string,
    id: string,
    name:string,
    type: string,
    __typename: string
}

interface IFullCharacter {
    created: string,
    gender: string,
    id: string,
    image: string,
    location: ICharacterLocationOrOrigin,
    name: string,
    origin: ICharacterLocationOrOrigin,
    species: string,
    status: string,
    type: string,
    __typename: string
}
export interface IEpisodeData{
    air_date: string,
    characters: IFullCharacter[],
    created: string,
    id: string,
    name: string,
    __typename: string
}
export interface IEpisodeFullData {
    episode: IEpisodeData
}


export interface IEpisodesResult {
    __typename: string;
    air_date: string;
    characters: ICharacter[];
    created: Date;
    episode: string;
    id: string;
    name: string;
}
export interface IEpisodes{
    __typename: string;
    results: IEpisodesResult[];
}


export interface IEpisodeCardSmall{
    name: string,
    id: string,
    characters: ICharacter[],
    air_date: string
}