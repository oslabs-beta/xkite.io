import TabPanel from '@mui/lab/TabPanel';
import Image from 'next/image'
import {
  Box,
  Typography,
  styled
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import xkiteCli from 'public/cli-xkite.gif'
import { CopyBlock, atomOneDark } from 'react-code-blocks';


const useStyles = makeStyles({
  root: {
    marginTop: '1.5em',
    marginBottom: '1.5em'
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

export default function cli() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <>
    <Panel value='cli' className={classes.leftText} >
    <Box className={classes.root}></Box>
    <Box className={classes.root}>
      <Description >The guide below uses the following repository: </Description>
      </Box>
      <Code className={classes.root}>
        <CopyBlock
          text={`https://github.com/oslabs-beta/xkite-cli`}
          language='javascript'
          showLineNumbers={true}
          wrapLines
          codeBlock
          theme={atomOneDark}
        />
      </Code>
      <Box className={classes.root}>
      <Step >System Requirements: </Step>
      </Box>
      <Box className={classes.root}>
      <Description >- Latest stable versions of <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">Node.js and NPM</a> installed</Description>
      </Box>
      <Box className={classes.root}>
      <Description >- Latest stable versions of <a href="https://docs.docker.com/compose/install/">docker-compose</a> installed</Description>
      </Box>
      <Box className={classes.root}>
      <Description >- <strong>Note: </strong>You will need Docker daemon running before deploying an xkite configuration.</Description>
      </Box>
      <Box className={classes.root}>
      <Step >Overview: </Step>
      </Box>
    <Box className={classes.root}>
      <Description >The xkite-cli utility provides an easy to use Command Line Interface (CLI) to interact with the xkite-core library. 
                    It’s a simple alternative to the full xkite GUI web application meant to provide users with the ability to automate 
                    their testing using scripts. It also provides the ability to configure a custom docker ecosystem using command line 
                    inputs or a config.json file, deploy, pause/ unpause, shutdown, and remove containers and volumes.</Description>
      </Box>
      <Box className={classes.root}>
      <Description >Similar to the xkite GUI web application, xkite-cli allows users to download their configuration (package.zip) 
                    containing their docker-compose.yml file and dependencies in order to deploy their ecosystem on a cloud instance/remote 
                    server by simply running docker-compose up. In addition to all this great functionality xkite-cli can act as a remote client 
                    to interface with the xkite GUI web application server.</Description>
      
      </Box>
      <Box className={classes.root}>
      <Description >The user can perform all the aforementioned functions provided remotely on the xkite server by providing the URL as a 
                    configuration input. xkite-cli is just another tool in the xkite library to allow the user to ultimate control over their 
                    Kafka ecosystem. xkite-cli also enables the user to have a more granular control over which docker images they choose to 
                    deploy (something that is not configurable currently with the web GUI version).</Description>
      
      </Box>
      <Box className={classes.root}>
      <Step >1. Install the xkite-cli utility globally</Step>
      </Box>
      <Box className={classes.root}>
      <Description >a. Run the following command in your terminal to install the xkite-cli utility globally:</Description>
      </Box>
      <Code className={classes.root}>
        <CopyBlock
          text={`npx create-xkite-cli`}
          language='javascript'
          showLineNumbers={true}
          wrapLines
          codeBlock
          theme={atomOneDark}
        />
      </Code>
      <Box className={classes.root}>
      <Description >After installation is completed, you can view and test the different xkite-cli commands by running:</Description>
      </Box>
      <Code className={classes.root}>
        <CopyBlock
          text={`xkite-cli`}
          language='javascript'
          showLineNumbers={true}
          wrapLines
          codeBlock
          theme={atomOneDark}
        />
      </Code>
      <Image src={xkiteCli} alt="xkite-cli" />
      <Box className={classes.root}>
      <Description >Please refer to the README for detailed instructions or refer to the xkite-cli –help command to see all available options.</Description>
      </Box>
    </Panel>
    </>
  );
}
