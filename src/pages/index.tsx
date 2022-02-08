import * as React from "react"
import {gql, useQuery} from '@apollo/client'
import {getEpisodes} from "../gqlRequests/getEpisodes";
import HomePage from "./HomePage";
import Loader from "../components/Loader/Loader";
import '../styles/global.css';

// data

// markup
const App = () => {
    const {loading, error, data} = useQuery(getEpisodes);
    if(loading) return <Loader />
    else return (
        <main className={"p-4 m-12 bg-main"}>
            <HomePage {...data} />
        </main>
    )
}

export default App;