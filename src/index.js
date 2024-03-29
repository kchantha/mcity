import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';

import {BrowserRouter} from 'react-router-dom';
import { createRoot } from "react-dom/client";
import Routes from './routes';
import './firebase';


const App = () =>{ 
  return(
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
  )
}
//ReactDOM.render(<App/>, document.getElementById('root'));

createRoot(document.getElementById('root')).render(<App />);