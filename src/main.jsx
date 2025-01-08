import { StrictMode } from 'react'

import './index.css'

import * as ReactDOM from "react-dom/client";
import {

  RouterProvider,
} from "react-router-dom";
import router from './Root';






ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
