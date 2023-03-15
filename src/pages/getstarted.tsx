import type { ReactElement } from 'react';
import React from 'react';

import { Box, Container, Grid, Typography, styled, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import BaseLayout from '@/layouts/BaseLayout';
import NavBar from '@/components/NavBar';
import Xkite from '@/components/getstarted/xkite';
import Core from '@/components/getstarted/core';
import CLI from '@/components/getstarted/cli';
import Contributions from '@/components/getstarted/contribution';
import makeStyles from '@mui/styles/makeStyles';

const ComingSoon = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(55)};
`
);

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    marginBottom: 20,
  },
});

const Tabs = styled(TabList)(
  ({ theme }) => `
    width: 100;
    display: flex;
    align-items: space-between;
    justify-content: space-between;
    @media (max-width: 600px) {
      .MuiTab-root {
        font-size: small;
      }
    }
    @media (min-width: 601px) and (max-width: 960px) {
      .MuiTab-root {
        font-size: medium;
      }
    }
    @media (min-width: 961px) {
      .MuiTab-root {
        font-size: large;
      }
    }
`
);
export default function GetStarted() {
  const [value, setValue] = React.useState('xkite');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <NavBar />
      {/* content goes inside this container */}
      <Container maxWidth='lg' sx={{ textAlign: 'center', mt: '18em' }}>
        <Grid
          spacing={{ xs: 1, md: 10 }}
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          container
        >
          <ComingSoon sx={{ mb: 2 }} variant='h1'>
            Get Started
          </ComingSoon>
          <Grid item xs={12}>
            <Box className={classes.root}></Box>
            </Grid>
            <Grid item xs={12}>
            <Box sx={{ width: '100%' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs onChange={handleChange} sx={{ width: '100%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <Tab
                      label='xkite'
                      value='xkite'
                      sx={{
                        width: '25%',
                        flexWrap: 'wrap',
                        textTransform: 'lowercase',
                        fontSize: 'medium',
                      }}
                    />
                    <Tab
                      label='xkite-core'
                      value='core'
                      sx={{
                        width: '25%',
                        flexWrap: 'wrap',
                        textTransform: 'lowercase',
                        fontSize: 'medium',
                      }}
                    />
                    <Tab
                      label='xkite-cli'
                      value='cli'
                      sx={{
                        width: '20%',
                        flexWrap: 'wrap',
                        textTransform: 'lowercase',
                        fontSize: 'small',
                      }}
                    />
                    <Tab
                      label='Contributions'
                      value='contributions'
                      sx={{ width: '35%', flexWrap: 'wrap', fontSize: 'small' }}
                    />
                  </Tabs>
                </Box>
                <Xkite />
                <Core />
                <CLI />
                <Contributions />
              </TabContext>
            </Box>
            </Grid>
        </Grid>
        <Container maxWidth='lg' sx={{ mt: 8 }}></Container>
      </Container>
    </>
  );
}

GetStarted.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
