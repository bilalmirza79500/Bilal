import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
    <div className = 'BuiltControl'>
        <div className = 'Lable'>{props.label}</div>
        <button className  = 'Less'>Less</button>
        <button className = 'Mores'>More</button>
    </div>
);




export default buildControl;