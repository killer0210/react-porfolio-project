import React, { useState } from 'react'
import DetailsModal from './DetailsModal';

const ProductCard = ({ product, onView }) => {
    return (
        <div className='rounded-lg shadow-sm bg-gradient-to-b from-[var(--color-storm)] to-[var(--color-indigo)] p-2'>
            <div
                className='w-full h-44 sm:h-48 lg:h-56 bg-cover bg-center'
                style={{ backgroundImage: `url(${product.image})` }} />
            <div className='p-4' >
                <p className='font-semibold text-lg' >{product.name}</p>
                <p className='subtext mt-1' >{product.price}$</p>
                {/*  View Details товч */}
                <button className='mt-3 w-full rounded-lg bg-lavender/20 hover:bg-lavender/30 border-1 text-white py-2 text-sm' onClick={() => onView(product)} >View Details
                </button>
            </div>
        </div>
    )
}

export default ProductCard