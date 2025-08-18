import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-royal w-full mt-10 md:mt-auto'>
            <div className=' mx-auto c-space max-w-7xl'>
                <div className='max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24'>
                    {/* <h1>My Portfolio</h1>
                    <p className='footer-text'>© 2023 Your Company. All rights reserved.</p> */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div>
                            <div className="flex justify-center footer-text sm:justify-start">
                                <h1 className='text-2xl font-bold text-white'>My Portfolio</h1>
                            </div>
                            <p className='max-w-md mx-auto mt-6 leading-relaxed text-center sm:max-w-xs sm:mx-0 sm:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, id.</p>



                        </div>

                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-white">Our Services</p>

                            <nav class="mt-8">
                                <ul class="space-y-4 text-sm">
                                    <li>
                                        <a class="text-white transition hover:text-white/75" href="/">
                                            Web Development
                                        </a>
                                    </li>

                                    <li>
                                        <a class="text-white transition hover:text-white/75" href="/">
                                            Web Design
                                        </a>
                                    </li>

                                    <li>
                                        <a class="text-white transition hover:text-white/75" href="/">
                                            Marketing
                                        </a>
                                    </li>

                                    <li>
                                        <a class="text-white transition hover:text-white/75" href="/">
                                            Google Ads
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div class="text-center sm:text-left">
                            <p class="text-lg font-medium text-white">Contact Us</p>

                            <ul class="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        class="flex items-center justify-center sm:justify-start gap-1.5 group"
                                        href="/"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5 text-white shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>

                                        <span class="text-white transition group-hover:text-white/75">
                                            john@doe.com
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="flex items-center justify-center sm:justify-start gap-1.5 group"
                                        href="/"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5 text-white shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>

                                        <span class="text-white transition group-hover:text-white/75">
                                            0123456789
                                        </span>
                                    </a>
                                </li>

                                <li
                                    class="flex items-start justify-center gap-1.5 sm:justify-start"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 text-white shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>

                                    <address class="-mt-0.5 not-italic text-white">
                                        213 Lane, London, United Kingdom
                                    </address>
                                </li>
                            </ul>

                        </div>

                    </div>

                    <div class="pt-6 mt-12 border-t border-gray-800">
                        <div class="text-center sm:flex sm:justify-between sm:text-left">
                            <p class="text-sm text-gray-400">
                                <span class="block sm:inline">All rights reserved.</span>

                                <a
                                    class="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                                    href="/"
                                >
                                    Terms & Conditions
                                </a>

                                <span>&middot;</span>

                                <a
                                    class="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                                    href="/"
                                >
                                    Privacy Policy
                                </a>
                            </p>

                            <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                                &copy; 2022 Company Name
                            </p>
                        </div>

                    </div>

                </div>
            </div>


        </footer >
    )
}

export default Footer