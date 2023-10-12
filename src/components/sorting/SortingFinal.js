import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import MenuBtn from './MenuBtn';
import { Typography } from '@mui/material';

function RenderAvatar(params) {
  return (
    <Avatar
        alt='profile'
        src='images/test2.png'
        sx={{ width: 50, height: 50 }}
      />
  );
}

function RenderEval(score) {
  let isQualified = score >= 60 ? true : false;

  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <Typography variant='h4' 
        style={{ marginRight: '15px' }}
      >{score}</Typography>
      <Chip 
        label={ isQualified ? "적합인재" : "부적합" } 
        color={ isQualified ? "success" : "error" }
      />
    </div>
  );
}


const columns = [
  {
    field: 'avatar',
    headerName: ' ',
    sortable: false,
    width: 90,
    renderCell: RenderAvatar
  },
  {
    field: 'fullName',
    headerName: '이름',
    width: 160,
    valueGetter: (params) =>
      `${params.row.lastName || ''} ${params.row.firstName || ''}`,
  },
  {
    field: 'birth',
    headerName: '생년월일',
    width: 160,
    valueGetter: (params) =>
      `${params.row.birth || ''}`,
  },
  {
    field: 'experience',
    headerName: '경력구분',
    width: 90
  },
  {
    field: 'eval',
    headerName: '평가',
    sortable: false,
    width: 200,
    renderCell: (params) => 
      RenderEval(params.row.score)
  },
  {
    field: 'status',
    headerName: '상태',
    width: 120
  },
  {
    field: 'tools',
    headerName: ' ',
    sortable: false,
    width: 60,
    renderCell: MenuBtn
  },
];

const rows = [
  { id: 1, lastName: '이', firstName: '소영', birth: '1992/11/22',  experience: '신입', score: 77, status : '서류합격' },
  { id: 2, lastName: '최', firstName: '소영', birth: '1992/11/24',  experience: '경력', score: 45, status : '평가대기' },
  { id: 3, lastName: '박', firstName: '소영', birth: '1992/11/23',  experience: '신입', score: 90, status : '서류합격' },
];

export default function Sorting1st() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px'}}>
        <Button variant='contained' size='medium' style={{marginRight: '5px'}}>
          필터링
        </Button>
        <Button variant='outlined' size='medium'>
          합격등록
        </Button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          // pagination: {
          //   paginationModel: { page: 0, pageSize: 5 },
          // },
        }}
        hideFooter
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}