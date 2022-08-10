import React from 'react';
import { createRoot } from 'react-dom/client'
import './Resources/css/app.css';

import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

const App = () =>{
  return(
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
  )
}
//ReactDOM.render(<App/>, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App />);