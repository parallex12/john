// useJohnState.js
import React, { createContext, useContext, useState } from 'react';

const JohnContext = createContext();

export const useJohnState = () => {
  const context = useContext(JohnContext);
  if (!context) {
    throw new Error('useJohnState must be used within a JohnProvider');
  }
  return context;
};

export const JohnProvider = ({ children }) => {
  const [state, setState] = useState('');

  return (
    <JohnContext.Provider value={{ state, setState }}>
      {children}
    </JohnContext.Provider>
  );
};
