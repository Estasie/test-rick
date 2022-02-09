import { Link } from "gatsby";
import React from "react";
import "./characterThumb.css";

function CharacterThumb({ src, id }: {src: string, id: string}) {
  return (
    <Link to={`/characters/${id}`} className="w-10 h-10 -mr-4 ">
    <img className={"character-thumb"} src={src} />
    </Link>
  )
  
}

export default CharacterThumb;
