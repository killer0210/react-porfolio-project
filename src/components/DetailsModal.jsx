import React from 'react'
import { useNavigate } from "react-router-dom"

const DetailsModal = ({ product, onClose }) => {
    if (!product) return null;
    const navigate = useNavigate()

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4'>
            <div className='w-full max-w-2xl rounded-xl shadow-sm bg-primary'>
                <div className='w-full h-64 md:h-80 bg-cover bg-center rounded-t-lg'
                    style={{ backgroundImage: `url(${product.image})` }} />
                <div className='p-5 space-y-3'>
                    <div className='flex items-center justify-between gap-4'>
                        <h3 text-2xl font-semibold>{product.name}</h3>
                        <button className='text-neutral-300 hover:text-white' onClick={onClose}>✕</button>
                    </div>
                    <p className='subtext'>{product.description}</p>

                    <button
                        onClick={() => navigate(`/products/${product.id}`)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        View Full Details
                    </button>
                </div>
            </div>
        </div >
    )
}

export default DetailsModal