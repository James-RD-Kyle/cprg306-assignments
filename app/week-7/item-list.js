"use client";

import { useState } from "react";
import Item from "./item";
import Items from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    if (sortBy === "name") {
        Items.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === "category") {
        Items.sort((a, b) => a.category.localeCompare(b.category));
    }
    return (
        <div>
            <div className="flex justify-center mb-4">
                <p className="mr-4 self-center">Sort By:</p>
                <button type="button" onClick={() => setSortBy("name")} className={`rounded p-2 w-25 mr-2 cursor-pointer ${sortBy === "name" ? "bg-blue-500" : "bg-white text-black"}`}>Name</button>
                <button type="button" onClick={() => setSortBy("category")} className={`rounded p-2 w-25 cursor-pointer ${sortBy === "category" ? "bg-blue-500" : "bg-white text-black"}`}>Category</button>
            </div>
            {Items.map((item, index) => (
                <Item
                    key={index}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                />
            ))}
        </div>
    );
}