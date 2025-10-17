"use client";

import { useState } from "react";
import Item from "./item";
import Items from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    
    if (sortBy === "name") {
        Items.sort()
    }
return (
    items.map((item, index) => (
        <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
        />
    )));
}