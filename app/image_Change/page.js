"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
    const [onClick,setOnclick] = useState (true)
    
    const handleOnClick = () =>{
        setOnclick(!onClick)
    }
    
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-red-600'>
      <div>
        <button onClick={handleOnClick} className='bg-blue-600 rounded-lg px-4 py-2 m-4'>onClick</button>
      </div>
    {onClick &&
      <di>
      <Image src= {"/images.jpg"} width={300} height={300} alt='images' className='width=[300px] height=[300px]'/>
      </di>
    }
    </div>
  )
}

export default page