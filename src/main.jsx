import { StrictMode } from 'react'
import './index.css'
import * as ReactDOM from "react-dom/client";
import App from './App';
import { CartProvider } from './components/Hooks/AddToCart';
// import { CartProvider } from './components/Hooks/AddToCart';
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
<CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
)
