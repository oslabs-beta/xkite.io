import Developer from './Developer';
import { useRef } from 'react';
import { Grid, styled } from '@mui/material';

const TeamWrapper = styled(Grid)(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 2rem 0 0 0;
    padding: 0;
    flex-wrap: wrap;    
`
);

export default function Team(props: any) {
  return (
    <TeamWrapper>
      <Developer
        name='John Hamlin'
        img='/team/John.png'
        github='johnhamlin'
        linkedin='hamlinjohn'
      />
      <Developer
        name='Issam Eljitan'
        img='/team/Issam.png'
        github='issam-eljitan'
        linkedin='issam-eljitan'
      />
      <Developer
        name='Irina Khafizova'
        img='/team/Irina.png'
        github='khafizka'
        linkedin='irina-khafizova'
      />
      <Developer
        name='Mark Krasner'
        img='/team/Mark.png'
        github='mzkrasner'
        linkedin='krasnermark'
      />
      <Developer
        name='Zahara Aviv'
        img='/team/Zahara.png'
        github='zahara-aviv'
        linkedin='zahara-aviv'
      />
    </TeamWrapper>
  );
}
