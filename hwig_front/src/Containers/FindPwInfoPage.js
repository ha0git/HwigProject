import React from 'react';
import FindPwInfo from '../RegisterComponents/FindPwInfo'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'

const FindPwInfoPage = () => {
        const handledata = (data) => {
            console.log(data)
            sendMemData('api/members/check/info', data)
        }
        const sendMemData = (uri, data) => {
            axios.post(host+uri, data)
            .then(res=>{
                console.log(res.data)
                if (res.data.code === 200 ) {
                    alert("비밀번호가 0000000 으로 초기화되었습니다.")
                }
        })}
    return (
        <>
            <FindPwInfo onSubmit={handledata}/>
        </>
    );
}

export default FindPwInfoPage;
