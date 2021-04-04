import React from 'react';
import classes from './Bargar.css';
import BargarIngrident from './BargarIngredient/BargarIngredient';
import BargarIngredient from './BargarIngredient/BargarIngredient';

const bargar = (props) => {
    return (
        <div className={classes.Bargar}>
            <BargarIngrident type="bread-top" />
            <BargarIngrident type="cheese" />
            <BargarIngrident type="meat" />
            <BargarIngrident type="bread-bottom" />
        </div>
    );
};



export default bargar;