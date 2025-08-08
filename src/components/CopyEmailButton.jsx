import React from 'react'

const CopyEmailButton = () => {
    return (
        <div className='relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'><p className='flex items-center justify-center gap-2'>
            <img src="/src/assets/copy.svg" alt="copy" className='w-5' /> Copy Email Address</p></div>
    )
}

export default CopyEmailButton