import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import './style/global.scss'
import { Provider } from 'react-redux'
import App from "./app/App.jsx"
import store from "./redux/store.js";
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  </Provider>,
)
