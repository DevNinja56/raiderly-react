import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter from './routes';
import './styles/global.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MainRouter/>
);
