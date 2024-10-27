import { useSelector } from 'react-redux';
import css from './CamperReviews.module.css';
import { selectCamper } from '../../../redux/campersSlice';
import { Avatar } from '@mui/material';
import ReviewRating from '../../Helpers/Rating';

const CamperReviews = () => {
  const camper = useSelector(selectCamper);

  return (
    <div className={css.container}>
      {camper.reviews.map((item, index) => (
        <div key={`rev-${index + 1}`} className={css.reviewItem}>
          <header className={css.header}>
            <Avatar
              sx={{
                bgcolor: 'var(--color-gray-lighter)',
                width: 60,
                height: 60,
                color: 'var(--color-red-dark)',
                fontWeight: 'var(--weight-semibold)'
              }}>
              {item.reviewer_name[0]}
            </Avatar>
            <div className={css.nameContainer}>
              {item.reviewer_name}
              <ReviewRating rating={item.reviewer_rating} />
            </div>
          </header>
          <main className={css.main}>{item.comment}</main>
        </div>
      ))}
    </div>
  );
};

export default CamperReviews;
