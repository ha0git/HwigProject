import React from 'react'
import BodyUp from './BodyUp'
import BodyDown from './BodyDown'

export default function Main(props) {
    return (
        <>
            <BodyUp evtData={props.evtData}/>
            <BodyDown/>
        </>
    )
}
