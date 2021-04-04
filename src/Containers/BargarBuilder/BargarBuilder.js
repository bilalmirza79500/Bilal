import React, { Component } from 'react';
import Aox from '../../hoc/Aox';
import Bargar from '../../Components/Bargar/Barger';


class BargarBuilder extends Component {
    render ()  {
        return (
            <Aox>
                <Bargar />
                <div>Build Controls</div>
            </Aox>
        );
    }
}


export default BargarBuilder;