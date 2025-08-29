import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    //  yeha pe dynanmic ho isliye useparams use kiye hai jo va pe userid diye the yeha paas kr diya hai 
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User


//  url ke base pe   (use pramas)  yeah to db ko call ko krne ke liye   or display krane ke liye use  hota hai 