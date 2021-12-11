import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NumberList from './List'
import Blog from './Blog';
import reportWebVitals from './reportWebVitals';


//passando parametros
const numbers = [1, 2, 3, 4, 5, 6, 7];

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <React.StrictMode>
    <App />

    <Blog posts={posts}/>

  

    <NumberList numbers={numbers} />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
