import React, {Component} from 'react';
import './EventList.css';
import jangevent from "../images/eventlist/jangevent.png";
export default function EventList() {
    return (
        <>
            <div>
                <div className="eventlist">
                    <ul className="event_goods_ul">
                        <li className="event_goods_li">
                            <a href="#">
                                <div className="event_thumb_img" >
                                <img src="https://img-cf.kurly.com/shop/data/event/726a36c271e71fa4f4c1d811101df600.jpg"/></div></a>
                        </li>
                        <li className="event_goods_li">
                            <a href="event">
                                <div className="event_thumb_img" >
                                <img src={jangevent}/></div></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
