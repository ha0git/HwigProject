import React, {useState, useEffect} from 'react'
import EventList from '../EventComponents/EventList'
import {withRouter} from 'react-router-dom'
import {host} from './ServerAddress'
import queryString from 'query-string'
import axios from 'axios'
import jangevent from "../images/eventlist/jangevent.png";


function EventListPage(props) {
    const query = queryString.parse(props.location.search)
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)
    const [evtList, setEvtList] = useState(null)
    const getAxiosData = (uri) => {
        axios.get(host + uri)
        .then(res => {
            console.log(res.data)
            setEvtList(res.data)
        })
    }


    useEffect(() => {

        if (!query.page) {
            props.history.push(`/eventlist?page=${page}`)
        }
        if (parseInt(query.page) !== page) {
            setPage(parseInt(query.page));
            console.log(page)
        }
        if (!evtList) {
        getAxiosData(`api/event/event_list`)
        // setEvtList([
        //     {   
        //         event_id:1,
        //         event_list_img: jangevent
        //     },
        //     {   
        //         event_id:2,
        //         event_list_img: jangevent
        //     },
        //     {   
        //         event_id:3,
        //         event_list_img: jangevent
        //     },
        //     {   
        //         event_id:4,
        //         event_list_img: jangevent
        //     },
        //     {   
        //         event_id:5,
        //         event_list_img: jangevent
        //     },
        //     {   
        //         event_id:6,
        //         event_list_img: jangevent
        //     },
        //     {   
        //         event_id:7,
        //         event_list_img: jangevent
        //     },
        //     {   
        //         event_id:8,
        //         event_list_img: jangevent
        //     },
        //     {   
        //         event_id:9,
        //         event_list_img: jangevent
        //     },
        //     {   
        //         event_id:10,
        //         event_list_img: jangevent
        //     },
        //     {   
        //         event_id:11,
        //         event_list_img: jangevent
        //     },
        // ])
        }
    })


    return (
        <>
            {evtList && <EventList evtList={evtList} page={page} size={size} history={props.history}/>}
        </>
    )
}


export default withRouter(EventListPage)