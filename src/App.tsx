import React from 'react';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';

import AppProvider from './hooks';

import GlobaStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <GlobaStyle />
    </>
  );
};

export default App;
