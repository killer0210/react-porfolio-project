import React from 'react'

const Projects = () => {
    return (
        <section className='c-space pt-20 md:pt-30' id='projects'>
            <h2 className='text-heading'>Projects</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-12'>
                {/* Project 1 */}
                <div className='card  relative  rounded-lg overflow-hidden hover:-translate-y-1 duration-200 '>
                    <div className='w-full flex   flex-col lg:flex-row gap-4  z-10 p-4  grid-default-color1  '>
                        <div className='w-auto lg:w-1/2 h-64 lg:h-auto relative overflow-hidden z-10 rounded '
                            style={{ backgroundImage: "url('/src/assets/projects/accessories.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                        ></div>

                        <div className='w-full lg:w-1/2  z-10 grid md:gap-4'>
                            <p className='subtext'>E-Commerce Template</p>
                            <p className='text-sm md:text-xl md:headtext'>A modern e-commerce template built with React and Tailwind CSS.</p>
                            <p className='hidden md:block subtext'>This template includes a product listing page, shopping cart, and checkout process.</p>
                        </div>

                    </div>
                </div>
                {/* Project 2 */}
                <div className='card  relative  rounded-lg overflow-hidden hover:-translate-y-1 duration-200 зе₮'>
                    <div className='w-full flex   flex-col lg:flex-row gap-4  z-10 p-4  grid-default-color1  '>
                        <div className='w-auto lg:w-1/2 h-64 lg:h-auto relative overflow-hidden z-10 rounded '
                            style={{ backgroundImage: "url('/src/assets/projects/accessories.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                        ></div>

                        <div className='w-full lg:w-1/2  z-10 grid md:gap-4 '>
                            <p className='subtext'>E-Commerce Template</p>
                            <p className='text-sm md:text-xl md:headtext'>A modern e-commerce template built with React and Tailwind CSS.</p>
                            <p className='hidden md:block subtext'>This template includes a product listing page, shopping cart, and checkout process.</p>
                        </div>

                    </div>
                </div>
                {/* Project 3 */}
                <div className='card  relative  rounded-lg overflow-hidden hover:-translate-y-1 duration-200 зе₮'>
                    <div className='w-full flex   flex-col lg:flex-row gap-4  z-10 p-4 grid-default-color1  '>
                        <div className='w-auto lg:w-1/2 h-64 lg:h-auto relative overflow-hidden z-10 rounded '
                            style={{ backgroundImage: "url('/src/assets/projects/accessories.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                        ></div>

                        <div className='w-full lg:w-1/2  z-10 grid md:gap-4 '>
                            <p className='subtext'>E-Commerce Template</p>
                            <p className='text-sm md:text-xl md:headtext'>A modern e-commerce template built with React and Tailwind CSS.</p>
                            <p className='hidden md:block subtext'>This template includes a product listing page, shopping cart, and checkout process.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects