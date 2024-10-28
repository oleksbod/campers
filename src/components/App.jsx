import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Header from './Header/Header';
import { useSelector } from 'react-redux';
import { selectError } from '../redux/campersSlice';
import Notifications from './Helpers/Notifications';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CampersPage = lazy(() => import('../pages/CampersPage/CampersPage'));
const CamperDetailsPage = lazy(() => import('../pages/CamperDetailsPage/CamperDetailsPage'));

function App() {
  const error = useSelector(selectError);

  return (
    <div className="main">
      <Header />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CampersPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {error && <Notifications message={error} severity="error" />}
    </div>
  );
}

export default App;
