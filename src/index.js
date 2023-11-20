import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/education',
        element: <Education />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
