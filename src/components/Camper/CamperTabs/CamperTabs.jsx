import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Divider, Tab } from '@mui/material';
import { useState } from 'react';
import CamperFeatures from '../CamperFeatures/CamperFeatures';
import CamperReviews from '../CamperReviews/CamperReviews';

const CamperTabs = () => {
  const [tab, setTab] = useState('1');

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const tabListStyles = {
    '& .MuiTab-root': {
      fontSize: '20px',
      fontWeight: '600',
      color: 'var(--color-main)',
      lineHeight: '24px',
      textTransform: 'none',
      padding: '0',
      paddingBottom: '24px',
      marginRight: '40px',
      fontFamily: 'Inter',
      '&.Mui-selected': {
        color: 'var(--color-main)'
      }
    }
  };

  const dividerStyles = {
    backgroundColor: 'var(--color-gray-light)',
    marginTop: '-2px',
    marginBottom: '46px'
  };

  const tabPanelStyles = { maxWidth: '631px', padding: '0' };

  const indicatorStyle = {
    backgroundColor: 'var(--color-red-dark)',
    height: '4px',
    borderRadius: '2px'
  };

  return (
    <TabContext value={tab}>
      <TabList
        onChange={handleChange}
        aria-label="tabs"
        TabIndicatorProps={{
          style: indicatorStyle
        }}
        sx={tabListStyles}>
        <Tab label="Features" value="1" />

        <Tab label="Reviews" value="2" />
      </TabList>

      <Divider sx={dividerStyles} />

      <TabPanel value="1" sx={tabPanelStyles}>
        <CamperFeatures />
      </TabPanel>

      <TabPanel value="2" sx={tabPanelStyles}>
        <CamperReviews />
      </TabPanel>
    </TabContext>
  );
};

export default CamperTabs;
