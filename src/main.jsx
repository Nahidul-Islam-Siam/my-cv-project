import { StrictMode } from 'react'

import './index.css'

import * as ReactDOM from "react-dom/client";
import {

  RouterProvider,
} from "react-router-dom";
import router from './Root';
import App from './App';






ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
  </StrictMode>
)
