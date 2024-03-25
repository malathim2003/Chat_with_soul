import React from 'react'
import Home from './Home'
import Page from './Page'
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import FlyAnimation from './FlyAnimation';
import Page2 from './Page2';
import Remedies from './Remedies';
import Stress from './Stress';
import Fear from './Fear';
import Depression from './Depression';
import Loneliness from './Loneliness';
import Overthinking from './Overthinking';
import Discouragement from './Discouragement';
import Start from './Start';
import About from './About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
      {
        path: "page",
        element: <Page />
      },
      {
        path: "page2",
        element:<Page2 />
      },
      {
        path:"remedies",
        element:<Remedies/>
      },
      {
        path:"stress",
        element:<Stress/>
      },
      {
        path:"Fear",
        element:<Fear/>
      },
      {
        path:"Depression",
        element:<Depression/>
      },
      {
        path:"Loneliness",
        element:<Loneliness/>
      },
      {
        path:"Overthinking",
        element:<Overthinking/>
      },
      {
        path:"Discouragement",
        element:<Discouragement/>
      },
      {
        path:"Start",
        element:<Start/>
      },
      {
        path:"About",
        element:<About/>
      },

    
  
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App