import React from 'react'

const DetailsModal = ({ product, onClose, onAddToCart }) => {
    if (!product) return null;

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
                    <div className='flex gap-2 flex-wrap'>
                        {product.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-full bg-storm text-sm text-neutral-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className='flex items-center justify-between pt-2'>
                        <p className='text-xl font-semibold'>${product.price}</p>
                        <button className='rounded-lg bg-royal hover:bg-lavender text-white px-4 py-2'
                            onClick={() => onAddToCart(product)}> Add to Cart</button>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default DetailsModal