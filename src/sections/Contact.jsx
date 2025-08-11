import React from 'react'

const Contact = () => {
    return (
        <section className='c-space section-spacing ' id='contact'>
            <h2 className='text-heading'>CONTACT</h2>
            <h1 className=' text-heading mt-12'>Get in Touch</h1>
            <p className='subtext '>Feel free to reach out for collaborations or just a chat!</p>
            <div className='flex flex-col md:flex-row justify-between mt-34 gap-4 '>
                <div>
                    <h3 className='headtext'>Email</h3>
                    <p className='subtext'> Our friendly team is here to help!</p>
                    <p className=' text-blue-600 hover:underline hover:cursor-pointer mt-8'>example@example.com</p>
                </div>
                <div>
                    <h3 className='headtext'>Office</h3>
                    <p className='subtext'>Come say hello at our office!</p>
                    <p className='text-blue-600 hover:underline hover:cursor-pointer mt-8'>123 Office St, City, Country</p>
                </div>
                <div>
                    <h3 className='headtext'>Phone</h3>
                    <p className='subtext'> Our friendly team is here to help!</p>
                    <p className='text-blue-600 hover:underline hover:cursor-pointer mt-8'>(123) 456-7890</p>
                </div>
            </div>
        </section>
    )
}

export default Contact