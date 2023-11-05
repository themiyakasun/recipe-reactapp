import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const SingleMeal = () => {
  const { id } = useParams();
  const [singleMeal, setSingleMeal] = useState([]);

  const fetchMeal = async () => {
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const { meals: mealItems } = data;

      if (mealItems) {
        const newMeal = mealItems.map((item) => {
          const {
            idMeal,
            strMeal,
            strMealThumb,
            strCategory,
            strInstructions,
          } = item;

          return {
            id: idMeal,
            meal: strMeal,
            image: strMealThumb,
            category: strCategory,
            instructions: strInstructions,
          };
        });
        setSingleMeal(newMeal);
      } else {
        setSingleMeal([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, [id]);
  return (
    <div className='md:px-36 md:py-10 px-2 py-4 '>
      {singleMeal.map((item) => {
        const { id, meal, image, category, instructions } = item;

        return (
          <div key={id}>
            <img src={image} alt='' />

            <h3 className='mt-5 text-2xl'>{meal}</h3>

            <div className='flex mt-5'>
              <h4 className='px-5 py-3 bg-black text-white rounded-[5px]'>
                {category}
              </h4>
            </div>

            <p className='mt-5'>{instructions}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SingleMeal;
