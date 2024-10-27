import { useSelector } from 'react-redux';
import css from './CamperFeatures.module.css';
import { selectCamper } from '../../../redux/campersSlice';
import CamperEquipment from '../../CamperEquipment/CamperEquipment';
import { Divider } from '@mui/material';

const CamperFeatures = () => {
  const camper = useSelector(selectCamper);

  const formatMeasurement = (valueWithUnit) => {
    const match = valueWithUnit.match(/^(\d+(\.\d+)?)([a-zA-Z])$/);

    if (match) {
      const value = match[1];
      const unit = match[3];
      return `${value} ${unit}`;
    }

    return valueWithUnit;
  };

  return (
    <div className={css.container}>
      <div className={css.equipments}>
        <CamperEquipment camper={camper} />
      </div>

      <h3>Vehicle details</h3>

      <Divider sx={{ backgroundColor: 'var(--color-gray-light)', margin: '24px 0' }} />

      <div className={css.detailItem}>
        <span>Form</span>
        <span className={css.upperCase}>{camper.form}</span>
      </div>

      <div className={css.detailItem}>
        <span>Length</span>
        {formatMeasurement(camper.length)}
      </div>

      <div className={css.detailItem}>
        <span>Width</span>
        {formatMeasurement(camper.width)}
      </div>

      <div className={css.detailItem}>
        <span>Height</span>
        {formatMeasurement(camper.height)}
      </div>

      <div className={css.detailItem}>
        <span>Tank</span>
        {formatMeasurement(camper.tank)}
      </div>

      <div className={css.detailItem}>
        <span>Consumption</span>
        {camper.consumption}
      </div>
    </div>
  );
};

export default CamperFeatures;
