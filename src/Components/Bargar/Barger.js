import React from 'react';
import './bargar.css';
import BargarIngrident from './BargarIngredient/BargarIngredient';
// import BargarIngridient from './BargarIngredient/BargarIngredient';

const barger = (props) => {
    let transformedIngredients =Object.keys(props.ingredient)
        .map(igKey => {
            return [...Array(props.ingredient[igKey])].map((_, i) =>{
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
        <div class='Bargar'>
            <BargarIngrident type="bread-top" />
            {transformedIngredients}
            <BargarIngrident type="bread-bottom" />
        </div>
    );
};



export default barger;