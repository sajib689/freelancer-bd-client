import ReactDOM from 'react-dom';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes';
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <AuthProvider>
   <RouterProvider router={router}>
    <Toaster/>
   </RouterProvider>
   </AuthProvider>
  </>,
)
