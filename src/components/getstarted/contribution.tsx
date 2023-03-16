import TabPanel from '@mui/lab/TabPanel';
import Image from 'next/image'
import {
  Box,
  Typography,
  styled,
  Link
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';


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

export default function contribution() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <>
    <Panel value='contributions' className={classes.leftText} >
    <Box className={classes.root}></Box>
    <Box className={classes.root}>
      <Step >xkite Repositories:</Step>
      </Box>
      <Box className={classes.root}>
      <Description >Below you can find a list of our Github repositories related to our core xkite functionality listed on the previous tabs:
      </Description>
      </Box>
      <Box className={classes.root}>
      <Description > <Link color="#A3F6BF" href="https://github.com/oslabs-beta/xkite">xkite</Link>: 
      Our complete xkite repository for running xkite with our visual prototyping, testing, and monitoring interface.
      </Description>
      </Box>
      <Box className={classes.root}>
      <Description > <Link color="#A3F6BF" href="https://github.com/oslabs-beta/xkite-core">xkite-core</Link>:
      Our library for installing xkite into an existing codebase. Please refer to the `xkite-core` tab for more information.
      </Description>
      </Box>
      <Box className={classes.root}>
      <Description > <Link color="#A3F6BF" href="https://github.com/oslabs-beta/xkite-cli">xkite-cli</Link>:
      Create an xkite instance directly from the command line without the entire xkite package. Please refer to the `xkite-cli` tab for directions.
      </Description>
      </Box>
      <Box className={classes.root}>
      <Step >Want to Contribute?</Step>
      </Box>
    <Box className={classes.root}>
      <Description >Have an idea for how we can improve any of our Codebases or libraries? We would love your help! If you would like 
                    to contribute, please use the following format:
      </Description>
      </Box>
      <Box className={classes.root}>
      <Description >1. Fork the Github repository into your Github account</Description>
      </Box>
      <Box className={classes.root}>
      <Description >2. Clone your forked repository and create a new branch using your Github username as the name of your new branch</Description>
      </Box>
      <Box className={classes.root}>
      <Description >3. Commit the changes you&apos;d like to contribute to your branch. Use a detailed description explaining what your
        code helps to optimize or fix </Description>
      </Box>
      <Box className={classes.root}>
      <Description >4. Create a pull request into the main branch of the xkite repository </Description>
      </Box>
      <Box className={classes.root}>
      <Description >You can also raise an issue in Github if you&apos;d like to bring one to our attention. Similar to contributing directly,
        please use the following format when describing the issue you&apos;re encountering:
      </Description>
      </Box>
      <Box className={classes.root}>
      <Description >a. What is the problem?</Description>
      </Box>
      <Box className={classes.root}>
      <Description >b. What did I expect to happen?</Description>
      </Box>
      <Box className={classes.root}>
      <Description >c. What have I tried?</Description>
      </Box>
      <Box className={classes.root}>
      <Description >d. (If applicable) Why I suspect it&apos;s not working</Description>
      </Box>
    </Panel>
    </>
  );
}
