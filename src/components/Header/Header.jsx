import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Header.module.css';

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <img className={css.logoImg} src="/images/logo.png" alt="logo" />
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>

          <NavLink to="/catalog" end className={buildLinkClass}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
