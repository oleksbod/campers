import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/system';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  marginBottom: '28px',
  rowGap: '8px',
  columnGap: '12px',
  marginTop: '24px'
});

export const StyledToggleButton = styled(ToggleButton)(() => ({
  display: 'flex',
  width: '112px',
  height: '96px',
  color: 'var(--color-main)',
  flexDirection: 'column',
  gap: '8px',
  padding: '0px',
  flexBasis: '112px',
  borderRadius: '12px!important',
  border: '1px solid var(--color-gray-light)!important',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: 'var(--weight-medium)',
  lineHeight: '24px',
  letterSpacing: '-0.08px',
  marginLeft: '0!important',
  textTransform: 'capitalize',

  '&.Mui-selected': {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-main)',
    borderColor: 'var(--color-red-dark)!important'
  },
  '&.Mui-selected:hover': {
    backgroundColor: 'var(--color-white)'
  },
  '&:hover': {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-main)',
    borderColor: 'var(--color-red-dark)!important'
  }
}));
