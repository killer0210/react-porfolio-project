import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import DetailsModal from '../components/DetailsModal'
import ShoppingCart from '../components/ShoppingCart'
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

const Products = () => {
    // State - аль product - ийг сонгосон, модал нээлтэй эсэхийг удирдах
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    // ShoppingCart-ийг удирдах state
    const [cartItems, setCartItems] = useState([])
    const [showCart, setShowCart] = useState(false)
    const navigate = useNavigate();

    // View details дархад дуудагдах функц 
    const handleViewDetails = (product) => {
        setSelectedProduct(product); // сонгосон бүтээгдэхүүн хадгална 
        setIsModalOpen(true); // модал нээнэ
    }

    // handle хаах функц 
    const handleCloseModal = () => {
        setIsModalOpen(false);  // модал хаагдана
        setSelectedProduct(null); // сонгосон бүтээгдэхүүн устгагдана
    }

    // ------------------ Add to Cart ------------------
    const handleAddToCart = (product) => {
        setCartItems((prevItems) => {
            const existing = prevItems.find((item) => item.product.id === product.id)
            if (existing) {
                return prevItems.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prevItems, { product, quantity: 1 }]
        })
        setIsModalOpen(false) // нэмсэн даруйд модал хаах
        setSelectedProduct(null)
        setShowCart(true) // шууд cart руу харуулах
    }

    // ------------------ Remove from Cart ------------------
    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.product.id !== productId)
        )
    }

    // ------------------ Checkout ------------------
    const handleCheckout = () => {
        alert('Checkout success!')
        setCartItems([])
        setShowCart(false)
    }

    // ------------------ Continue Shopping ------------------
    const handleContinueShopping = () => {
        setShowCart(false)
    }



    return (
        <section className='c-space pt-20 md:pt-30  ' id='products'>
            <div className='flex items-center justify-between'>
                <h2 className='text-heading'>Our Products</h2>
                <button className='relative rounded-lg bg-royal hover:bg-lavender text-white px-4 py-2 transition-colors' onClick={() => navigate('/projectsList')}> All
                </button>
            </div>

            <div className='mt-6 grid grid-cols-4 grid-rows-2 gap-4'>
                <div className='col-span-4 row-span-2  rounded-lg min-h-[80vh]  overflow-y-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-4 pr-2'>
                        {initialProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onView={handleViewDetails}

                            />
                        ))}

                    </div>
                </div>
            </div>



        </section >
    )
}


export default Products