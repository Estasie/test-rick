import React from "react"
import Episode from "../../views/Episode";

export default function Component(props) {
    console.log('props', props)
    return  <Episode id={props.id}/>
    // return <Episode {...data}/>
}

