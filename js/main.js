import React from 'react';
import ReactDOM from 'react-dom';
import Item from './item.jsx';


const item = {
    src: "/some source",
    href: "/some href",
    name: "some name",
    price: 222
};
ReactDOM.render(<Item {...item} />, document.getElementById("slider"));