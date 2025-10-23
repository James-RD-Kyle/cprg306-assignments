"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, category, quantity };
        console.log(item);
        alert(`Item Added:\nName: ${item.name}\nCategory: ${item.category}\nQuantity: ${item.quantity}`);
        setName("");
        setCategory("produce");
        setQuantity(1);
    }

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
        <div className="border-2 bg-white text-black rounded-3xl p-4 m-2">
            <form onSubmit={handleSubmit} className="">
                <div className="mt-2 w-full">
                    <label htmlFor="name">Item Name:</label>
                    <input value={name} onChange={(event) => setName(event.target.value)} type="text" id="name" placeholder="e.g. Apples, 5" className="p-2 rounded-lg border-2 border-gray-300 w-full box-border" required />
                </div>
                <p className="text-center mt-2">Quantity: {quantity}</p>
                <div className="flex justify-center gap-1">
                    <button type="button" disabled={quantity <= 1} onClick={decrement} className={`bg-stone-400 text-white rounded w-10 h-10 ${quantity <= 1 ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}>-</button>
                    <button type="button" disabled={quantity >= 20} onClick={increment} className={`bg-blue-500 text-white rounded w-10 h-10 ${quantity >= 20 ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}>+</button>
                </div>
                <p className="text-gray-400 text-center">Quantity must be between 1-20</p>
                <div className="mt-2 w-full">
                    <label htmlFor="category">Category:</label>
                        <select value={category} onChange={(event) => setCategory(event.target.value)} id="category" className="p-2 rounded-lg border-gray-300 border-2 w-full cursor-pointer" required>
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen foods">Frozen Foods</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="dry goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                </div>
                <div className="w-1/2 mt-2 mx-auto">
                    <button type="submit" className="bg-green-500 text-white rounded p-2 w-full cursor-pointer">Add Item</button>
                </div>
            </form>
        </div>
    )
}