import * as React from "react"
import {gql, useQuery} from '@apollo/client'
import {getEpisodes} from "../gqlRequests/fragments/getEpisodes";
import HomePage from "./HomePage";
import Loader from "../components/Loader/Loader";
import '../styles/global.css';
import Layout from "../components/Layout/Layout";

// data

// markup
const App: React.FC = () => {
    return(
        <Layout component={<HomePage />} />
    )

}

export default App;