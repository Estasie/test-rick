import { Link } from "gatsby";
import React from "react";
interface CharacterCard {
  name: string,
  species?: string,
  image: string,
  id: string,
}
function CharacterCard({ name, species, image, id }: CharacterCard) {
  return (
      <Link to={`/characters/${id}`}>
    <div className={"flex flex-col hover:bg-highlight hover:scale-105 transition-all rounded-lg cursor-pointer shadow-md flex-wrap w-36"}>
      <img src={image} alt={name} className="w-full rounded-t-lg h-36" />
      <div className="p-2">
        <p className="font-bold text-paragraph">{name}</p>
        <p className="text-paragraph">{species}</p>
      </div>
    </div>
    </Link>
  );
}

export default CharacterCard;
