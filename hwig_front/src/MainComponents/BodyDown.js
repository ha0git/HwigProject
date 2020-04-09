import React from 'react'
import { Link } from 'react-router-dom'
import './Body.css';
import bottombanner from '../images/bottombanner.png';
import save10 from '../images/10.png';
import save30 from '../images/30.png';
import save50 from '../images/50.png';
import vienna from '../images/product/vienna.png';
export default function BodyDown() {
    return (
        <>
            <div>
                <div className="main_product_list_today">
                    <div className="main_goods_tit_d"><Link className="tit_a"><h3 className="main_goods_tit">오늘의 신상품</h3></Link></div>
                    <div className="main_list_goods">
                        <div>
                            <ul className="main_goods_ul">

                                <li className="main_goods_li">
                                    <Link>
                                        <img alt="" src={save10} className="saleico" /><div className="main_thumb_img">
                                            <img alt="" className="imgscale" src={vienna} /></div></Link>
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
                                        <img alt="" src={save10} className="saleico" /><div className="main_thumb_img">
                                            <img alt="" className="imgscale" src={vienna} /></div></Link>
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
                                        <img alt="" src={save30} className="saleico" /><div className="main_thumb_img">
                                            <img alt="" className="imgscale" src={vienna} /></div></Link>
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
                                        <img alt="" src={save30} className="saleico" /><div className="main_thumb_img">
                                            <img alt="" className="imgscale" src={vienna} /></div></Link>
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
                <div className="main_product_listmenu">
                    <div className="main_goods_tit_d_menu">
                        <h3 className="main_goods_tit">MD의 추천</h3>
                        <div className="main_goods_listmenu">
                            <Link>채소</Link>
                            <Link>과일 · 견과 · 쌀</Link>
                            <Link>수산 · 해산 · 건어물</Link>
                            <Link>정육 · 계란</Link>
                            <Link>국 · 반찬 · 메인요리</Link>
                        </div>
                    </div>
                    <div className="main_list_goods">
                        <div>
                            <ul className="main_goods_ul">
                                <li className="main_goods_li">
                                    <Link>
                                        <div className="main_thumb_img">
                                            <img alt="" className="imgscale" src={vienna} /></div></Link>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <Link>고소한 비엔나 소세지</Link>
                                        </span><p />
                                        <span className="price">38000원</span>
                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <Link>
                                        <img alt="" src={save50} className="saleico" />
                                        <div className="main_thumb_img">
                                            <img alt="" className="imgscale" src={vienna} /></div>
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
                                        <img alt="" className="imgscale" src={vienna} /></div></Link>
                                    <div className="info_goods">
                                        <span className="goods_name">
                                            <Link>고소한 비엔나 소세지</Link>
                                        </span><p />
                                        <span className="price">38000원</span>

                                    </div>
                                </li>
                                <li className="main_goods_li">
                                    <Link>
                                        <img alt="" src={save30} className="saleico" />
                                        <div className="main_thumb_img">
                                            <img alt="" className="imgscale" src={vienna} /></div>
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
                <div className="bottombanner">
                    <Link><img alt="" className="bbimg" src={bottombanner} /></Link>
                </div>
            </div>
        </>
    )
}
