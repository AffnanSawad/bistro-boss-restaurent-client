import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// 
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './providers/AuthProviders';

// ten - stack query
import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'


const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    
     {/*AuthProvider  */}
 
    <AuthProviders>

    <QueryClientProvider client={queryClient}>
      
      
       {/* React Helmet Async */}
    <HelmetProvider>
    
    <RouterProvider router={router} />
 
    </HelmetProvider>

  {/* End React Helmet Async */}
   
   
    </QueryClientProvider>

   


    </AuthProviders>




  </StrictMode>,
)
