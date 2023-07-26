import React, { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  
  const handleAddFood = (newFood) => {
 
    setFoods([newFood, ...foods]);
  };

 
  const handleDeleteFood = (foodId) => {
    
    const updatedFoods = foods.filter((food) => food.id !== foodId);
    
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {}
      <AddFoodForm onAddFood={handleAddFood} />

      {}
      <Row gutter={[16, 16]} justify="center">
        {foods.map((oneFood) => (
          <Col key={oneFood.id}>
            <FoodBox food={oneFood} onDelete={() => handleDeleteFood(oneFood.id)} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
