import Location from './Location/Location';
import css from './Filters.module.css';
import Equipment from './Equipment/Equipment';
import VehicleType from './VehicleType/VehicleType';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useState } from 'react';
import {
  changeFormFilter,
  changeLocationFilter,
  changeEquipmentsFilter,
  selectLocationFilter,
  selectEquipmentFilter,
  selectFormFilter
} from '../../redux/filtersSlice';
import { resetCampers } from '../../redux/campersSlice';
import { fetchCampers } from '../../redux/campersOps';

const Filters = () => {
  const dispatch = useDispatch();
  const [localLocation, setLocalLocation] = useState(useSelector(selectLocationFilter));
  const [localEquipments, setLocalEquipments] = useState(useSelector(selectEquipmentFilter));
  const [localVehicleType, setLocalVehicleType] = useState(useSelector(selectFormFilter));
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleSearch = () => {
    dispatch(changeLocationFilter(localLocation));
    dispatch(changeEquipmentsFilter(localEquipments));
    dispatch(changeFormFilter(localVehicleType));

    dispatch(resetCampers());
    dispatch(fetchCampers());

    toggleFilters();
  };

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  return (
    <Fragment>
      <div className={clsx(css.filtersContainer, { [css.openFilters]: isFiltersOpen })}>
        <Location value={localLocation} onChange={setLocalLocation} />

        <label className={css.filtersLabel}>Filters</label>

        <Equipment selectedEquipments={localEquipments} onChange={setLocalEquipments} />

        <VehicleType selectedVehicleType={localVehicleType} onChange={setLocalVehicleType} />

        <footer className={css.footer}>
          <button
            className={clsx('button', 'white-btn', css.button, css.closeBtn)}
            onClick={() => toggleFilters()}>
            Close
          </button>
          <button className={clsx('button', css.button)} onClick={() => handleSearch()}>
            Search
          </button>
        </footer>
      </div>
      <button className={clsx('button', css.filtersBtn)} onClick={() => toggleFilters()}>
        {isFiltersOpen ? 'Close filters' : 'Open filters'}
      </button>
    </Fragment>
  );
};

export default Filters;
