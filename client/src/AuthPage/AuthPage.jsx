import React, {useState} from 'react'
import { Login } from './Login';
import { Register } from './Register';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthPageToggle = () => {
    setIsLogin(prev => !prev);
  }

  return (
    <main className='flex items-center justify-center w-full h-[100dvh]'>
      {isLogin ? (
        <Login switchAuthHandler={handleAuthPageToggle} />
      ) : (
        <Register switchAuthHandler={handleAuthPageToggle} />
      )}
    </main>
  );
}

