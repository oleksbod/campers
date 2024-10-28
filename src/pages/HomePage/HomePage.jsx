import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={css.main}>
      <h1 className={css.title}>Campers of your dreams</h1>

      <h2 className={css.description}>You can find everything you want in our catalog</h2>

      <NavLink className="button" to="/catalog">
        View Now
      </NavLink>
    </main>
  );
};

export default HomePage;
