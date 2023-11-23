import React, { createContext, useContext, useState } from "react";

const stateContext = createContext();

const initialState = {
  userProfile: false,
  notification: false,
  chat: false,
  cart: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03c9D7");
  const [currentMode, setCurrentMode] = useState("light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (currentMode) => {
    setCurrentMode(currentMode.target.value);
    localStorage.setItem("themeMode", currentMode.target.value);
    setThemeSettings(false);
  };
  const setColor = (currentColor) => {
    setCurrentColor(currentColor);
    localStorage.setItem("colorMode", currentColor);
    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };


  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        setIsClicked,
        isClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setColor,
        currentMode,
        setMode,
        themeSettings,
        setThemeSettings,
        initialState,
        setMode,
        setColor
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
