import './App.css';
import Home from './components/Home/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import Team from './components/Team/Team.jsx';
import Footer from './components/Footer/Footer.jsx';
import Events from './components/Events/Events';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
    },
    {
      path: '/team',
      element:
        <>
          <Navbar />
          <Team />
          <Footer />
        </>
    },
    {
      path: '/events',
      element:
        <>
          <Navbar />
          <Events />
          <Footer />
        </>
    },
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
