import React, {Component} from 'react';
import './BodyUp.css';
import Carousel from 'react-bootstrap/Carousel'
export default function BodyUp() {

    return (
        <>
            <div>
                바디업
                <div className="crsq">
                <Carousel>
                <Carousel.Item>
                    <div className="crs">
                    <img
                    src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1584420879.jpg"
                    alt="First slide"
                    />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="crs">
                    <img
                    src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1583113323.jpg"
                    alt="Third slide"
                    />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="crs">
                    <img
                    src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1584511887.jpg"
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
                                    <a href="#"><img className="main_thumb_img" src="https://img-cf.kurly.com/shop/data/goods/1583815961374l0.jpg" /></a>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <a href="#">고소한 비엔나 소세지</a>
                                        </span><p />
                                        <span className="price">38000원</span>
                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <a href="#">
                                        <img src="https://img-cf.kurly.com/shop/data/my_icon/icon_save_15.png" className="saleico"/>
                                        <img className="main_thumb_img" src="https://img-cf.kurly.com/shop/data/goods/1583815961374l0.jpg" />
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
                                    <a href="#"><img className="main_thumb_img" src="https://img-cf.kurly.com/shop/data/goods/1583815961374l0.jpg" /></a>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <a href="#">고소한 비엔나 소세지</a>
                                        </span><p />
                                        <span className="price">38000원</span>
                                        
                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <a href="#">
                                        <img src="https://img-cf.kurly.com/shop/data/my_icon/icon_save_15.png" className="saleico"/>
                                        <img className="main_thumb_img" src="https://img-cf.kurly.com/shop/data/goods/1583815961374l0.jpg" />
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
                                    <a href="#"><img className="main_thumb_event_img" src="https://img-cf.kurly.com/shop/data/main/3/pc_img_1584607565.jpg" /></a>
                                    <div className="info_event">
                                        <span className="event_name">
                                            <a href="#" >텐더밸리 최대 40% 할인</a>
                                        </span><p />
                                        <span className="eventsubtext">색다른 식사가 필요할 때</span>
                                    </div>
                                </li>
                                <li className="main_event_li">
                                    <a href="#"><img className="main_thumb_event_img" src="https://img-cf.kurly.com/shop/data/main/3/pc_img_1584607565.jpg" /></a>
                                    <div className="info_event">
                                        <span className="event_name">
                                            <a href="#">텐더밸리 최대 40% 할인</a>
                                        </span><p />
                                        <span className="eventsubtext">색다른 식사가 필요할 때</span>
                                    </div>
                                </li>
                                <li className="main_event_li">
                                    <a href="#"><img className="main_thumb_event_img" src="https://img-cf.kurly.com/shop/data/main/3/pc_img_1584607565.jpg" /></a>
                                    <div className="info_event">
                                        <span className="event_name">
                                            <a href="#">텐더밸리 최대 40% 할인</a>
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
                                        <img src="https://img-cf.kurly.com/shop/data/my_icon/icon_save_15.png" className="saleico"/><img className="main_thumb_img" src="https://img-cf.kurly.com/shop/data/goods/1583815961374l0.jpg" /></a>
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
                                        <img src="https://img-cf.kurly.com/shop/data/my_icon/icon_save_20.png" className="saleico"/><img className="main_thumb_img" src="https://img-cf.kurly.com/shop/data/goods/1583815961374l0.jpg" /></a>
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
                                        <img src="https://img-cf.kurly.com/shop/data/my_icon/icon_save_15.png" className="saleico"/><img className="main_thumb_img" src="https://img-cf.kurly.com/shop/data/goods/1583815961374l0.jpg" /></a>
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
                                        <img src="https://img-cf.kurly.com/shop/data/my_icon/icon_save_30.png" className="saleico"/><img className="main_thumb_img" src="https://img-cf.kurly.com/shop/data/goods/1583815961374l0.jpg" /></a>
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
