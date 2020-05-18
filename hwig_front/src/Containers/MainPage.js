import React, { useState, useEffect } from 'react'
import Main from '../MainComponents/Main'
import axios from 'axios'
import { host } from './ServerAddress'


export default function MainPage() {
    const [evtData, setEvtData] = useState(null)
    const [mainData, setMainData] = useState(null)

    const getAxiosData1 = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setEvtData(res.data)
            })
    }
    const getAxiosData2 = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setMainData(res.data)
            })
    }

    useEffect(() => {
        if (!evtData || !mainData) {
            getAxiosData1(`api/event/event_main`)
            getAxiosData2(`api/product/main`)
        }
    })

    return (
        <>
            {mainData && <Main
                evtData={evtData}
                mainData={mainData}
            />}
        </>
    )
}
