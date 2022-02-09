import * as React from "react"
import {gql, useQuery} from '@apollo/client'
import {GetEpisodes} from "../gqlRequests/getEpisodes";
import HomePage from "./HomePage";
import Loader from "../components/Loader/Loader";
import '../styles/global.css';

// data

// markup
const App = () => {
    const {loading, error, data} = useQuery(GetEpisodes);
    if(loading) return <Loader />
    else if(error) return `Something went wrong: ${error.message}`
    else return (
        <main className={"p-4 m-12 bg-main"}>
            <HomePage {...data} />
        </main>
    )
}

export default App;