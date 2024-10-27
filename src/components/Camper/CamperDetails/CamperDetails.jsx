import { useSelector } from 'react-redux';
import css from './CamperDetails.module.css';
import { selectCamper } from '../../../redux/campersSlice';
import CamperHeaderReview from '../../CamperItem/CamperHeaderReview/CamperHeaderReview';
import { Fragment } from 'react';
import CamperTabs from '../CamperTabs/CamperTabs';
import CamperContactForm from '../CamperContactForm/CamperContactForm';

const CamperDetails = () => {
  const camper = useSelector(selectCamper);

  return (
    <Fragment>
      <header className={css.header}>
        <h2>{camper.name}</h2>
      </header>

      <section className={css.detailSection}>
        <CamperHeaderReview camper={camper} />

        <h2 className={css.price}>&euro; {camper.price}</h2>

        <div className={css.gallery}>
          {camper.gallery.map((item, index) => (
            <div key={`img-${index + 1}`} className={css.imgWrapper}>
              <img className={css.img} src={item.thumb} alt={`${camper.name} ${index + 1} image`} />
            </div>
          ))}
        </div>

        <div className={css.description}>{camper.description}</div>
      </section>

      <section className={css.actionsSection}>
        <div className={css.actions}>
          <CamperTabs />
        </div>

        <div className={css.contactForm}>
          <CamperContactForm />
        </div>
      </section>
    </Fragment>
  );
};

export default CamperDetails;
