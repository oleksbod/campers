import Icon from '../../Icon/Icon';
import css from './CamperHeaderReview.module.css';

const CamperHeaderReview = ({ camper }) => {
  return (
    <div className={css.subTitle}>
      <Icon iconName="star" width={16} height={16} color="var(--color-yellow)" />

      <span className={css.rating}>
        {camper.rating}({camper.reviews.length} Reviews)
      </span>

      <Icon iconName="map" width={16} height={16} />

      {camper.location}
    </div>
  );
};

export default CamperHeaderReview;
