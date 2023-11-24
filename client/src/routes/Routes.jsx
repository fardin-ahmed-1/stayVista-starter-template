import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../components/RoomDetails/RoomDetails'
import PrivateRoute from '../components/Shared/PrivateRoute'
import {  getRoom } from '../apis/rooms'
import DashboardLayout from '../layouts/DashboardLayout'
import AddRoom from '../pages/DashboardPages/Host/AddRoom'
import MyListing from '../pages/DashboardPages/Host/MyListing'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails/></PrivateRoute>,
        loader:({params})=>getRoom(params.id)
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path:'/Dashboard',
    element:<DashboardLayout/>,
    children:[
    {
      path:'add-room',
      element:<AddRoom> </AddRoom>
    },
    {
      path:'my-listing',
      element:<MyListing> </MyListing>
    },
    ]
  }
])
