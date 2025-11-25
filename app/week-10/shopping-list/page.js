"use client";

import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useState, useEffect } from 'react';
import { useUserAuth } from "../../contexts/AuthContext";
import Link from 'next/link';
import {getItems, addItem} from '../_services/shopping-list-service';

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState();
    const { user } = useUserAuth();
    useEffect(() => {
        async function loadItems() { 
        const items = await getItems(user.uid);
        setItems(items);}
        loadItems();
    }, [user.uid]);

    const handleAddItem = (newItem) => {
        const id = addItem(user.uid, newItem);
        const newItemId = { ...newItem, id};

        setItems((prevItems) => [...prevItems, newItemId]);
    };
    const handleItemSelect = (item) => {
        setSelectedItemName(item.name.toLowerCase().split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "").trim());
    };

    if (!user) {
        return (
            <div className="flex justify-center items-center flex-col bg-slate-900 gap-4 h-screen">
                <div className="bg-indigo-900 p-8 rounded text-center">
                    <h1>Please sign in to view the shopping list</h1>
                    <button type="button" className="bg-blue-500 rounded py-1 px-2"><Link href="/week-9">Go to Sign In Page</Link></button>
                </div>
            </div>
        );
    }
    return (
        <main>
            <div className="grid place-items-center items-baseline-last m-2">
                <h1 className="text-4xl font-bold">Shopping List</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center w-full max-w-2xl">
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                    <div className="w-2xl">
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            </div>
        </main>
    )
}
