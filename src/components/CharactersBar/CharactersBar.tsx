import React from 'react';
import CharacterThumb from "../thumb/CharacterThumb";
import { iCharacterBar } from '../../types/Episodes';

function CharactersBar({characters, count, names}: iCharacterBar) {
    console.log('names', names)
    return (
        <div className={"flex items-center flex-wrap"}>
            <div className={"characters-group flex-row-reverse"}>{
                characters.map(el => {
                    return <CharacterThumb src={el.image} />
                })
            }</div>
           <p className={"text-xs"}>{names[0]}, {names[1]} and {count} more</p>
        </div>
    );
}

export default CharactersBar;