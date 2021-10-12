import React, { useState } from "react";
import Header from "./Header"
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState('light');

  function handleDarkModeClick() {
    if(isDarkMode === 'light'){
      setIsDarkMode('dark')
    }else {
      setIsDarkMode('light')
    }

  
  }
  

  return (
    <div className={isDarkMode}>
     <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
