import React from 'react';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import { AuthProvider } from './hooks/AuthContext';

import GlobaStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <GlobaStyle />
    </>
  );
};

export default App;
