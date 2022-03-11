import React, { useState } from "react";

const defaultValue = {
  show: false,
  message: "Toast Message",
  hideToast: () => {},
  showToast: () => {},
  setMessage: (value: string) => {
    console.log("value", value);
  },
};

export const ToastContext = React.createContext(defaultValue);

const ToastProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const hideToast = () => setShow(false);
  const showToast = () => setShow(true);

  return (
    <ToastContext.Provider
      value={{ show, hideToast, showToast, message, setMessage }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
