import './App.css';
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Team from './components/Team/Team';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <>
          <Navbar />
          <Home />
        </>
    },
    {
      path: '/team',
      element:
        <>
          <Navbar />
          <Team />
        </>
    },
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
