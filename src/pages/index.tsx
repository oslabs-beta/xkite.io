import type { ReactElement } from 'react';

import { Box, Container, styled } from '@mui/material';
import BaseLayout from 'src/layouts/BaseLayout';
import MainContent from '@/components/MainContent';

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <MainContent />
      <Container maxWidth='lg' sx={{ mt: 8 }}></Container>
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
