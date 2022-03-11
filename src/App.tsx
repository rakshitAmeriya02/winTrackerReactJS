import "./App.css";
import Home from "./containers/Home";
import ToastProvider from "./context/ToastContext";
import Toast from "./ui-core/Toast";

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <Home />
      </div>
      <Toast></Toast>
    </ToastProvider>
  );
}

export default App;
