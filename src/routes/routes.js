import { createBrowserRouter } from 'react-router-dom'
import Faq from '../components/Faq/Faq'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import SignUP from '../components/SignUp/SignUp'
import Table2 from '../components/Table/Table2'
import Main from '../layout/main'
import Table from './../components/Table/Table';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/faq',
            element: <Faq></Faq>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUP></SignUP>
        },
        {
            path: '/table',
            element: <Table></Table>
        },
     
        {
            path: '/table2',
            element: <Table2></Table2>
        }
     

    ],
  },
])

export default router