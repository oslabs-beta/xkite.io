import TabPanel from '@mui/lab/TabPanel';
import Image from 'next/image';
import { Box, Typography, styled } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import xkiteCore from 'public/xkite-core.gif';
import { CopyBlock, atomOneDark } from 'react-code-blocks';

const useStyles = makeStyles({
  root: {
    marginTop: '1.5em',
    marginBottom: '1.5em',
  },
  leftText: {
    textAlign: 'left',
  },
  rightText: {
    textAlign: 'right',
  },
});

const Step = styled(Typography)(
  ({ theme }) => `
    font-size: xx-large;
`
);

const Description = styled(Typography)(
  ({ theme }) => `
    font-size: large;
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

export default function core() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <>
      <Panel value='core' className={classes.leftText}>
        <Box className={classes.root}></Box>
        <Box className={classes.root}>
          <Description>
            The guide below uses the following repository:{' '}
          </Description>
        </Box>
        <Code className={classes.root}>
          <CopyBlock
            text={`https://github.com/oslabs-beta/xkite-core`}
            language='javascript'
            showLineNumbers={true}
            wrapLines
            codeBlock
            theme={atomOneDark}
          />
        </Code>
        <Box className={classes.root}>
          <Step>System Requirements: </Step>
        </Box>
        <Box className={classes.root}>
          <Description>
            - Latest stable versions of{' '}
            <a href='https://docs.npmjs.com/downloading-and-installing-node-js-and-npm'>
              Node.js and NPM
            </a>{' '}
            installed
          </Description>
        </Box>
        <Box className={classes.root}>
          <Description>
            - Latest stable versions of{' '}
            <a href='https://docs.docker.com/compose/install/'>
              docker-compose
            </a>{' '}
            installed
          </Description>
        </Box>
        <Box className={classes.root}>
          <Description>
            - <strong>Note: </strong>You will need Docker daemon running before
            deploying an xkite configuration.
          </Description>
        </Box>
        <Box className={classes.root}>
          <Step>Overview: </Step>
        </Box>
        <Box className={classes.root}>
          <Description>
            The xkite-core library is, as the name suggests, the core library
            for xkite. It provides the underpinning functionality for
            configuring a YAML file, managing docker containers (configure, run,
            pause, and shutdown), interfacing with remote xkite servers, and
            providing configuration settings for users to easily connect to
            their Kafka instances for development purposes.
          </Description>
        </Box>
        <Box className={classes.root}>
          <Description>
            The xkite-core library is available as an npm package to enable
            developers to integrate the tool into their existing codebase or
            kickstart their application using Kafka. Two practical use cases for
            using xkite-core are already shown above with the xkite web GUI and
            the xkite-cli applications.{' '}
          </Description>
        </Box>
        <Box className={classes.root}>
          <Step>
            1. Install xkite-core into your existing codebase using NPM
          </Step>
        </Box>
        <Box className={classes.root}>
          <Description>
            a. Run the following command in your terminal at the root of your
            project directory:
          </Description>
        </Box>
        <Code className={classes.root}>
          <CopyBlock
            text={`npm install xkite-core`}
            language='javascript'
            showLineNumbers={true}
            wrapLines
            codeBlock
            theme={atomOneDark}
          />
        </Code>
        <Image src={xkiteCore} alt='xkite-cli' />
        <Box className={classes.root}>
          <Description>
            After installation is completed, you&apos;re ready to begin using
            xkite-core across your application architecture.
          </Description>
        </Box>
        <Box className={classes.root}>
          <Step>Using xkite-core</Step>
        </Box>
        <Box className={classes.root}>
          <Description>Importing types:</Description>
        </Box>
        <Code className={classes.root}>
          <CopyBlock
            text={`import type { KiteConfig, KiteSetup, KiteClass } from 'xkite-core';`}
            language='javascript'
            showLineNumbers={true}
            wrapLines
            codeBlock
            theme={atomOneDark}
          />
        </Code>
        <Box className={classes.root}>
          <Description>
            (Full list of interfaces and types can be found on{' '}
            <a href='https://www.npmjs.com/package/xkite-core'>NPM</a>)
          </Description>
        </Box>
        <Box className={classes.root}>
          <Description>
            Using library methods example (using next.js):
          </Description>
        </Box>
        <Code className={classes.root}>
          <CopyBlock
            text={`import type { NextApiRequest, NextApiResponse } from 'next/types';
          const { Kite } = require('xkite-core');
          
          export default function handler(req: NextApiRequest, res: NextApiResponse) {
            if (req.method === 'GET') {
              Kite.deploy();
              res.status(200);
            } else {
              res.status(405).send('Method Not Allowed');
            }
          }`}
            language='javascript'
            showLineNumbers={true}
            wrapLines
            codeBlock
            theme={atomOneDark}
          />
        </Code>
        <Box className={classes.root}>
          <Description>Getting Kite setup example: </Description>
        </Box>
        <Code className={classes.root}>
          <CopyBlock
            text={`import type { NextApiRequest, NextApiResponse } from 'next/types';
          const { Kite } = require('xkite-core');
          import type { KiteSetup } from 'xkite-core';
          
          type Setup = KiteSetup;
          
          export default async function handler(
            req: NextApiRequest,
            res: NextApiResponse<Setup | string>
          ) {
            if (req.method === 'GET') {
              try {
                const setup = await Kite.getSetup();
                if (!setup) throw Error('Setup not defined!');
                res.status(200).json(setup);
              } catch (err) {
                console.log(err);
                res.status(500).send('Internal Server Error /api/kite/getSetup');
              }
            } else {
              res.status(405).send('Method Not Allowed');
            }
          }`}
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
