import React from 'react';
import vienna from '../images/product/vienna.png';
import './Product.css'
export default function Product() {
    return (
        <>
            <div>
                <div className="section_view">
                    <div className="thumb">
                        <img src={vienna} className="thumb_img" />
                    </div>
                    <p className="goods_name">
                        <strong className="name">
                            고소한 비엔나 소세지 255g
                        </strong>
                        <span className="srtdesc">
                            들기름을 넣어 고소한 비엔나 소세지 (255g/1봉)
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}
