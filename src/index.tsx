import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RootRouter } from './Router/RootRouter';
import { AppStore } from './Store/store';
import "./style/style.scss"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={AppStore}>
      <RootRouter/>
    </Provider>
    
  </React.StrictMode>
);
