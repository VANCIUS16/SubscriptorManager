import * as React from 'react'
import {useParams} from 'react-router-dom'

const UserTest = () => {

    const params = useParams()
    console.log(params)

    return(
        <>
            <h1>UserTest: {params.id}</h1>
        </>
    )
}

export default UserTest 