import Location from './Location/Location';
import css from './Filters.module.css';
import Equipment from './Equipment/Equipment';
import VehicleType from './VehicleType/VehicleType';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  changeFormFilter,
  changeLocationFilter,
  changeEquipmentsFilter
} from '../../redux/filtersSlice';
import { resetCampers } from '../../redux/campersSlice';
import { fetchCampers } from '../../redux/campersOps';

const Filters = () => {
  const dispatch = useDispatch();
  const [localLocation, setLocalLocation] = useState('');
  const [localEquipments, setLocalEquipments] = useState([]);
  const [localVehicleType, setLocalVehicleType] = useState('');

  const handleSearch = () => {
    dispatch(changeLocationFilter(localLocation));
    dispatch(changeEquipmentsFilter(localEquipments));
    dispatch(changeFormFilter(localVehicleType));

    dispatch(resetCampers());

    dispatch(fetchCampers());
  };

  return (
    <div className={css.filtersContainer}>
      <Location value={localLocation} onChange={setLocalLocation} />

      <label className={css.filtersLabel}>Filters</label>

      <Equipment selectedEquipments={localEquipments} onChange={setLocalEquipments} />

      <VehicleType selectedVehicleType={localVehicleType} onChange={setLocalVehicleType} />

      <button className={clsx('button', css.button)} onClick={() => handleSearch()}>
        Search
      </button>
    </div>
  );
};

export default Filters;
