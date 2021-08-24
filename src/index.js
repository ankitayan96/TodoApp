import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {TodoApp} from './App';


let items = [];
const initialItems = [
  { "text": "This is default", "done": false },
  { "text": "This is default", "done":true },
  { "text": "This is default", "done": true },
];

try {
  items = JSON.parse(localStorage.getItem('items'));
} catch(err) {}

if ( items === null || items.length === 0 ) {
  items = initialItems;
}

ReactDOM.render(
  <React.StrictMode>
  <TodoApp items={ items } />
  </React.StrictMode>,
  document.getElementById('root')
);




