// Your code here

import React from "react";
import { Card, Button } from "antd";

const FoodBox = ({ food, onDelete }) => {
  const { id, name, calories, image, servings } = food;
  const totalCalories = calories * servings;

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <Card title={name} style={{ width: 300 }}>
      <img src={image} alt={name} style={{ height: 150, objectFit: "cover" }} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
      <Button onClick={() => onDelete(id)} type="primary" danger>
        Delete
      </Button>
    </Card>
  );
};


export default FoodBox;
