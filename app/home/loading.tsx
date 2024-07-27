import React from 'react'
import SmallLoader from '../components/SmallLoader'

const loading = () => {
  return (
    <div className='w-[100vw] h-screen p-2 flex items-center justify-center'>
        <SmallLoader/>
    </div>
  )
}

export default loading