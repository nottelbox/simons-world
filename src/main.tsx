import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import App from './App';
import Shop from './routes/Shop';
import Blog from './routes/Blog';
import './sass/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}>
            <Route path='shop' element={<Shop />} />
            <Route path='blog' element={<Blog />} />
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
