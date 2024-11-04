import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost, { createPostAction } from './components/Createpost.jsx';
import Postlist , {postLoader} from './components/Postlist.jsx';
const router = createBrowserRouter([
  { 
    path:"/" ,
     element:<App/> , 
     children: [
    { path:"/" , element: <Postlist/> , loader: postLoader },
    { path:"/create-post" , element:<CreatePost/> , action : createPostAction}
  ] ,
},

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
