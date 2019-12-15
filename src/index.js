import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }  from 'react-router-dom';
import App from './App';
import { ListProvider } from './Contexts/ListContext';
import { FolderProvider } from './Contexts/FolderContext';
import './index.css';

ReactDOM.render(
    <FolderProvider>
    <ListProvider>
    <BrowserRouter>
    <App />,
    </BrowserRouter>
    </ListProvider>
    </FolderProvider>,
    document.getElementById('root')
  );