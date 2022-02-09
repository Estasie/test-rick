import { Link } from "gatsby";
import React, {FC} from "react";
import "./characterThumb.css";
interface ICharacterThumb{
  src: string, 
  id: string
}
const CharacterThumb: FC<ICharacterThumb> = (props) => {
  
  const {src, id} = props;
  
  return (
    <Link to={`/characters/${id}`} className="w-10 h-10 -mr-4 ">
    <img className={"character-thumb"} src={src} />
    </Link>
  )
  
}

export default CharacterThumb;
