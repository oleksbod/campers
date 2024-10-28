import { Fragment } from 'react';
import css from './Equipment.module.css';
import EquipmentType from '../../../models/enums/EquipmentType.enum';
import { Divider } from '@mui/material';
import {
  StyledToggleButton,
  StyledToggleButtonGroup
} from '../../StyledMuiComponents/ToggleButton/StyledToggleButton';
import Icon from '../../Icon/Icon';

const Equipment = ({ selectedEquipments, onChange }) => {
  const handleEquipments = (e, newEquipments) => {
    onChange(newEquipments);
  };

  return (
    <Fragment>
      <h3 className={css.equipmentTitle}>Vehicle equipment</h3>

      <Divider sx={{ backgroundColor: 'var(--color-gray-light)' }} />

      <StyledToggleButtonGroup
        value={selectedEquipments}
        onChange={handleEquipments}
        aria-label="equipment types">
        {Object.entries(EquipmentType).map(([key, value]) => (
          <StyledToggleButton key={key} value={value} aria-label={value}>
            <Icon iconName={key.toLowerCase()} width={32} height={32} />
            {value}
          </StyledToggleButton>
        ))}
      </StyledToggleButtonGroup>
    </Fragment>
  );
};

export default Equipment;
