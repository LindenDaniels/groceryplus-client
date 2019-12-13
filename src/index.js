import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }  from 'react-router-dom';
import App from './App';
import { ListProvider } from './Contexts/ListContext';
import './index.css';

ReactDOM.render(
    <ListProvider>
    <BrowserRouter>
    <App />,
    </BrowserRouter>
    </ListProvider>,
    document.getElementById('root')
  );