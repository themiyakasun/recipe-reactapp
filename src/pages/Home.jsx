import React, { useState, useEffect } from 'react';

const catUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const meals = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [meal, setMeal] = useState([]);

  const fetchCat = async () => {
    try {
      const response = await fetch(catUrl);
      const data = await response.json();
      const { categories: cats } = data;

      if (cats) {
        const newCategories = cats.map((item) => {
          const { idCategory, strCategory, strCategoryThumb } = item;

          return {
            id: idCategory,
            cat: strCategory,
            image: strCategoryThumb,
          };
        });
        setCategories(newCategories);
      } else {
        setCategories([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  };

  const fetchMeal = async () => {
    try {
      const response = await fetch(`${meals}${category}`);
      const data = await response.json();
      const { meals: mealItems } = data;

      if (mealItems) {
        const newMeals = mealItems.map((item) => {
          const { idMeal, strMeal, strMealThumb } = item;

          return {
            id: idMeal,
            meal: strMeal,
            image: strMealThumb,
          };
        });
        setMeal(newMeals);
      } else {
        setMeal([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, [category]);

  return (
    <div className='md:px-36 md:py-10 px-2 py-4 '>
      <select name='' id='' onChange={handleCategoryChange} value={category}>
        <option value='all'>Select option</option>
        {categories.map((catItem) => {
          const { id, cat } = catItem;

          return (
            <option key={id} value={cat}>
              {cat}
            </option>
          );
        })}
      </select>

      <div className='flex mt-10 flex-wrap'>
        {meal.map((item) => {
          const { id, meal, image } = item;

          return (
            <div
              className='flex-[0_0_33.33%] max-w-[33.33%] mb-5 px-[15px]'
              key={id}
            >
              <img src={image} alt='' />
              <h2>{meal}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
