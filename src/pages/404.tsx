import {
  Box,
  Card,
  Typography,
  Container,
  Button,
  styled,
} from '@mui/material';
import Head from 'next/head';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';
import Image from 'next/image';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
);

export default function Status404() {
  return (
    <>
      <Head>
        <title>Status - 404</title>
      </Head>
      <MainContent sx={{ mt: 5 }}>
        <Container maxWidth='md'>
          <Box textAlign='center'>
            <Image alt='404' height={180} width={180} src='/404.svg' />
            <Typography variant='h2' sx={{ my: 2 }}>
              The page you were looking for doesn&apos;t exist.
            </Typography>
          </Box>
          <Container maxWidth='sm'>
            <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
              <Button href='/' variant='outlined'>
                Go to homepage
              </Button>
            </Card>
          </Container>
        </Container>
      </MainContent>
    </>
  );
}

Status404.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
