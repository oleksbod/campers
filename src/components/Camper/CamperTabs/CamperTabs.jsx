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

  return (
    <TabContext value={tab}>
      <TabList
        onChange={handleChange}
        aria-label="tabs"
        TabIndicatorProps={{
          style: { backgroundColor: 'var(--color-red-dark)', height: '4px', borderRadius: '2px' }
        }}
        sx={{
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
        }}>
        <Tab label="Features" value="1" />
        <Tab label="Reviews" value="2" />
      </TabList>

      <Divider
        sx={{ backgroundColor: 'var(--color-gray-light)', marginTop: '-2px', marginBottom: '46px' }}
      />

      <TabPanel value="1" sx={{ maxWidth: '631px', padding: '0' }}>
        <CamperFeatures />
      </TabPanel>

      <TabPanel value="2" sx={{ maxWidth: '631px', padding: '0' }}>
        <CamperReviews />
      </TabPanel>
    </TabContext>
  );
};

export default CamperTabs;
