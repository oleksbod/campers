import { Link, useLocation } from 'react-router-dom';
import css from './CamperItem.module.css';
import Icon from '../Icon/Icon';
import CamperEquipment from '../CamperEquipment/CamperEquipment';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite, selectMyFavorites } from '../../redux/campersSlice';
import { IconButton } from '@mui/material';

const CamperItem = ({ camper }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const myFavorites = useSelector(selectMyFavorites);

  const isFavorite = myFavorites.includes(camper.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper.id));
    } else {
      dispatch(addFavorite(camper.id));
    }
  };

  return (
    <li className={css.card}>
      <div className={css.imgWrapper}>
        <img className={css.img} src={camper.gallery[0].thumb} alt={`${camper.name} image`} />
      </div>
      <div className={css.cardDetails}>
        <header>
          <h2 className={css.title}>
            {camper.name}
            <div className={css.priceContainer}>
              <span> &euro; {camper.price}</span>
              <IconButton
                aria-label="togle favorites"
                className={css.favoritesIcon}
                onClick={() => toggleFavorite()}>
                <Icon
                  color={isFavorite ? 'var(--color-red-dark)' : 'currentColor'}
                  iconName="heart"
                  width={24}
                  height={24}
                />
              </IconButton>
            </div>
          </h2>
          <div className={css.subTitle}>
            <Icon iconName="star" width={16} height={16} color="var(--color-yellow)" />
            <span className={css.rating}>
              {camper.rating}({camper.reviews.length} Reviews)
            </span>
            <Icon iconName="map" width={16} height={16} />
            {camper.location}
          </div>
        </header>
        <main>
          <div className={css.description}>{camper.description}</div>
          <CamperEquipment camper={camper} />
        </main>
        <footer className={css.footer}>
          <Link className="button" to={`/catalog/${camper.id}`} state={location}>
            Show more
          </Link>
        </footer>
      </div>
    </li>
  );
};

export default CamperItem;
