import React from 'react';
import Aox from '../../hoc/Aox';

const layout = ( props ) => (
    <Aox>
        <div>Toolbar, SideDraw, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aox>
);

export default layout;