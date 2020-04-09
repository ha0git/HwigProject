import React from 'react';
import './Event.css';
import main from "../images/eventpage/img_main.png";
import intro from "../images/eventpage/img_intro.png";
import best from "../images/eventpage/img_best.png";
import intro_noti from "../images/eventpage/img_intro_noti.png";
import best_noti from "../images/eventpage/img_best_noti.png";
export default function Event() {
    return (
        <>
            <div>
                <div className="main">
                    <img className="i1" src={main} alt="" />
                    <div className="b2">
                        <div className="d2">
                            <img className="i2" src={intro} alt="" />
                        </div>
                    </div>
                    <div className="b3">
                        <div className="d3">
                            <img className="i3" src={intro_noti} alt="" />
                        </div>
                    </div>
                    <div className="b4">
                        <div className="d4">
                            <img className="i4" src={best} alt="" />
                        </div>
                    </div>
                    <div className="b5">
                        <div className="d5">
                            <img className="i5" src={best_noti} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
