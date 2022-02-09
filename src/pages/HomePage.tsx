import React, {FC} from "react";
import EpisodesList from "../components/EpisodesList/EpisodesList";
import { IEpisodes } from "../types/Episodes";
import {getEpisodes} from '../gqlRequests/fragments/getEpisodes';
import { useQuery } from "@apollo/client";
import Loader from "../components/Loader/Loader";

const HomePage: FC = () => {
 const {loading, error, data} = useQuery(getEpisodes);
 if(loading) return <Loader />
 if (error) return <p>Something went wrong. ERROR: {error.message}</p>
 if(!data) return null;
  return (
    <>
      <title>Rick and Morty</title>
      <EpisodesList {...data} />
    </>
  );
}

export default HomePage;
