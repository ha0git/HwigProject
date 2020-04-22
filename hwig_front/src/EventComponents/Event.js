import React from 'react';
import './Event.css';
export default function Event(props) {
    const evt_content_img= props.evtInfo.event_content_img
    return (
        <>
            <div>
                <div className="main">
                    <img className="i1" src={"http://13.209.202.242:8080/" + evt_content_img} alt="" />
                </div>
            </div>
        </>
    )
}
