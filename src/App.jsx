import Menu from './features/menu/Menu';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px,24px',
            background: '#89B9AD',
          },
        }}
      />
    </>
  );
}

export default App;
