import { useRef } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from '@mui/material';

import Image from 'next/image';
import Link from '@/components/Link';
import NavBar from '@/components/NavBar';

import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

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

export default function Demo() {
  return (
    <>
      <NavBar />
      {/* content goes inside this container */}
      <Container maxWidth='lg' sx={{ textAlign: 'center', mt: 30 }}>
        <Grid
          paddingTop='2rem'
          spacing={{ xs: 6, md: 10 }}
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          container
        >
          <Box>
            <Logo alt='logo' height={400} width={400} src='/bigLogo.png' />
          </Box>
          <ComingSoon sx={{ mb: 2 }} variant='h1'>
            &apos;Demo&apos; Page <br /> Coming Soon!
          </ComingSoon>
          {/* this container is to add some spacing below */}
        </Grid>
        <Container maxWidth='lg' sx={{ mt: 8 }}></Container>
      </Container>
    </>
  );
}

Demo.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
