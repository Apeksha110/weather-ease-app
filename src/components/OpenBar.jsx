import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function ResponsiveAppBar() {
  const logowithname = 'public/assets/logowithname.jpeg';
  const secondLogo =  "data:image/png;base64,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"; 

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <img
                src={logowithname}
                alt="Community Weather App"
                style={{ height: 50, width: 'auto' }}
              />
            </Grid>
            <Grid item>
              <img
                src={secondLogo}
                alt="Second Logo"
                style={{ height: 50, width: 'auto' }}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

"data:image/png;base64,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"