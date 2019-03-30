import React from 'react';

import './Nav.css';

export const Nav = (props) => (
    <div className="navbar" style={{ width: '100vw', background: '#020202', color: '#eeeeee' }}>
        <ul>
            {props.items.map(
                item => (
                    <li><a href={item.link}>{item.title}</a></li>
                )
            )}
        </ul>
    </div>
);

export default Nav;
