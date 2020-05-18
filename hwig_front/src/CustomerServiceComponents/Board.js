import React from 'react'
import './Board.css'

export default function Board(props) {
    console.log(props)

    const article = props.article
    return (
        <>
            <div className="board-container">
                <p>공지사항<span>컬리의 새로운 소식들과 용한 정보를 한곳에서 확인하세요.</span></p>
                <table className="board-table">
                    <tr>
                        <td>제목</td>
                        <td colSpan="3">{article.notice_subject}</td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td colSpan="3">HWIG</td>
                    </tr>
                    <tr>
                        <td>작성일</td>
                        <td>{article.notice_regdate}</td>
                        <td>조회수</td>
                        <td>{article.notice_hit}</td>
                    </tr>
                    <tr>
                        <td colSpan="4">{article.notice_content.split(/(<br>|<br\/>|<br \/>)/g).map( line => {
                        return (<span>{line.replace(/(<br>|<br\/>|<br \/>)/g, '')}<br/></span>)
                    })}</td>
                    </tr>
                </table>
            </div>
            
        </>
    )
}
