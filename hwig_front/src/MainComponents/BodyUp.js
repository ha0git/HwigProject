import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Body.css';
import save10 from '../images/10.png';
import save30 from '../images/30.png';
import save50 from '../images/50.png';
import vienna from '../images/product/vienna.png';
import mandu from '../images/eventlist/mandu.png';
import jangbanner from "../images/banner/jangbanner.png";
import paperbanner from "../images/banner/paperbanner.png";
import Carousel from 'react-bootstrap/Carousel'
export default function BodyUp(props) {
    console.log(props.evtData)
    let bannerItem = []
    let eventItem = []
    //메인배너
    if(props.evtData){
        bannerItem = props.evtData.banner
        eventItem = props.evtData.square
    }
    const getBennerItems = bannerItem.map((list, index) => 
        <Carousel.Item>
            <div className="crs">
                <Link to={`/eventlist/event?event_id=${list.event_id}`}>
                    <img
                        src={"http://13.209.202.242:8080/" + list.event_banner_img}
                        alt=""
                    />
                </Link>
            </div>
        </Carousel.Item>
    )

    //메인 이벤트 영역
    const getEventItems = eventItem.map((list, index) => 
        <li className="main_event_li">
            <Link  to={`/eventlist/event?event_id=${list.event_id}`}>
                <div className="main_thumb_event_img">
                    <img className="imgscale1" src={"http://13.209.202.242:8080/" + list.event_square_img} alt="" />
                </div>
            </Link>
            <div className="info_event">
                <span className="event_name">
                    <Link to={`/eventlist/event?event_id=${list.event_id}`}>{list.event_subject}</Link>
                </span><p />
                <span className="eventsubtext">{list.event_content}</span>
            </div>
        </li>
    )


    return (
        <>
            <div className="main">
                <div className="crsq">
                    <Carousel fade="true" interval="3000">
                       {getBennerItems}
                    </Carousel>
                </div>
                <div className="main_product_list">
                    <div className="main_goods_tit_d"><h3 className="main_goods_tit">이 상품 어때요?</h3></div>
                    <div className="main_list_goods">
                        <div>
                            <ul className="main_goods_ul">
                                <li className="main_goods_li">
                                    <Link><div className="main_thumb_img">
                                        <img className="imgscale" src={vienna} alt="" /></div></Link>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <Link>고소한 비엔나 소세지</Link>
                                        </span><p />
                                        <span className="price">38000원</span>
                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <Link>
                                        <img src={save10} className="saleico" alt="" />
                                        <div className="main_thumb_img">
                                            <img className="imgscale" src={vienna} alt="" /></div>
                                    </Link>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <Link>고소한 비엔나 소세지</Link>
                                        </span><p />
                                        <span className="price">38000원</span>
                                        <span className="cost">50000원</span>
                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <Link><div className="main_thumb_img">
                                        <img className="imgscale" src={vienna} alt="" /></div></Link>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <Link>고소한 비엔나 소세지</Link>
                                        </span><p />
                                        <span className="price">38000원</span>

                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <Link>
                                        <img src={save10} className="saleico" alt="" />
                                        <div className="main_thumb_img">
                                            <img className="imgscale" src={vienna} alt="" /></div>
                                    </Link>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <Link>고소한 비엔나 소세지</Link>
                                        </span><p />
                                        <span className="price">38000원</span>
                                        <span className="cost">50000원</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="main_event">
                    <div className="main_goods_tit_d"><Link className="tit_a"><h3 className="main_goods_tit">이벤트 소식</h3></Link></div>
                    <div className="main_list_goods">
                        <div>
                            <ul className="main_event_ul">
                                {getEventItems}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main_product_list_sale">
                    <div className="main_goods_tit_d"><Link className="tit_a"><h3 className="main_goods_tit">알뜰 상품</h3></Link></div>
                    <div className="main_list_goods">
                        <div>
                            <ul className="main_goods_ul">
                                <li className="main_goods_li">
                                    <Link>
                                        <img src={save50} className="saleico" alt="" /><div className="main_thumb_img">
                                            <img className="imgscale" src={vienna} alt="" /></div></Link>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <Link>고소한 비엔나 소세지</Link>
                                        </span><p />
                                        <span className="price">38000원</span>
                                        <span className="cost">50000원</span>
                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <Link>
                                        <img src={save50} className="saleico" alt="" /><div className="main_thumb_img">
                                            <img className="imgscale" src={vienna} alt="" /></div></Link>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <Link>고소한 비엔나 소세지</Link>
                                        </span><p />
                                        <span className="price">38000원</span>
                                        <span className="cost">50000원</span>
                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <Link>
                                        <img src={save50} className="saleico" alt="" /><div className="main_thumb_img">
                                            <img className="imgscale" src={vienna} alt="" /></div></Link>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <Link>고소한 비엔나 소세지</Link>
                                        </span><p />
                                        <span className="price">38000원</span>
                                        <span className="cost">50000원</span>
                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <Link>
                                        <img src={save50} className="saleico" alt="" /><div className="main_thumb_img">
                                            <img className="imgscale" src={vienna} alt="" /></div></Link>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <Link>고소한 비엔나 소세지</Link>
                                        </span><p />
                                        <span className="price">38000원</span>
                                        <span className="cost">50000원</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
