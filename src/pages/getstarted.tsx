import type { ReactElement } from 'react';
import React from 'react';
import Image from 'next/image';

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
  Tab,
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import BaseLayout from '@/layouts/BaseLayout';
import Link from '@/components/Link';
import NavBar from '@/components/NavBar';
import Xkite from '@/components/getstarted/xkite';
import Core from '@/components/getstarted/core';
import CLI from '@/components/getstarted/cli';

const ComingSoon = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(55)};
`
);

const Logo = styled(Image)(
  ({ theme }) => `
    border-radius: 50%;
    box-shadow: 0 5px 20px black
`
);

const Tabs = styled(TabList)(
  ({ theme }) => `
    width: 100;
    display: flex;
    align-items: space-between;
    justify-content: space-between;
`
);
export default function GetStarted() {
  const [value, setValue] = React.useState('xkite');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <NavBar />
      {/* content goes inside this container */}
      <Container maxWidth='lg' sx={{ textAlign: 'center', mt: 25 }}>
        <Grid
          spacing={{ xs: 6, md: 10 }}
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          container
        >
          <ComingSoon sx={{ mb: 2 }} variant='h1'>
            Get Started
          </ComingSoon>
          <Box sx={{ width: '100%' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs onChange={handleChange}>
                  <Tab label='xkite' value='xkite' sx={{ width: 200 }} />
                  <Tab label='xkite-core' value='core' sx={{ width: 200 }} />
                  <Tab label='xkite-cli' value='cli' sx={{ width: 200 }} />
                </Tabs>
              </Box>
              <Xkite />
              <Core />
              <CLI />
            </TabContext>
          </Box>
        </Grid>
        <Container maxWidth='lg' sx={{ mt: 8 }}></Container>
      </Container>
    </>
  );
}

GetStarted.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
