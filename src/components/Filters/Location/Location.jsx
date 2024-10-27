import { Fragment } from 'react';
import css from './Location.module.css';
import clsx from 'clsx';
import Icon from '../../Icon/Icon';

const Location = ({ value, onChange }) => {
  return (
    <Fragment>
      <label className={css.locationLabel}>Location</label>
      <div className={clsx('inputContainer', css.inputContainer)}>
        <Icon
          className={clsx('inputIcon', { blackIcon: value })}
          iconName="map"
          width={20}
          height={20}
        />

        <input placeholder="City" value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
    </Fragment>
  );
};

export default Location;
