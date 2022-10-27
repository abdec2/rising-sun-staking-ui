import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './routes';
import { GlobalProvider } from "./context/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  </React.StrictMode>
);
