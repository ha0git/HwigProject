import React, { useState, useEffect } from 'react'
import Event from '../EventComponents/Event'
import {withRouter} from 'react-router-dom'
import {host} from './ServerAddress'
import queryString from 'query-string'
import axios from 'axios'
import main from "../images/eventpage/img_main.png";

function EventPage(props) {
    const [evtInfo, setEvtInfo] = useState(null)
    const query = queryString.parse(props.location.search)
    const [page, setPage] = useState(1)
    const [num, setNum] = useState(1)
    
    const getAxiosData = (uri) => {
        axios.get(host + uri)
        .then(res => {
            console.log(res.data)
            setEvtInfo(res.data)
        })
    }


    useEffect(() => {
        if (!query.event_id) {
            props.history.push(`/eventlist?page=${page}`)
        }
        if (parseInt(query.event_id) !== num) {
            setNum(parseInt(query.event_id))
            getAxiosData(`api/event/event_content?event_id=${query.event_id}`)
        }
        if (!evtInfo) {
        getAxiosData(`api/event/event_content?event_id=${query.event_id}`)
        // setEvtInfo({event_content_img: main})
        }
    })


    return (
        <>
            {evtInfo && <Event  evtInfo={evtInfo}/>}
        </>
    )
}


export default withRouter(EventPage)