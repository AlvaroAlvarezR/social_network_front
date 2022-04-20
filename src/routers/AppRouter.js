import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';

import { FeedRoutes } from './FeedRoutes';



export const AppRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                
                <Route path="/login" element={<LoginScreen />} />

                <Route path="/*" element={ <FeedRoutes />  } />

            </Routes>
        </BrowserRouter>
    )
}