import TabPanel from '@mui/lab/TabPanel';
import Image from 'next/image'
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
  Tab
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

import { CopyBlock, atomOneDark } from 'react-code-blocks';


const useStyles = makeStyles({
  root: {
    marginTop: 20,
    marginBottom: 20
  },
  leftText: {
    textAlign: "left"
  },
  rightText: {
    textAlign: "right"
  }
});

const Step = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(35)};
`
);

const Description = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(20)};
`
);

const Panel = styled(TabPanel)(
  ({ theme }) => `
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0;`
);

const Code = styled(Box)(
  ({ theme }) => `
    width: 100%;
`
);

export default function cli() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  const code = 'for (let i = 0; i < 10; i++) { console.log(i); }';
  return (
    <>
    <Panel value='cli' className={classes.leftText} >
      <Box className={classes.root}>
      <Step >1. Clone the repository to your device</Step>
      </Box>
      <Box className={classes.root}>
      <Description >a. If using NPX, simply execute the following in your terminal and follow the prompts:</Description>
      </Box>
      <Code className={classes.root}>
        <CopyBlock
          text={`npx @xkiteio/create-xkite my-xkite`}
          language='javascript'
          showLineNumbers={true}
          wrapLines
          codeBlock
          theme={atomOneDark}
        />
      </Code>
      <Box className={classes.root}>
      <Description >Upon completion, your dependencies will already be installed. Simply follow the instructions and in the terminal which will include the following:</Description>
      </Box>
      <Code className={classes.root}>
        <CopyBlock
          text={'cd my-xkite'}
          language='javascript'
          showLineNumbers={true}
          wrapLines
          codeBlock
          theme={atomOneDark}
        />
      </Code>
      <Code className={classes.root}>
        <CopyBlock
          text={'npm run dev'}
          language='javascript'
          showLineNumbers={true}
          wrapLines
          codeBlock
          theme={atomOneDark}
        />
      </Code>
      
    </Panel>
    </>
  );
}
