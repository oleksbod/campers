import { Chip } from '@mui/material';
import css from './CamperEquipment.module.css';
import Icon from '../Icon/Icon';

const CamperEquipment = ({ camper }) => {
  const featureMap = {
    AC: 'AC',
    bathroom: 'Bathroom',
    kitchen: 'Kitchen',
    TV: 'TV',
    radio: 'Radio',
    refrigerator: 'Refrigerator',
    microwave: 'Microwave',
    gas: 'Gas',
    water: 'Water',
    transmission: 'Automatic',
    engine: 'Petrol'
  };

  const chipStyles = {
    padding: '12px 15px',
    height: '48px',
    borderRadius: '100px',
    fontFamily: 'Inter',
    color: 'var(--color-main)',
    gap: '8px',
    '& .MuiChip-icon': {
      margin: '0'
    },
    '& .MuiChip-label': {
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
      padding: '0'
    }
  };

  const filteredFeatures = Object.entries(featureMap).filter(([key]) => {
    if (key === 'engine' && camper[key] !== 'petrol') return false;
    if (key === 'transmission' && camper[key] !== 'automatic') return false;
    return camper[key];
  });

  return (
    <div className={css.container}>
      {filteredFeatures.map(([key, label]) => (
        <Chip
          sx={chipStyles}
          key={key}
          label={label}
          icon={<Icon iconName={label.toLowerCase()} width={16} height={16} />}
          color="var(--color-gray-lighter)"
        />
      ))}
    </div>
  );
};

export default CamperEquipment;
