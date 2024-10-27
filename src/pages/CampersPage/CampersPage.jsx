import Filters from '../../components/Filters/Filters';
import CamperList from '../../components/CamperList/CamperList';
import css from './CampersPage.module.css';

const CampersPage = () => {
  return (
    <div className={css.container}>
      <Filters />

      <CamperList />
    </div>
  );
};

export default CampersPage;
