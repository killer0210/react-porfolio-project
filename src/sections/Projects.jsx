import React from 'react'

const Projects = () => {
    return (
        <section className='c-space section-spacing'>
            <h2 className='text-heading'>WORK</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-12'>
                {/* Project 1 */}
                <div className='relative overflow-hidden rounded-lg'>
                    <div className='w-full bg-gray-200  flex  grid-default-color flex-col md:flex-row gap-4  '>
                        <div className='w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden rounded-lg'
                            style={{ backgroundImage: "url('/src/assets/projects/accessories.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                        <div className='w-full md:w-1/2 '>
                            <p className='subtext'>E-Commerce Template</p>
                            <p className='headtext'>A modern e-commerce template built with React and Tailwind CSS.</p>
                            <p className='subtext'>This template includes a product listing page, shopping cart, and checkout process.</p>
                        </div>

                    </div>
                </div>
                {/* Project 2 */}
                <div className='relative overflow-hidden rounded-lg'>
                    <div className='w-full bg-gray-200  flex  grid-default-color flex-col md:flex-row gap-4  '>
                        <div className='w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden rounded-lg'
                            style={{ backgroundImage: "url('/src/assets/projects/accessories.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                        <div className='w-full md:w-1/2 '>
                            <p className='subtext'>E-Commerce Template</p>
                            <p className='headtext'>A modern e-commerce template built with React and Tailwind CSS.</p>
                            <p className='subtext'>This template includes a product listing page, shopping cart, and checkout process.</p>
                        </div>

                    </div>
                </div>
                {/* Project 3 */}
                <div className='relative overflow-hidden rounded-lg'>
                    <div className='w-full bg-gray-200  flex  grid-default-color flex-col md:flex-row gap-4  '>
                        <div className='w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden rounded-lg'
                            style={{ backgroundImage: "url('/src/assets/projects/accessories.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                        <div className='w-full md:w-1/2 '>
                            <p className='subtext'>E-Commerce Template</p>
                            <p className='headtext'>A modern e-commerce template built with React and Tailwind CSS.</p>
                            <p className='subtext'>This template includes a product listing page, shopping cart, and checkout process.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects