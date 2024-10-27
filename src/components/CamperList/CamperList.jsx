import css from './CamperList.module.css';
import CamperItem from '../CamperItem/CamperItem';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementPage,
  selectCampers,
  selectLoading,
  selectPage,
  selectTotal
} from '../../redux/campersSlice';
import { fetchCampers, itemsPerLoad } from '../../redux/campersOps';

const CamperList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);

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

      {loading && <p>Loading...</p>}

      {total > page * itemsPerLoad && (
        <button className={clsx('button', 'white-btn', css.button)} onClick={() => loadMore()}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CamperList;
