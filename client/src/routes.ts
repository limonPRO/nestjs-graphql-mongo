import { lazy } from 'react';

const Dashboard = lazy(() => import('./pages/Home'));
const CreateProducts=lazy(()=> import('./pages/AddProducts'))
const Order =lazy(()=>import('./pages/Order') )

const routes = [

  { path: '/', element: Dashboard },
  {path: '/addproducts', element:CreateProducts},
  {path: '/orders', element:Order}
 
];

export default routes;
