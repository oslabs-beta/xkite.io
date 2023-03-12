import { Box, Card, Button, Container, styled } from '@mui/material';
import Logo from '@/components/LogoSign';
import Image from 'next/image';

const NavBarWrapper = styled(Card)(
  ({ theme }) => `
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(8)};
  border: 1px solid ${theme.palette.divider};
  box-shadow: 0 1px 5px black;
  z-index: 10;
`
);

const SocialsWrapper = styled(Box)(
  ({ theme }) => `
  width: 15%;
  display: flex;
  justify-content: space-between;
  border: none;
  box-shadow: none;
`
);

export default function NavBar() {
  return (
    <NavBarWrapper>
      <Container maxWidth='lg'>
        <Box display='flex' alignItems='center'>
          {/* <Logo /> */}
          <Image
            src='/navbar/logo.png'
            height={40}
            width={50}
            alt='logo'
          ></Image>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            flex={1}
          >
            <Box>
              <Button href='/getstarted'>Get Started</Button>
              <Button href=''>Demo</Button>
              <Button href=''>Meet the Team</Button>
            </Box>
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
                href='https://www.npmjs.com/package/xkiteio'
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
                href='https://linkedin.com/company/xkiteio'
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
          </Box>
        </Box>
      </Container>
    </NavBarWrapper>
  );
}
