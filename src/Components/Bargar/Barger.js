import React from 'react';
import classes from './Bargar.css';
import BargarIngrident from './BargarIngredient/BargarIngredient';
// import BargarIngridient from './BargarIngredient/BargarIngredient';

const bargar = (props) => {
    let transformedIngredients =Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) =>{
                return <BargarIngrident Key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el)=> {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length == 0) {
        transformedIngredients = <p>Please start Adding Ingredient</p>
    }    
    return (
        <div className={classes.Bargar}>
            <BargarIngrident type="bread-top" />
            {transformedIngredients}
            <BargarIngrident type="bread-bottom" />
        </div>
    );
};



export default bargar;