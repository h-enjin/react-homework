import { Button, Grid, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const UsersPage = () => {
  const [data, setData] = useState(null);

  const getData = () => {
    fetch('http://localhost:3333/users')
      .then(res => res.json())
      .then(result => {
        setData(result);
      });
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Button fullWidth variant="outlined" color="primary"
          onClick={() => getData()}
        >
          ↓押すと下に取得データ表示↓
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Paper elevation={3}>
          <Typography align="center">
            {
              Boolean(data) ?
                data.username
                :
                "未取得"
            }
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default UsersPage;