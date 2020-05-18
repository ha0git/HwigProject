import React from 'react';
import { Link } from "react-router-dom";
import './Body.css';
import Carousel from 'react-bootstrap/Carousel'
import save10 from '../images/sales/10.png';
import save30 from '../images/sales/30.png';
import save50 from '../images/sales/50.png';
// import vienna from '../images/product/vienna.png';
// import mandu from '../images/eventlist/mandu.png';
// import jangbanner from "../images/banner/jangbanner.png";
// import paperbanner from "../images/banner/paperbanner.png";

export default function BodyUp(props) {
    //메인 상품리스트
    const wproduct = props.mainData.wproduct;
    const sproduct = props.mainData.sproduct;

    //메인배너
    let bannerItem = []
    let eventItem = []

    if (props.evtData) {
        bannerItem = props.evtData.banner
        eventItem = props.evtData.square
    }
    const getBennerItems = bannerItem.map((list, index) =>
        <Carousel.Item key={index}>
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
        <li key={index} className="main_event_li">
            <Link to={`/eventlist/event?event_id=${list.event_id}`}>
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

    // 메인 - 이 상품 어때요?
    const getWproducts = wproduct.map(item =>
        <li key={item.prd_id} className="main_goods_li">
            <Link>
                <div className="main_thumb_img prd_img">
                    <img className="imgscale" src={item.prd_thumb} alt="상품 이미지" />
                    {(item.prd_sale === 0.1) && <img className="product_sale_icon" src={save10} />}
                    {(item.prd_sale === 0.3) && <img className="product_sale_icon" src={save30} />}
                    {(item.prd_sale === 0.5) && <img className="product_sale_icon" src={save50} />}
                    {(!item.prd_sale) && <p></p>}
                </div>
            </Link>
            <div className="info_goods">
                <span className="goods_name">
                    <Link>{item.prd_name}</Link>
                </span><p />
                <span className="price">{item.prd_price * (1 - item.prd_sale)}원</span>
                <span className="cost">{item.prd_price}원</span>
            </div>
        </li>
    )
    // 메인 - 알뜰 상품
    const getSproducts = sproduct.map(item =>
        <li key={item.prd_id} className="main_goods_li">
            <Link>
                <div className="main_thumb_img prd_img">
                    <img className="imgscale" src={item.prd_thumb} alt="상품 이미지" />
                    {(item.prd_sale === 0.1) && <img className="product_sale_icon" src={save10} />}
                    {(item.prd_sale === 0.3) && <img className="product_sale_icon" src={save30} />}
                    {(item.prd_sale === 0.5) && <img className="product_sale_icon" src={save50} />}
                    {(!item.prd_sale) && <p></p>}
                </div>
            </Link>
            <div className="info_goods">
                <span className="goods_name">
                    <Link>{item.prd_name}</Link>
                </span><p />
                <span className="price">{item.prd_price * (1 - item.prd_sale)}원</span>
                <span className="cost">{item.prd_price}원</span>
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
                                {getWproducts}
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
                                {getSproducts}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
