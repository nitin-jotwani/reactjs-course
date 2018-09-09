import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = props => {
  const transformedIngredient = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  return (
      transformedIngredient.length === 0 ? (
        <p>Please Add Ingredients</p>
      ) : (
        <div className={classes.burger}>
          <BurgerIngredient type="bread-top" />
          {transformedIngredient}
          <BurgerIngredient type="bread-bottom" />
        </div>
      )
  );
};

export default burger;
