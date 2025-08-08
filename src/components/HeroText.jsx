import React from 'react'

const HeroText = () => {
    return (
        <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
            {/*Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <h1 className='text-4xl font-medium '>Him I'm Ali</h1>
                <div className='flex flex-col items-start'>
                    <p className='text-5xl font-medium text-neutral-300'>A Developer <br /> Dedicated to Crafting </p>
                    <div className='font-bold text-white text-7xl'>Modern</div>
                    <p className='text-4xl font-medium text-neutral-300'>Web Solutions</p>
                </div>
            </div>
            {/*Mobile View */}

            <div className="flex flex-col space-y-6 md:hidden">
                <p className='text-4xl font-medium'>Hi, I'm Ali</p>
                <div>
                    <p className='text-5xl font-black text-neutral-300'>Building</p>
                </div>
                <p className='text-4xl font-medium text-neutral-300'>Web Applications</p>
            </div>
        </div>
    )
}

export default HeroText