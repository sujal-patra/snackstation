import React, { createContext, useContext, useState } from 'react';

export const PantryContext = createContext();

export const PantryProvider = ({ children }) => {
  const [pantry, setPantry] = useState([]);

  const addToPantry = (item) => {
    setPantry(prev => [...prev, item]);
  };

  const removeFromPantry = (id) => {
    setPantry(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setPantry(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <PantryContext.Provider value={{ pantry, addToPantry, removeFromPantry, updateQuantity }}>
      {children}
    </PantryContext.Provider>
  );
};

export const usePantry = () => useContext(PantryContext);
