import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import { Router } from "react-router";
//import { createBrowserHistory } from "history";
//const history = createBrowserHistory();
//import * as serviceWorker from './serviceWorker';
//import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(<App/>,document.getElementById('root'))

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <BrowserRouter>
  <Route component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
