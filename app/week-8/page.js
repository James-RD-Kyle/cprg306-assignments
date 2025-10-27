"use client";

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import { useState } from 'react';

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <main>
            <div className="grid place-items-center items-baseline-last flex-initial m-2">
                <h1 className="text-4xl font-bold">Shopping List</h1>
                <ul className="text-center w-full max-w-2xl">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} />
                </ul>
            </div>
        </main>
    )
}
