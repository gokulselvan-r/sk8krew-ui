import React from 'react';
import CustomButton from './src/components/CustomButton';
import CustomTextInput from './src/components/CustomTextInput';
import { AuthProvider } from './src/context/AuthContext';
import Main from './src/navigations/MainNav';
import Login from './src/screens/Login';

function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}

export default App;
