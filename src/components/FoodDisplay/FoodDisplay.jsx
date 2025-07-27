import React from 'react';
import FoodItem from '../FoodItem/FoodItem';
import { food_list } from '../../assets/assets';

const FoodDisplay = ({ category }) => {
  const filteredList = category === 'All'
    ? food_list
    : food_list.filter(item => item.category === category);

  return (
    <div className="food-item-container">
      {filteredList.map((item, index) => (
        <FoodItem
          key={index}
          id={item._id}  // Make sure you're using _id here
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default FoodDisplay;
