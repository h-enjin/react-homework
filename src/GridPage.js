import React from 'react';
import { Grid, Paper, Typography, Hidden } from '@material-ui/core';

const GridPage = () => {
  return (
    <Grid container spacing={3}>
      
      <Hidden only="xs">
        <Grid item xs={12}>
          <Paper style={{ height: 30, backgroundColor: '#99F' }}>
            <Typography align="center">xsで非表示</Typography>
          </Paper>
        </Grid>
      </Hidden>
      
      <Grid item xs={12} sm={6} lg={3}>
        <Paper style={{ height: 30, backgroundColor: '#F99' }}>
          <Typography align="center">1</Typography>
        </Paper>
      </Grid>
      
      <Grid item xs={12} sm={6} lg={9}>
        <Paper style={{ height: 30, backgroundColor: '#9F9' }}>
          <Typography align="center">2</Typography>
        </Paper>
      </Grid>

    </Grid>
  );
}

export default GridPage;