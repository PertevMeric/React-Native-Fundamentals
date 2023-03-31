import { createContext, useState } from "react";
export const ButtonContext = createContext({
  btn: {},
  changeBtnState: () => {},
});

function ButtonContextProvider({ children }) {
  const [buttonState, setButtonState] = useState(false);

  function changeButtonState() {
    setButtonState((previousState) => !previousState);
  }

  const value = {
    btn: buttonState,
    changeBtnState: changeButtonState,
  };

  return (
    <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
  );
}

export default ButtonContextProvider;
