import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  width: '100%',
}));

interface GridSize {
  xs: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface ColumnsGridProps {
  children: React.ReactNode[];
  gridSizes: GridSize[];
  space: number;
}

export const ColumnsGrid: React.FC<ColumnsGridProps> = ({ children, gridSizes,space }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={space} alignItems="stretch">
        {children.map((child, index) => (
          <Grid item key={index} xs={gridSizes[index]?.xs} sm={gridSizes[index]?.sm} md={gridSizes[index]?.md} lg={gridSizes[index]?.lg} xl={gridSizes[index]?.xl}>
            <Item>
              {child}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
