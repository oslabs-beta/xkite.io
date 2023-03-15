import TabPanel from '@mui/lab/TabPanel';

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
  Tab,
} from '@mui/material';

import { CopyBlock, atomOneDark } from 'react-code-blocks';

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

export default function xkite() {
  const code = 'for (let i = 0; i < 10; i++) { console.log(i); }';
  return (
    <Panel value='cli'>
      <Step>1. Do xyz</Step>
      <Code>
        <CopyBlock
          text={code}
          language='javascript'
          showLineNumbers={true}
          wrapLines
          codeBlock
          theme={atomOneDark}
        />
      </Code>
      <Description>So basically, this is how you do it</Description>
    </Panel>
  );
}
