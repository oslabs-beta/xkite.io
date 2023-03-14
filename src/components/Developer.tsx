import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const DevWrapper = styled(Box)(
  ({ theme }) => `
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    font-size: ${theme.typography.pxToRem(11)};
    margin: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
`
);

const Pics = styled(Image)(
  ({ theme }) => `
    border-radius: 50%;
    box-shadow: 0 1px 8px black
`
);

export default function Developer(props: {
  name: string;
  img: string;
  github: string;
  linkedin?: string;
}) {
  return (
    <>
      <DevWrapper>
        <Pics
          src={props.img}
          alt={`image of ${props.name}`}
          width={180}
          height={180}
          // className={classes.profilePic}
        />
        <Typography variant='h3'>{props.name}</Typography>
        <Typography variant='h6'>Software Engineer</Typography>
        <Container>
          <Button
            href={`http://www.github.com/${props.github}`}
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/navbar/github.svg'
              alt='github'
              width={32}
              height={32}
            ></Image>
          </Button>
          <Button
            href={`http://www.linkedin.com/in/${props.linkedin}`}
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/navbar/linkedin.svg'
              alt='linkedin'
              width={32}
              height={32}
            ></Image>
          </Button>
        </Container>
      </DevWrapper>
    </>
  );
}
