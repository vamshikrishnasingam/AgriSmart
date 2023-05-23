import './App.css';
import RouteLayout from './RouteLayout';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home'
import Irrigation from './pages/Irrigation/Irrigation';
import Pest from './pages/PestManagement/Pest';
import Nutrient from './pages/NutrientManagement/Nutrient';
import Networking from './pages/Networking/Networking'
import Support from './pages/Support/FundSupport'
import Climate from './pages/ClimateDetection/Climate'
import Cropselection from './pages/Cropselection/Cropselection'
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Policy from './pages/Policy/Policy';
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RouteLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/Cropselection",
          element:<Cropselection/>
        },
        {
          path:"/Irrigation",
          element:<Irrigation/>
        },
        {
          path:"/PestManagement",
          element:<Pest/>
        },
        {
          path:"/Nutrient",
          element:<Nutrient/>
        },
        {
          path:"/Networking",
          element:<Networking/>
        },
        {
          path:"/Support",
          element:<Support/>
        },
        {
          path:"/ClimateDetection",
          element:<Climate/>
        },
        {
          path:"/Aboutus",
          element:<Aboutus/>
        },
        {
          path:"/ContactUs",
          element:<Contactus/>
        },
        {
          path:"/Policy",
          element:<Policy/>
        },
      ]
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}
export default App;
