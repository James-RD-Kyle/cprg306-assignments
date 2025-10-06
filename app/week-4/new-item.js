"use client";

import {useState} from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
        setQuantity(quantity + 1);
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <div className="border-2 bg-white text-black text-center rounded-lg p-4 m-2">
            <p>Quantity: {quantity}</p>
            <button className="bg-stone-400 text-white rounded w-10 h-10 m-1" onClick={decrement}>-</button>
            <button className="bg-blue-500 text-white rounded w-10 h-10 m-1" onClick={increment}>+</button>
            <p className="text-gray-400">Quantity must be between 1 and 20</p>
        </div>
    )
}