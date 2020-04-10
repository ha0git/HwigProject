import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './EventList.css';
import jangevent from "../images/eventlist/jangevent.png";
export default function EventList() {
    return (
        <>
            <div>
                <div className="eventlist">
                    <ul className="event_goods_ul">
                        <li className="event_goods_li">

                            <div className="event_thumb_img" >
                                <img src="https://img-cf.kurly.com/shop/data/event/726a36c271e71fa4f4c1d811101df600.jpg" alt="" /></div>
                        </li>
                        <li className="event_goods_li">
                            <Link to="/eventlist/event">
                                <div className="event_thumb_img" >
                                    <img src={jangevent} alt="" /></div></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
