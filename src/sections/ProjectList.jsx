import React from 'react'
import ProductCard from '../components/ProductCard'
import { useNavigate } from "react-router-dom";
const initialProducts = [
    {
        id: 1,
        name: 'E-Commerce Template',
        category: 'Template',
        image: '/src/assets/projects/accessories.jpg',
        techStack: ['React', 'Tailwind'],
        description: 'A modern template with listing, cart, and checkout.',
        price: 29,
    },
    {
        id: 2,
        name: 'Portfolio Web',
        category: 'Web',
        image: '/src/assets/projects/elearning.jpg',
        techStack: ['React', 'Three.js'],
        description: 'Interactive portfolio website with 3D elements.',
        price: 49,
    },
    {
        id: 3,
        name: 'Learning Platform',
        category: 'Full Project',
        image: '/src/assets/projects/blazor-app.jpg',
        techStack: ['Blazor', 'EF Core'],
        description: 'End-to-end e-learning web application.',
        price: 199,
    },
    {
        id: 4,
        name: 'Mobile Shop UI',
        category: 'Mobile',
        image: '/src/assets/projects/game-engine.jpg',
        techStack: ['React Native', 'Expo'],
        description: 'Mobile app UI kit for shopping experiences.',
        price: 39,
    },
    {
        id: 5,
        name: 'Task Manager',
        category: 'App',
        image: '/src/assets/projects/auth-system.jpg',
        techStack: ['Node.js', 'MongoDB', 'React'],
        description: 'Full-stack task management app with auth.',
        price: 149,
    },
    {
        id: 6,
        name: 'Startup Landing',
        category: 'Web',
        image: '/src/assets/projects/wordpress-theme.jpg',
        techStack: ['Vite', 'Tailwind'],
        description: 'Fast, responsive landing page template.',
        price: 25,
    },
]

const ProjectList = () => {

    const navigate = useNavigate();

    return (
        <div className='h-min-screen flex flex-col items-center justify-center pt-12 gap-4'>
            <h2 className='text-heading'>Project List</h2>
            <div className='mt-6 grid grid-cols-4 grid-rows-3 gap-4'>
                <div className='col-span-4 md:col-span-1 row-span-1 row-span-3 rounded-lg shadow-sm bg-gradient-to-b from-[var(--color-storm)] to-[var(--color-indigo)] p-4'>
                    <ul>
                        <li>
                            <button className='w-full text-left px-3 py-2 rounded-lg hover:bg-indigo-500'>All</button>
                        </li>
                        <li>
                            <button className='w-full text-left px-3 py-2 rounded-lg hover:bg-indigo-500'>Template</button>
                        </li>
                        <li>
                            <button className='w-full text-left px-3 py-2 rounded-lg hover:bg-indigo-500'>Web</button>
                        </li>
                        <li>
                            <button className='w-full text-left px-3 py-2 rounded-lg hover:bg-indigo-500'>App</button>
                        </li>
                        <li>
                            <button className='w-full text-left px-3 py-2 rounded-lg hover:bg-indigo-500'>Full Project</button>
                        </li>
                    </ul>
                </div>
                <div className='col-span-4 md:col-span-3 row-span-2 md:row-span-3 rounded-lg max-h-[80vh]  overflow-y-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-2'>
                        {initialProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}

                            />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectList