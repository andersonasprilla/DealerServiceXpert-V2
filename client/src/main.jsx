import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Finished from './pages/Finished';

import { Provider } from 'react-redux';
import store from './store';

import App from './App';
import SpecialOrderParts from './pages/SpecialOrderParts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'finished',
        element: <Finished />
      },
      {
        path: 'special-order-parts',
        element: <SpecialOrderParts />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);