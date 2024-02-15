import React, { useEffect, useState } from "react";

function FoodEntry() {

  let [foodEntries, setFoodEntries] = useState();

  useEffect(() => {
    const foodApi = `https://smart-wellness-tracker.onrender.com/foodEntries`;

    fetch(foodApi)
      .then((res) => res.json())
      .then((data) => {
        setFoodEntries(data);
      })
      .catch((error) => {
        console.log(error);
      });
      
  }, []);

  return (
    <div>
      <h1>Food Entry Page</h1>

      <h2>All Your Food Entries:</h2>

      <ul>
        {foodEntries &&
          foodEntries.map((foodEntry) => (
            <>
              <li key={foodEntry.id}>{foodEntry.food_name}</li>
              <li key={foodEntry.id}>{foodEntry.calories}</li>
              <li key={foodEntry.id}>{foodEntry.entry_date}<br></br><br></br></li>
            </>
          ))}
      </ul>
    </div>
  );
}

export default FoodEntry;
