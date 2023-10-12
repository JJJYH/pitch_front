import { useState } from "react";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { AppBar, Divider, Tab, Tabs, Typography } from '@mui/material';
import TabPanel from "@mui/lab/TabPanel";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ApplicantDetailPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);



  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 1200,
            height: 200,
          },
        }}
      >
      <Grid container spacing={5}>
        <Grid item xs={2}>
        <Avatar 
          alt='profile'
          src='images/test2.png'
          sx={{ width: '100%', height: '100%' }}/>
        </Grid>
        <Grid item xs={3} container direction='column' spacing={1}>
        <Grid item xs>
          <Typography variant="h6">
            이소영
          </Typography>
        </Grid>
        <Grid item xs>
        <Typography variant="subtitle1">
            1992.11.22
          </Typography>
        </Grid>
        <Grid item xs>
        <Typography variant="h6">
            이소영
          </Typography>
        </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
          <AppBar position='static' style={{ background : 'transparent'}}>
            <Tabs value={tabValue} onChange={handleSetTabValue}>
              <Tab 
                label="종합평가" {...a11yProps(0)}/>
              <Tab 
              label="입사지원서" {...a11yProps(0)}/>
              <Tab 
                label="인적성검사" {...a11yProps(0)}/>
            </Tabs>
          </AppBar>
        </Grid>
      </Grid>
      </Box>
      <Box>
      <CustomTabPanel value={tabValue} index={0}>
        종합평가
        <Divider variant="middle" />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={1}>
        입사지원서
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={2}>
        인적성검사
      </CustomTabPanel>
      </Box>
    </Box>
  );
}

export default ApplicantDetailPage;