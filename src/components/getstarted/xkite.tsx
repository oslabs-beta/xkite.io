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
import config from 'public/home-configuration.gif'
import kafkaMetrics from 'public/kafka-metrics.gif'
import dockerMetrics from 'public/docker-metrics.gif'
import disconnect from 'public/export-disconnect.gif'
import testing from 'public/testing.gif'

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


export default function xkite() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  return (
    <Panel value='xkite' className={classes.leftText} >
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
      <Box className={classes.root}>
      <Description >b. Alternatively, you can also follow these steps to clone the xkite repository:</Description>
      </Box>
      <Code className={classes.root}>
        <CopyBlock
          text={'git clone https://github.com/oslabs-beta/xkite'}
          language='javascript'
          showLineNumbers={true}
          wrapLines
          codeBlock
          theme={atomOneDark}
        />
      </Code>
      <Code className={classes.root}>
        <CopyBlock
          text={`cd xkite`}
          language='javascript'
          showLineNumbers={true}
          wrapLines
          codeBlock
          theme={atomOneDark}
        />
      </Code>
      <Code className={classes.root}>
        <CopyBlock
          text={`npm install`}
          language='javascript'
          showLineNumbers={true}
          wrapLines
          codeBlock
          theme={atomOneDark}
        />
      </Code>
      <Code className={classes.root}>
        <CopyBlock
          text={`npm run dev`}
          language='javascript'
          showLineNumbers={true}
          wrapLines
          codeBlock
          theme={atomOneDark}
        />
      </Code>
      <Box className={classes.root}>
      <Step >2. Launching a Custom Configuration</Step>
      </Box>
      <Box className={classes.root}>
      <Description >You should now see the xkite running in your localhost browser on port 3000. You can enter the interface by selecting
        `Create a Data Pipeline` from the entry screen. You will be navigated to a configuration page where you can create a custom Kafka
        configuration. You can assign custom ports to your setup components, increase or decrease your broker count, choose
        a data source and data sink, and more.
      </Description>
      </Box>
      <Box className={classes.root}>
      <Description >When you&apos;re ready, go ahead and click &apos;Submit&apos; to trigger a local deployment. xkite will automatically
        begin downloading and building the appropriate Docker images for your setup. If this is your first time running xkite, this part
        may take several minutes.
      </Description>
      </Box>
      <Image src={config} alt="kafka configuration" />
      <Box className={classes.root}>
      <Step >3. Monitoring Kafka Health</Step>
      </Box>
      <Box className={classes.root}>
      <Description >Once the appropriate Docker images in your configuration have been downloaded and built, xkite will automatically
        detect when your metrics are ready to begin monitoring. Upon detection, you will be automatically be navigated to the metrics
        page. 
      </Description>
      </Box>
      <Box className={classes.root}>
      <Description >Explore the Kafka metrics tabs available to you, partitioned based on category. Consume performance indicators 
        related to your producers, consumers, topics, and more.
      </Description>
      </Box>
      <Image src={kafkaMetrics} alt="kafka metrics" />
      <Box className={classes.root}>
      <Step >4. Monitoring Docker Health</Step>
      </Box>
      <Box className={classes.root}>
      <Description >xkite integrates Docker health directly into the application interface, making it easy to view the activity status 
        and port assignments of each Docker image in your configuration. Simply navigate to the `Docker Health` tab within the left-hand
        navigation bar. You can also pause and restart Docker images directly from this page, or pause and restart all using the button
        in the top navigation.
      </Description>
      </Box>
      <Image src={dockerMetrics} alt="docker metrics" />
      <Box className={classes.root}>
      <Step >5. Testing Your Kafka Configuration</Step>
      </Box>
      <Box className={classes.root}>
      <Description >You will find a `Tests` tab in your left-hand navigation. This feature allows you to test your deployment by creating
        new topics and sending test messages to those topics, as well as querying your KSQL instance directly from the xkite interface. 
      </Description>
      </Box>
      <Image src={testing} alt="kafka testing" />
      <Box className={classes.root}>
      <Step >6. Export Your Kafka Configuration & Wind Down Docker Images</Step>
      </Box>
      <Box className={classes.root}>
      <Description >Finally, once you&apos;re finished deploying, testing, and monitoring your Kafka setup, you have the option to export
        any configuration you deploy by clicking the `Export Config` button back on the /configuration page. Please allow several seconds
        for your files to be exported, zipped, and downloaded from your browser window. Don&apos;t forget to gracefully spin down your
        Docker images when you&apos;re finished by clicking the `Disconnect` button. This will clear out both your active containers and 
        delete any related Docker volumes you created during your session.
      </Description>
      </Box>
      <Image src={disconnect} alt="disconnect" />
    </Panel>
    
  );
}
