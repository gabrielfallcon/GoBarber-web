import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import AppProvider from './hooks';

import GlobaStyle from './styles/global';

import Routes from './routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobaStyle />
    </BrowserRouter>
  );
};

export default App;
