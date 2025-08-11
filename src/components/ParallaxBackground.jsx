import React from 'react'

const ParallaxBackground = () => {
    return (
        <section className='absolute inset-0 bg-black/40'>
            <div className='relative h-screen overflow-y-hidden'>
                {/* Background sky */}
                <div
                    className='absolute inset-0 w-full h-screen -z-50'
                    style={{
                        backgroundImage: 'url(/src/assets/software-production.jpg)',

                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}></div>
                <div className='
                    absolute 
                    inset-x-0 
                    pointer-events-none 
                    -bottom-2
                    h-1/2 
                    sm:h-1/3 
                    bg-gradient-to-t 
                    from-[var(--color-primary)]' />
                {/* Background sky */}
                {/* <div
                    className='absolute inset-0 w-full h-screen -z-50'
                    style={{
                        backgroundImage: 'url(/src/assets/sky.jpg)',
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                    }}></div> */}
                {/* Mountain Layer 3 */}
                {/* <div
                    className='absolute inset-0 -z-40'
                    style={{
                        backgroundImage: 'url(/src/assets/mountain-3.png)',
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                    }}></div> */}
                {/* Planets */}
                {/* <div
                    className='absolute inset-0 -z-30'
                    style={{
                        backgroundImage: 'url(/src/assets/planets.png)',
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                    }}></div> */}
                {/* Mountain Layer 2 */}
                {/* <div
                    className='absolute inset-0 -z-20'
                    style={{
                        backgroundImage: 'url(/src/assets/mountain-2.png)',
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                    }}></div> */}
                {/* Mountain Layer 1 */}
                {/* <div
                    className='absolute inset-0 -z-10'
                    style={{
                        backgroundImage: 'url(/src/assets/mountain-1.png)',
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                    }}></div>  */}

            </div>
        </section>
    )
}

export default ParallaxBackground