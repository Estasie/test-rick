import React from "react";
import EpisodesList from "../components/EpisodesList/EpisodesList";
import { IEpisodes } from "../types/Episodes";

function HomePage({ episodes }: { episodes: IEpisodes }) {
  return (
    <>
      <title>Rick and Morty</title>
      <EpisodesList data={episodes} />
    </>
  );
}

export default HomePage;
