import React, { useState, useEffect, useContext } from "react";
import { TOAST_TIMEOUT } from "src/utils/constants";
import ReactDOM from "react-dom";
import { ToastContext } from "src/context/ToastContext";

const Toast = () => {
  const [node] = useState(document.createElement("div"));
  const { message, show, hideToast, setMessage } = useContext(ToastContext);

  const removeNode = () => {
    const ele = document.querySelector("#toast");
    if (ele?.children.length) {
      ele.childNodes[0].remove();
    }
  };

  useEffect(() => {
    if (show) {
      document
        .querySelector("#toast")
        ?.appendChild(node)
        .classList.add("toast");
      setTimeout(() => {
        removeNode();
        hideToast();
        setMessage("");
      }, TOAST_TIMEOUT);
    } else {
      removeNode();
    }

    return () => removeNode();
  }, [node, show, hideToast, setMessage]);

  return ReactDOM.createPortal(<span>{message}</span>, node);
};

export default Toast;
