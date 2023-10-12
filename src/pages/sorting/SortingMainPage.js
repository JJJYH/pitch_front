import * as React from 'react';

/* mui components */
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

/* custom components */
import Sorting1st from '../../components/sorting/Sorting1st';
import Sorting2nd from '../../components/sorting/Sorting2nd';
import SortingFinal from '../../components/sorting/SortingFinal';
import Sorted from '../../components/sorting/Sorted';
import PostStatuses from '../../components/sorting/PostStatuses';


/* 
 *
 * 지원자 선별 페이지 
 * url : /sorting
 * 
*/
function SortingMainPage() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          zIndex: 'tooltip',
          marginTop: '4%',
          position: 'relative'
        }}>
          <PostStatuses />
      </Box>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="sorting results tab">
              <Tab label="1차" value="1" />
              <Tab label="2차" value="2" />
              <Tab label="최종" value="3" />
              <Tab label="종료" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1"><Sorting1st /></TabPanel>
          <TabPanel value="2"><Sorting2nd /></TabPanel>
          <TabPanel value="3"><SortingFinal /></TabPanel>
          <TabPanel value="4"><Sorted /></TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default SortingMainPage;
