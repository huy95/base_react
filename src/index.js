import React from 'react';
import ReactDOM from 'react-dom';
// import AppUseSate from './useStateHooks';
// import AppExampleUseState from './useStateExample'
import UseEffectHook from "./useEffectHooks";
// import TestHook from "./useRefHooks";
// import  AppTodo from "./todo/todo.js"
// import AppProps from './useContext/props.js';
import AppUseContext from './useContext/useContext.js';


ReactDOM.render(
  <React.StrictMode>
    <AppUseContext />
  </React.StrictMode>,
 document.getElementById('root')
);
