"use client";

import {useState} from "react";
import {useEffect} from "react";

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([])

    async function loadMealIdeas() {
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData);
    }
    useEffect(() => {loadMealIdeas();}, [ingredient]);

    return (
        <div className="border-2 bg-white text-black rounded-3xl p-4 m-2">
            <h2 className="text-2xl font-bold text-center mb-2">Meal Ideas with {ingredient}</h2>
            <ul>
                {meals.length === 0 ? (<li>No meal ideas found.</li>) : (
                    meals.map((meal) => (<li key={meal.idMeal} className=" rounded-3xl w-full bg-blue-200 mb-2 p-2">
                        <img src={meal.strMealThumb} alt={meal.strMeal} width="48" height="48" className="rounded-3xl mr-2 inline-block" /> {meal.strMeal}</li>))
                )}
            </ul>
        </div>
        );
};

async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const mealData = await response.json();

        return Array.isArray(mealData.meals) ? mealData.meals : [];
};