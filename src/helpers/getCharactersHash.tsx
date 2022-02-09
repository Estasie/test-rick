import { IEpisodeFullData } from "../types/Episodes";


export function getCharactersHash(data: IEpisodeFullData) {
  const charactersByLocationsHash = {};
  const characters = data.episode.characters;

  characters.forEach((character) => {
    const location = character.location.name;
    const characterName = character.name;
    const characterImage = character.image;
    const characterSpecies = character.species;
    const characterId = character.id;
    const dataHash = {
      name: characterName,
      image: characterImage,
      species: characterSpecies,
      id: characterId,
    };
    if (charactersByLocationsHash[location]) {
      charactersByLocationsHash[location].push(dataHash);
    } else {
      charactersByLocationsHash[location] = [dataHash];
    }
  });
  return charactersByLocationsHash;
}
