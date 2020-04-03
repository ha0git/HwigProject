import React, {Component} from 'react';
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
export default function BodyUp() {

    return (
        <>
            <div className="main">
                <div className="crsq">
                <Carousel fade="true" interval="3000">
                <Carousel.Item>
                    <div className="crs">
                    <Link to="./event">
                    <img
                    src={jangbanner}
                    alt="Third slide"
                    />
                    </Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="crs">
                    <img
                    src={paperbanner}
                    alt="Third slide"
                    />
                    </div>
                </Carousel.Item>
                </Carousel>
                </div>
                <div className="main_product_list">
                    <div className="main_goods_tit_d"><h3 className="main_goods_tit">이 상품 어때요?</h3></div>
                    <div className="main_list_goods">
                        <div>
                            <ul className="main_goods_ul">
                                <li className="main_goods_li">
                                    <a href="#"><div className="main_thumb_img">
                                        <img className="imgscale" src={vienna} /></div></a>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <a href="#">고소한 비엔나 소세지</a>
                                        </span><p />
                                        <span className="price">38000원</span>
                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <a href="#">
                                        <img src={save10} className="saleico"/>
                                        <div className="main_thumb_img">
                                        <img className="imgscale" src={vienna} /></div>
                                    </a>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <a href="#">고소한 비엔나 소세지</a>
                                        </span><p />
                                        <span className="price">38000원</span>
                                        <span className="cost">50000원</span>
                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <a href="#"><div className="main_thumb_img">
                                        <img className="imgscale" src={vienna} /></div></a>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <a href="#">고소한 비엔나 소세지</a>
                                        </span><p />
                                        <span className="price">38000원</span>
                                        
                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <a href="#">
                                        <img src={save10} className="saleico"/>
                                        <div className="main_thumb_img">
                                        <img className="imgscale" src={vienna} /></div>
                                    </a>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <a href="#">고소한 비엔나 소세지</a>
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
                    <div className="main_goods_tit_d"><a className="tit_a" href="#"><h3 className="main_goods_tit">이벤트 소식</h3></a></div>
                    <div className="main_list_goods">
                        <div>
                            <ul className="main_event_ul">
                                <li className="main_event_li">
                                    <a href="#">
                                    <div className="main_thumb_event_img">
                                        <img className="imgscale1" src={mandu} />
                                    </div>
                                    </a>
                                    <div className="info_event">
                                        <span className="event_name">
                                            <a href="#" >냉동식품 최대 40% 할인</a>
                                        </span><p />
                                        <span className="eventsubtext">색다른 식사가 필요할 때</span>
                                    </div>
                                </li>
                                <li className="main_event_li">
                                    <a href="#">
                                    <div className="main_thumb_event_img">
                                        <img className="imgscale1" src={mandu} />
                                    </div>
                                    </a>
                                    <div className="info_event">
                                        <span className="event_name">
                                            <a href="#">냉동식품 최대 40% 할인</a>
                                        </span><p />
                                        <span className="eventsubtext">색다른 식사가 필요할 때</span>
                                    </div>
                                </li>
                                <li className="main_event_li">
                                    <a href="#">
                                    <div className="main_thumb_event_img">
                                        <img className="imgscale1" src={mandu} />
                                    </div>
                                    </a>
                                    <div className="info_event">
                                        <span className="event_name">
                                            <a href="#">냉동식품 최대 40% 할인</a>
                                        </span><p />
                                        <span className="eventsubtext">색다른 식사가 필요할 때</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main_product_list_sale">
                    <div className="main_goods_tit_d"><a className="tit_a" href="#"><h3 className="main_goods_tit">알뜰 상품</h3></a></div>
                    <div className="main_list_goods">
                        <div>
                            <ul className="main_goods_ul">
                                <li className="main_goods_li">
                                    <a href="#">
                                        <img src={save50} className="saleico"/><div className="main_thumb_img">
                                        <img className="imgscale" src={vienna} /></div></a>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <a href="#">고소한 비엔나 소세지</a>
                                        </span><p />
                                        <span className="price">38000원</span>
                                        <span className="cost">50000원</span>
                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <a href="#">
                                        <img src={save50} className="saleico"/><div className="main_thumb_img">
                                        <img className="imgscale" src={vienna} /></div></a>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <a href="#">고소한 비엔나 소세지</a>
                                        </span><p />
                                        <span className="price">38000원</span>
                                        <span className="cost">50000원</span>
                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <a href="#">
                                        <img src={save50} className="saleico"/><div className="main_thumb_img">
                                        <img className="imgscale" src={vienna} /></div></a>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <a href="#">고소한 비엔나 소세지</a>
                                        </span><p />
                                        <span className="price">38000원</span>
                                        <span className="cost">50000원</span>
                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <a href="#">
                                        <img src={save50} className="saleico"/><div className="main_thumb_img">
                                        <img className="imgscale" src={vienna} /></div></a>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <a href="#">고소한 비엔나 소세지</a>
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
