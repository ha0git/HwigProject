import React,{ useState, useEffect } from 'react'
import Main from '../MainComponents/Main'
import axios from 'axios'
import {host} from './ServerAddress'


export default function MainPage() {
    const [evtData, setEvtData] = useState(null)
    const getAxiosData = (uri) => {
        axios.get(host + uri)
        .then(res => {
            console.log(res.data)
            setEvtData(res.data)
        })
    }

    useEffect(() => {
        if(!evtData){
            getAxiosData(`api/event/event_main`)
        }
    })

    return (
        <>
            {evtData && <Main evtData={evtData}/>}
        </>
    )
}
