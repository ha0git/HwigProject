import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './EventList.css';
import Pagination from "react-js-pagination";

export default function EventList(props) {

    const [activePage, setactivePage] = useState(15);
    const getEvtList = props.evtList;
    
    const getList = getEvtList.map((list,index)=>  {
    if (list.event_list_img == "empty") {
        return 
    } else {
        return (
        <li key={index} className="event_goods_li">
            <Link to={`/eventlist/event?event_id=${list.event_id}`}>
                <div className="event_thumb_img" >
                    <img src={"http://13.209.202.242:8080/" + list.event_list_img} alt="" />
                </div>
            </Link>
        </li>
        )
    }
    }   
    )
    console.log(getList)

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setactivePage(pageNumber)
        props.history.push(`/eventlist?page=${pageNumber}`)
    }

    const showEvtList = () =>{
        let list =[];
        let begin = (props.page-1)*props.size;
        let end;
        if(getEvtList.length < props.page*10){
            end = getEvtList.length;
        }else{
            end = props.page*10;
        }
        console.log(begin,end)

        for(let i=begin; i<end; i++){
            list.push(getList[i])
        }
        console.log(list)

        return list
    }

    return (
        <>
            <div>
                <div className="eventlist">
                    <ul className="event_goods_ul">
                        {showEvtList()}
                    </ul>
                </div>
                <div className="frm_pagination">
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={10}
                            totalItemsCount={getEvtList.length}
                            pageRangeDisplayed={10}
                            onChange={handlePageChange}
                        />
                </div>
            </div>
        </>
    )
}
