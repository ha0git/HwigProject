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
                    <p className="product_name">
                        <strong className="p_name">
                            고소한 비엔나 소세지 255g
                        </strong>
                        <span className="srtdesc">
                            들기름을 넣어 고소한 비엔나 소세지 (255g/1봉)
                        </span>
                    </p>
                    <p className="product_price">
                        <strong className="p_price">
                            38,000<span className="won">원</span>
                        </strong>
                        <span className="p_price_unlogged">
                            로그인 후, 적립혜택이 제공됩니다.
                        </span>
                    </p>
                    <div className="product_info">
                        <dl class="list fst">
                            <dt class="tit">판매단위</dt> 
                            <dd class="desc">1봉</dd>
                        </dl>   
                        <dl class="list">
                            <dt class="tit">중량/용량</dt> 
                            <dd class="desc">255g</dd>
                        </dl> 
                        <dl class="list">
                            <dt class="tit">원산지</dt> 
                            <dd class="desc">상품별 별도표기</dd>
                        </dl> 
                        <dl class="list">
                            <dt class="tit">포장타입</dt> 
                            <dd class="desc">냉장/종이포장
                                <strong class="emph">택배배송은 에코포장이 스티로폼으로 대체됩니다.</strong>
                            </dd>
                        </dl> 
                        <dl class="list">
                            <dt class="tit">알레르기정보</dt> 
                            <dd class="desc">- 돼지고기, 쇠고기, 대두 함유
                            <br />- 이 제품은 알류, 우유, 메밀, 땅콩, 밀, 고등어, 게, 새우, 복숭아, 토마토, 아황산류, 호두, 닭고기, 오징어, 조개류, 잣을 사용한 제품과 같은 제조시설에서 제조하고 있습니다.</dd>
                        </dl> 
                        <dl class="list">
                            <dt class="tit">유통기한</dt> 
                            <dd class="desc">상품별 별도표기</dd>
                        </dl>
                        <dl class="list">
                            <dt class="tit">안내사항</dt> 
                            <dd class="desc"><span class="txt">상품 특성상 3%내외의 중량차이가 발생할 수 있습니다.</span></dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}
