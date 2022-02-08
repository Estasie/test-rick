import React from 'react';
import EpisodeCard from "../EpisodeCard/EpisodeCard";
import {Link} from "gatsby";

function EpisodesList({data}) {

    return (
        <div className={"flex flex-wrap gap-6 items-center"}>
            {
                data.results.map(item => {
                    return (
                        <Link to={item.id}> <EpisodeCard id={item.id} name={item.name} airDate={item['air_date']} characters={item.characters} key={item.id} /></Link>
                    )

                })
            }
        </div>


    );
}

export default EpisodesList;