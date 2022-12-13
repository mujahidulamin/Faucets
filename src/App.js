import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <RouterProvider router={router} ></RouterProvider> 
}

export default App;
