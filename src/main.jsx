import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import './style/global.scss'
import { Provider } from 'react-redux'
import App from "./app/App.jsx"
import store from "./redux/store.js";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
)
