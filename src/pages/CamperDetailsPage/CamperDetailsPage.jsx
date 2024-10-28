import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCamper, selectLoading } from '../../redux/campersSlice';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campersOps';
import css from './CamperDetailsPage.module.css';
import CamperDetails from '../../components/Camper/CamperDetails/CamperDetails';
import Loader from '../../components/Helpers/Loader';

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <div className={css.container}>
      {loading && (
        <div className="loaderContainer">
          <Loader />
        </div>
      )}

      {!loading && !camper && <h2 className={css.notFound}>Camper details not found</h2>}

      {!loading && camper && <CamperDetails />}
    </div>
  );
};

export default CamperDetailsPage;
