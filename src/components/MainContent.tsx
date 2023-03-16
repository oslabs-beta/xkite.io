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
import Team from '@/components/Team';

import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

const TypographyH12 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(55)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(22)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-top: 5rem;
`
);

const TypographyH14 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(45)};
`
);
export default function MainContent() {
  const team = useRef(null);

  return (
    <>
      <NavBar theTeam={team} />
      <Container maxWidth='lg' sx={{ textAlign: 'center' }}>
        <Grid
          paddingTop='2rem'
          spacing={{ xs: 6, md: 10 }}
          justifyContent='center'
          alignItems='center'
          container
        >
          <Grid item md={10} lg={8} mx='auto'>
            <LabelWrapper color='success'>Version 1.0.0</LabelWrapper>
            <Box>
              <Image unoptimized={true} alt='logo' height={600} width={600} src='/xkite-transparent.png' />
            </Box>
            <TypographyH12 sx={{ mb: 2 }} variant='h1'>
              Kafka Integrated Testing Environment
            </TypographyH12>
            <TypographyH2
              sx={{ lineHeight: 1.5, pb: 4 }}
              variant='h4'
              color='text.secondary'
              fontWeight='normal'
            >
              A comprehensive prototyping, testing, and monitoring toolset built
              for Apache Kafka. Use xkite to bootstrap your next project, or
              install our library into an existing project. Built by developers, for
              developers.
            </TypographyH2>
            <Button
              component={Link}
              href='/getstarted'
              size='large'
              variant='contained'
            >
              Get Started
            </Button>
            {/* <Button
              sx={{ ml: 2 }}
              component={Link}
              target='_blank'
              href='https://github.com/oslabs-beta/xkite'
              size='large'
              variant='text'
            >
              Contribute Today
            </Button> */}
          </Grid>
        </Grid>
        <TypographyH14 sx={{ mb: 2, mt: 20 }} variant='h1' ref={team}>
          Meet the Team!
        </TypographyH14>
        <Team />
        <Container maxWidth='lg' sx={{ mt: 8 }}></Container>
      </Container>
    </>
  );
}

MainContent.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
