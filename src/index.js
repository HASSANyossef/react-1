import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "./index.css";

let root = document.getElementById('root');
let html = <App />;


// let btn = document.querySelector(".Need-btn");
// let service = document.querySelector(".service");
// btn.click(function ()
// {
//   window.animate({ scrollTop:service }, 1000);
// })
ReactDOM.render(html,root);

