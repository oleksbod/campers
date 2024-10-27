import { Fragment } from 'react';
import css from './VehicleType.module.css';
import { Divider } from '@mui/material';
import {
  StyledToggleButton,
  StyledToggleButtonGroup
} from '../../StyledMuiComponents/ToggleButton/StyledToggleButton';
import VehicleTypeEnum from '../../../models/enums/VehicleType.enum';
import Icon from '../../Icon/Icon';

const VehicleType = ({ selectedVehicleType, onChange }) => {
  const handleVehicleType = (e, newType) => {
    onChange(newType);
  };

  return (
    <Fragment>
      <h3 className={css.vehicleTitle}>Vehicle type</h3>
      <Divider sx={{ backgroundColor: 'var(--color-gray-light)' }} />
      <StyledToggleButtonGroup
        className={css.vehicleGroup}
        value={selectedVehicleType}
        exclusive
        onChange={handleVehicleType}
        aria-label="vehicle type">
        {Object.entries(VehicleTypeEnum).map(([key, value]) => (
          <StyledToggleButton key={key} value={value} aria-label={value}>
            <Icon iconName={value.replace(' ', '-').toLowerCase()} width={32} height={32} />
            {value}
          </StyledToggleButton>
        ))}
      </StyledToggleButtonGroup>
    </Fragment>
  );
};

export default VehicleType;
