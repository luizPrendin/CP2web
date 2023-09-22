import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'

import Home from './routes/Home/index.jsx';
import Aparelhos from './routes/Aparelhos/index.jsx';
import VizualizarAparelho from './routes/VisualizarAparelho/index.jsx';
import InserirAparelho from './routes/InserirAparelho/index.jsx';
import EditarAparelho from './routes/EditarAparelho/index.jsx';
import Error from './routes/Error/index.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/aparelhos', element: <Aparelhos /> },
      { path: '/aparelhos/:id', element: <VizualizarAparelho /> },
      { path: '/aparelhos/:id/editar', element: <EditarAparelho /> },
      { path: '/aparelhos/inserir', element: <InserirAparelho /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
