import React from 'react';
import "./Footer.css";
import ico_instagram from "../images/ico_instagram.webp"
import ico_fb from "../images/ico_fb.webp"
import ico_blog from "../images/ico_blog.webp"
import ico_naverpost from "../images/ico_naverpost.webp"
import ico_youtube from "../images/ico_youtube.webp"



const Footer = () => {
    return (
        <div className="footer">
            <div className="ft_content">
                <div className="ft_cc">
                    <h2>고객행복센터</h2>
                    <div className="cc_view cc_call">
                        <h3><span>1644-1111</span></h3>
                        <dl>
                            <dt>365 고객센터</dt>
                            <dd>오전 7시 - 오후 7시</dd>
                        </dl>
                    </div>
                    <div className="cc_view cc_kakao">
                        <h3><a href="#">카카오톡 문의</a></h3>
                        <dl>
                            <dt>365 고객센터</dt>
                            <dd>오전 7시 - 오후 7시</dd>
                        </dl>
                    </div>
                    <div className="cc_view cc_qna">
                        <h3><a href="#">1:1 문의</a></h3>
                        <dl>
                            <dt>24시간 접수 가능</dt>
                            <dd>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</dd>
                        </dl>
                    </div>
                </div>
                <div className="ft_company">
                    <ul>
                        <li>휙 소개</li>
                        <li>휙 소개영상</li>
                        <li>인재채용</li>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                        <li>이용안내</li>
                    </ul>
                    <div className="ft_comlist">
                        법인명(상호) : 주식회사 휙 <span className="l">|</span> 사업자등록번호 : 261-111-1234 <a href="#">사업자 정보 확인</a>
                        <br />
                        통신판매업 : 제 2020-서울강남-00000호 <span className="l">|</span> 개인정보보호책임자 : 주식회사 휙
                        <br />
                        주소 : 서울시 강남구 KIC캠퍼스 <span className="l">|</span> 대표이사 : 수평적구조
                        <br />
                        입점문의 : <a href="#">입점문의하기</a> <span className="l">|</span> 제휴문의 : <a href="#">kiccampus@hwig.com</a>
                        <br />
                        채용문의 : <a href="#">recruit@hwig.com</a>
                        <br />
                        팩스 : 070-000-0000 <span className="l">|</span> 이메일 : kiccampus@hwig.com
                        <div className="copy">
                            <span>&copy; HWIG CORP. ALL RIGHTS RESERVED</span>
                            <ul className="list_sns">
                                <li>
                                    <a href="https://instagram.com/" className="link_sns" target="_blank"><img src={ico_instagram} alt="인스타그램 바로가기"></img></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" className="link_sns" target="_blank"><img src={ico_fb} alt="페이스북 바로가기"></img></a>
                                </li>
                                <li>
                                    <a href="http://blog.naver.com/" className="link_sns" target="_blank"><img src={ico_blog} alt="네이버블로그 바로가기"></img></a>
                                </li>
                                <li>
                                    <a href="https://m.post.naver.com/" className="link_sns" target="_blank"><img src={ico_naverpost} alt="유튜브 바로가기"></img></a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/" className="link_sns lst" target="_blank"><img src={ico_youtube} alt="유튜브 바로가기"></img></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;