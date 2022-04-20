import { Routes, Route } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';

import { ProfileScreen } from '../components/profile/ProfileScreen';
import { FeedScreen } from '../components/feed/FeedScreen';


export const FeedRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="profile" element={<ProfileScreen />} />
          <Route path="feed" element={<FeedScreen />} />
        </Routes>
      </div>
    </>
  )
}