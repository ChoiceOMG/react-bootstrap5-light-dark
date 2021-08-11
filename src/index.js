import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import rootReducers from "./store/reducer/index";
import './style.scss';
 

const store = createStore(rootReducers);

ReactDOM.render( 
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")

)

reportWebVitals()