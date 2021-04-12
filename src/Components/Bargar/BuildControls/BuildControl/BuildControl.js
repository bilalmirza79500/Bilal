import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
    <div class = 'BuiltControl'>
        <div class = 'Lable'>{props.label}</div>
        <button class  = 'Less'>Less</button>
        <button class = 'Mores'>More</button>
    </div>
);




export default buildControl;