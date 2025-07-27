import React, { useState } from 'react';
import Header from '../../components/Navbar/Header/Header';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Explore from '../../components/Navbar/ExploreMenu/ExploreMenu';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />
      <Explore category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </>
  );
};

export default Home;
