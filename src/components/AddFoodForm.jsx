// Your code here

import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const AddFoodForm = ({ onAddFood }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddFood(formData);
    setFormData({
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-food-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="calories">Calories:</label>
        <input
          type="number"
          name="calories"
          value={formData.calories}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="servings">Servings:</label>
        <input
          type="number"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
