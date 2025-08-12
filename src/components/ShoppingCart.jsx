import React from 'react'

const ShoppingCart = ({ cartItems, onRemove, onCheckout, onContinueShopping }) => {
    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="rounded-lg shadow-sm bg-gradient-to-b from-[var(--color-storm)] to-[var(--color-indigo)] p-6">
                <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
                <p className="text-neutral-400 mb-4">Your cart is empty</p>
                <button
                    onClick={onContinueShopping}
                    className="w-full rounded-lg bg-royal hover:bg-lavender text-white py-3 px-4 transition-colors"
                >
                    Continue Shopping
                </button>
            </div>
        )
    }

    return (
        <div className="rounded-lg mt-4 shadow-sm bg-gradient-to-b from-[var(--color-storm)] to-[var(--color-indigo)] p-6">
            <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

            {/* Cart Items */}
            <div className="space-y-4 mb-6 max-h-[65vh]  overflow-y-auto">
                {cartItems.map((item) => (
                    <div key={item.product.id} className="flex items-start gap-4 p-4 rounded-lg bg-indigo/20">
                        {/* Thumbnail */}
                        <div
                            className="w-16 h-16 rounded-lg bg-cover bg-center flex-shrink-0"
                            style={{ backgroundImage: `url('${item.product.image}')` }}
                        />

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-lg mb-1">{item.product.name}</h3>
                            <p className="text-neutral-400 text-sm mb-2 line-clamp-2">{item.product.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-lg">${item.product.price}</span>
                                <span className="text-neutral-400 text-sm">Qty: {item.quantity}</span>
                            </div>
                        </div>

                        {/* Remove Button */}
                        <button
                            onClick={() => onRemove(item.product.id)}
                            className="text-neutral-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-indigo/20"
                            aria-label="Remove item"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>

            {/* Checkout Section */}
            <div className="space-y-3">
                <button
                    onClick={onCheckout}
                    className="w-full rounded-lg bg-royal hover:bg-lavender text-white py-3 px-4 transition-colors font-semibold"
                >
                    Checkout
                </button>

                <button
                    onClick={onContinueShopping}
                    className="w-full rounded-lg bg-storm/40 hover:bg-storm/60 text-white py-2 px-4 transition-colors hover:underline"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    )
}


export default ShoppingCart