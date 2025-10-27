"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function MealIdea({ingredient}) {
    const [meals, setMeals] = useState([])

    async function loadMealIdeas() {
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData);
    }
    useEffect(() => {loadMealIdeas();}, [ingredient]);

    return (
        <div className="border-2 bg-white text-black rounded-3xl p-4 m-2">
            <h2 className="text-2xl font-bold text-center mb-2">Meal Ideas with `{ingredient}`</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="mb-2">
                        <p className="">{meal.strMeal}</p>
                    </li>
                ))}
            </ul>
        </div>
        );
};

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const mealData = await response.json();

        return mealData.meals;
    }
    catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
};