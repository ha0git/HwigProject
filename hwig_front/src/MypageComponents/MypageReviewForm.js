import React, {useEffect,useState} from 'react'
import './MyPageModify.css'
import './MypageReviewForm.css'
import { Modal } from 'react-bootstrap'
import DaumPostcode from 'react-daum-postcode';

export default function MypageReviewForm(props) {

    const [review_subject,setTitle] = useState(null)
    const [review_content,setText] = useState(null)
    const [content, setContent] = useState("");
    const onChange = e => {
        console.log(e.target.files[0])
        setContent(e.target.files[0]);
    };
      
    const mem_id = props.id
    const prd_id = props.num
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!review_subject){
            alert("제목을 입력하세요")
        }else if(!review_content){
            alert("내용을 입력하세요")
        } else {
            console.log(content)
            const formData = new FormData();
            formData.append("prd_id",prd_id)
            formData.append("mem_id",mem_id)
            formData.append("review_subject",review_subject)
            formData.append("review_content",review_content)
            formData.append("img", content); 
            console.log({formData})
            props.onSubmit(formData);
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
                                <td><textarea className="reviewform_text"  onChange={(e) => setText(e.target.value)}></textarea></td>
                            </tr>
                            <tr className="mypage-modify-input">
                                <td className="mypage-modify-input-text-title">이미지 첨부</td>
                                <td>
                                <input type="file" onChange={onChange} />
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
