import { Link, useLocation } from 'react-router-dom';
import css from './CamperItem.module.css';
import Icon from '../Icon/Icon';
import CamperEquipment from '../CamperEquipment/CamperEquipment';

const CamperItem = ({ camper }) => {
  const location = useLocation();

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
              <Icon className={css.favoritesIcon} iconName="heart" width={24} height={24} />
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
