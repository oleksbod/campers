import css from './CamperList.module.css';
import CamperItem from '../CamperItem/CamperItem';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementPage,
  selectCampers,
  selectItemsPerLoad,
  selectLoading,
  selectPage,
  selectTotal
} from '../../redux/campersSlice';
import { fetchCampers } from '../../redux/campersOps';
import { CircularProgress } from '@mui/material';

const CamperList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);
  const itemsPerLoad = useSelector(selectItemsPerLoad);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch, page]);

  const loadMore = () => {
    if (page * itemsPerLoad < total) {
      dispatch(incrementPage());
    }
  };

  return (
    <div className={css.container}>
      {campers.length === 0 && !loading ? (
        <h2 className={css.noResults}>No campers found with the selected filters.</h2>
      ) : (
        <ul>
          {campers.map((camper) => (
            <CamperItem key={camper.id} camper={camper} />
          ))}
        </ul>
      )}

      {loading && (
        <div className={css.loaderContainer}>
          <CircularProgress size="3rem" sx={{ color: 'var(--color-red-dark)' }} />
        </div>
      )}

      {total > page * itemsPerLoad && (
        <button className={clsx('button', 'white-btn', css.button)} onClick={() => loadMore()}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CamperList;
