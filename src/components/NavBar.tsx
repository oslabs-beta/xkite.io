import {
  Box,
  Button,
  Card,
  Container,
  styled,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import Dropdown from '@/components/Dropdown';
import React from 'react';

const NavBarWrapper = styled(Card)(
  ({ theme }) => `
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    height: ${theme.spacing(8)};
    border: 1px solid ${theme.palette.divider};
    box-shadow: 0 1px 5px black;
    z-index: 100;
  `
);

const SocialsWrapper = styled(Box)(
  ({ theme }) => `
    width: 10rem;
    display: flex;
    justify-content: space-between;
    border: none;
    box-shadow: none;
    flex-shrink: 0;
  `
);

export default function NavBar({ theTeam }: any) {
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down('sm')
  );

  const handleScrollToTeam = () => {
    theTeam.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavBarWrapper>
      <Container maxWidth='lg'>
        <Box display='flex' alignItems='center'>
          <Image src='/navbar/logo.png' height={40} width={50} alt='logo' />
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            flex={1}
          >
            {isSmallScreen ? (
              <>
                <Box />
                <Box />
                <Dropdown theTeam={theTeam} />
              </>
            ) : (
              <>
                <Box>
                  {theTeam ? (
                    <>
                      <Button href='/getstarted'>Get Started</Button>
                      <Button href='/demo'>Demo</Button>
                      <Button onClick={handleScrollToTeam}>
                        Meet the Team
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button href='/'>Home</Button>
                      <Button href='/getstarted'>Get Started</Button>
                      <Button href='/demo'>Demo</Button>
                    </>
                  )}
                </Box>
                <Box />
                <Box />
                <SocialsWrapper>
                  <a
                    href='https://github.com/oslabs-beta/xkite'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Image
                      src='/navbar/github.svg'
                      alt='github'
                      height={40}
                      width={40}
                    ></Image>
                  </a>
                  <a
                    href='https://www.npmjs.com/~xkite'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Image
                      src='/navbar/npm.svg'
                      alt='npm'
                      height={40}
                      width={40}
                    ></Image>
                  </a>
                  <a
                    href='https://linkedin.com/company/xkite-io'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Image
                      src='/navbar/linkedin.svg'
                      alt='linkedin'
                      height={40}
                      width={40}
                    ></Image>
                  </a>
                </SocialsWrapper>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </NavBarWrapper>
  );
}
