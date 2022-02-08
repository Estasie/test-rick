interface Character {
    id: string,
    gender: string,
    image: string,
    name: string,
    status: string,
    type: string,
    __typename: string
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