import * as React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';

export default function SimpleListMenu({ theTeam }: any): any {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e: any) => {
    console.log('theTeam', theTeam);
    if (e.target.outerText === 'Meet the Team') {
      window.parent.scrollTo({
        top: 1150,
        behavior: 'smooth',
      });
    }

    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClickListItem}>
        <MenuIcon />
      </Button>
      <Menu
        id='lock-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {theTeam ? (
          <div>
            <Link href='/getstarted'>
              <MenuItem onClick={handleClose}>Get Started</MenuItem>
            </Link>
            {/* <Link href='/demo'>
              <MenuItem onClick={handleClose}>Demo</MenuItem>
            </Link> */}
            <div>
              <MenuItem onClick={handleClose}>Meet the Team</MenuItem>
            </div>
          </div>
        ) : (
          <div>
            <Link href='/'>
              <MenuItem onClick={handleClose}>Home</MenuItem>
            </Link>
            <Link href='/getstarted'>
              <MenuItem onClick={handleClose}>Get Started</MenuItem>
            </Link>
            {/* <Link href='/demo'>
              <MenuItem onClick={handleClose}>Demo</MenuItem>
            </Link> */}
          </div>
        )}
        <Button
          href='https://github.com/oslabs-beta/xkite'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            unoptimized={true}
            src='/navbar/github.svg'
            alt='github'
            height={30}
            width={30}
          ></Image>
        </Button>
        <Button
          href='https://www.npmjs.com/package/xkiteio'
          target='_blank'
          rel='noreferrer'
        >
          <Image src='/navbar/npm.svg' alt='npm' unoptimized={true} height={30} width={30}></Image>
        </Button>
        <Button
          href='https://linkedin.com/company/xkite-io'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            unoptimized={true}
            src='/navbar/linkedin.svg'
            alt='linkedin'
            height={30}
            width={30}
          ></Image>
        </Button>
      </Menu>
    </div>
  );
}
