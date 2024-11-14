import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  { 
    path: '/',
    element: <h1>Home</h1>,
  }
]);

root.render(<RouterProvider router={router}/>);
