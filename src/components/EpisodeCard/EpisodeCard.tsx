import React from 'react';
import {IEpisodeCard} from "../../types/Episodes";
import {Link} from "gatsby";
import './card.css';

import CharacterThumb from "../thumb/CharacterThumb";
import CharactersBar from "../CharactersBar/CharactersBar";

function EpisodeCard({id, airDate, characters, name} : IEpisodeCard) {
    // to show characters besides rick and morty
    const first5characters = characters.slice(2,7);
    const charactersCount = characters.length - 5;
    const firstTwoNames = [characters[2].name, characters[3].name];

    return (
        <Link to={`/episodes/${id}`}>
            <div className={"card"}>
                <p className={"text-paragraph font-bold text-base"}>{`Ep. ${id}`}</p>
                <div className={"flex flex-col"}>
                    <p className={"text-headline font-bold text-lg"}>{name}</p>
                    <p className={"text-paragraph text-sm"}>{airDate}</p>
                </div>
                <CharactersBar characters={first5characters} count={charactersCount} names={firstTwoNames}/>
            </div>
        </Link>

    );
}

export default EpisodeCard;