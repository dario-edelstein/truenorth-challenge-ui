import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App';
import Taskslist from './components/Taskslist';
import Errorpage from './components/Errorpage';

const router = createBrowserRouter([
  {
    path: '/tasks',
    element: <App />,
  },
  {
    path: '*',
    element: <Errorpage />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
