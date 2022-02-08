import React from 'react';
import EpisodesList from "../components/EpisodesList/EpisodesList";

function HomePage({episodes}) {
    
    return (
        <EpisodesList data={episodes}/>
    );
}

export default HomePage;