import React from 'react'
import { Link } from 'react-router-dom'
import './Body.css';
import bottombanner from '../images/bottombanner.png';
import save10 from '../images/sales/10.png';
import save30 from '../images/sales/30.png';
import save50 from '../images/sales/50.png';

export default function BodyDown(props) {

    //메인 상품리스트
    const nproduct = props.mainData.nproduct;
    const rproduct = props.mainData.rproduct;
    const rproduct2 = props.mainData.rproduct2;

    // 메인 - 오늘의 신상품
    const getNproducts = nproduct.map(item =>
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

    // 메인 - MD의 추천 (채소 / 과일)
    const getRproducts = rproduct.map(item =>
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

    // 메인 - MD의 추천 (정육)
    const getRproducts2 = rproduct2.map(item =>
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
                <span className="price">{item.prd_price * item.prd_sale}원</span>
                <span className="cost">{item.prd_price}원</span>
            </div>
        </li>
    )
    return (
        <>
            <div>
                <div className="main_product_list_today">
                    <div className="main_goods_tit_d"><Link className="tit_a"><h3 className="main_goods_tit">오늘의 신상품</h3></Link></div>
                    <div className="main_list_goods">
                        <div>
                            <ul className="main_goods_ul">
                                {getNproducts}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main_product_listmenu">
                    <div className="main_goods_tit_d_menu">
                        <h3 className="main_goods_tit">MD의 추천</h3>
                        <div className="main_goods_listmenu">
                            <Link>채소 · 과일</Link>
                            <Link>정육</Link>
                        </div>
                    </div>
                    <div className="main_list_goods">
                        <div>
                            <ul className="main_goods_ul">
                                {/* {getRproducts}
                                {getRproducts2} */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottombanner">
                    <Link><img alt="" className="bbimg" src={bottombanner} /></Link>
                </div>
            </div>
        </>
    )
}
