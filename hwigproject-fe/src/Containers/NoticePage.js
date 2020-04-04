import React, {useState, useEffect} from 'react'
import Notice from '../CustomerServiceComponents/Notice'

export default function NoticePage() {
    const [dummy, setdummy] = useState([])

    // useEffect(() => {
    //     setdummy(dummy.concat([
    //         {
    //             id:1,
    //             title: 
    //         }
    //     ]))
    // })

    return (
        <>
            <Notice />
        </>
    )
}
