// import classes from '*.module.css';
import React, { Component } from 'react';
import PropType from 'prop-types';
import './BargarIngredient.css';

  
class BargarIngrident extends Component {
    
    render () {
        let ingredient = null;

        switch ( this.props.type) {
            case ('bread-bottom'):
                    ingredient = <div class='BreadBottom'></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div class='BreadTop'>
                        <div class='Seeds1'></div>
                        <div class='Seeds2'></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div class='Meat'></div>;
                break;
            case ('cheese'):
                ingredient = <div class='Cheese'></div>;
                break;
            case ('bacon'):
                ingredient = <div class='Bacon'></div>;
                break;
            case ('salad'):
                ingredient = <div class='Salad'></div>;
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