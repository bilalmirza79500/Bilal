import React, { Component } from 'react';
import Aox from '../../hoc/Aox';
import Bargar from '../../Components/Bargar/Barger';


class BargarBuilder extends Component {
   // constructor (props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredient: {
            salad: 0,
            bacon: 0,
            Cheese: 0,
            Meat: 0
        }
        
    }

    render ()  {
        return (
            <Aox>
                <Bargar ingredient={this.state.ingredient} />
                <div>Build Controls</div>
            </Aox>
        );
    }
}


export default BargarBuilder;