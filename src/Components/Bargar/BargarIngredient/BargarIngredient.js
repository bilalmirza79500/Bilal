import classes from '*.module.css';
import React, { Component } from 'react';
import PropType from 'prop-types';

import calsses from './bargarIngredient.css';

class BargarIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type) {
            case ('bread-bottom'):
                    ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingridient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            default:
                ingredient = null
        }
    
        return ingredient;
        
    }
}

BargarIngrident.propTypes = {
    type: PropType.string.isRequired
}

export default BargarIngrident;