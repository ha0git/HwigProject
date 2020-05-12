import React, {useEffect,useState} from 'react'
import './MyPageModify.css'
import { Modal } from 'react-bootstrap'
import DaumPostcode from 'react-daum-postcode';

export default function MypageReviewForm(props) {

    const [review_subject,setTitle] = useState(null)
    const [review_content,setText] = useState(null)
    const [review_img,setImage] = useState(null)
    const mem_id= "test1"
    const prd_id = props.num
    const handleSubmit = (e) => {
        e.preventDefault()
        if(true){
            console.log({review_subject,review_content,prd_id,mem_id})
            props.onSubmit({review_subject,review_content,prd_id,mem_id});
        }else{
            console.log('제출 실행',{})
            props.onSubmit({review_subject,review_content,review_img,prd_id,mem_id});
        }
      } 
   
    return (
        <div className="mypage-modify-container">
                <div className="mypage-modify-title">리뷰 작성</div>
                <div className="mypage-modify-subtitle">기본정보</div>
                <div className="mypage-modify-subtitle2">*필수입력사항</div>
                <div className="mypage-modify-line"></div>
                <div>
                    <form onSubmit={handleSubmit} >
                        <div className="mypage-modigy-form-container">
                            <tr className="mypage-modify-input">
                                <td className="mypage-modify-input-text-title">제목</td>
                                <td><input className="mypage-modify-inputbox" type="text" onChange={(e) => setTitle(e.target.value)}></input></td>
                            </tr>
                            <tr className="mypage-modify-input">
                                <td className="mypage-modify-input-text-title">내용</td>
                                <td><input className="mypage-modify-inputbox" type="text" onChange={(e) => setText(e.target.value)}></input></td>
                            </tr>
                            <tr className="mypage-modify-input">
                                <td className="mypage-modify-input-text-title">이미지 첨부</td>
                                <td>
                                    <label for="ex_file">업로드</label>
                                    <input className="reviewform_image" id="ex_file" type="file" onChange={(e) => setImage(e.target.value)}></input>
                                    <input type="hidden" value={review_img}></input>
                                </td>
                            </tr>
                        </div>
                        <div className="mypage-modify-form-submit-buttons">
                            <input className="mypage-modify-form-submit2" type="submit" value="작성완료"/>
                        </div>
                    </form>
                </div>
        </div>
    )
}
