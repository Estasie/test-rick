export interface Character {
    id: string,
    gender: string,
    image: string,
    name: string,
    status: string,
    type: string,
    __typename: string,
    species?: string
}
export interface iCharacterBar {
    characters: Character[],
    count: number,
    names: string[]
}


export interface IEpisodeCard {
    id: string,
    name: string,
    characters: Character[],
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
interface IEpisodeData{
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
    characters: Character[];
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
    characters: Character[],
    air_date: string
}