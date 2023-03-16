import TabPanel from '@mui/lab/TabPanel';
import Image from 'next/image';
import { Box, Typography, styled } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Link from '@/components/Link';

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
    font-size: x-large;
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

export default function definitions() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <>
      <Panel value='definitions' className={classes.leftText}>
        <Box className={classes.root}></Box>
        <Box className={classes.root}>
          <Description>
            Whether you&apos;re engaging with the full xkite library or using
            xkite-cli or xkite-core, your local deployment will involve several
            Docker containers representing your configuration&apos;s ecosystem.
            The purpose of this page is to briefly explain what each of these
            components do.
          </Description>
        </Box>
        <Box className={classes.root}>
          <Step>Kafka</Step>
        </Box>
        <Box className={classes.root}>
          <Description>
            By default, xkite deploys with two instances of Kafka, using the
            confluentinc/cp-kafka standard Docker image. We’ve preconfigured
            certain Kafka settings for you (such as setting the topic
            replication factor to 2, among others). If your team wants to make
            additional environment changes, you can either do so directly by
            altering our YML generator logic, or manually changing these
            settings within the docker-compose.yml export you’ll receive after
            exporting a configuration.
          </Description>
        </Box>
        <Box className={classes.root}>
          <Step>Zookeeper</Step>
        </Box>
        <Box className={classes.root}>
          <Description>
            Every Kafka configuration requires a coordination consensus
            mechanism. Within the context of a Kafka environment, Apache
            Zookeeper provides this coordination by maintaining the
            leader/follower relationship for each Kafka partition, as well as
            managing other tasks such as keeping a list of which functioning
            brokers belong to a given cluster. While this mechanism is set to
            eventually be swapped out for Apache Kraft, Apache Zookeeper is
            still the most widely-used across most Kafka configurations. Each
            xkite configuration Zookeeper instances.
          </Description>
        </Box>
        <Box className={classes.root}>
          <Step>Prometheus</Step>
        </Box>
        <Box className={classes.root}>
          <Description>
            xkite uses Prometheus, an open-source time-series database, to log
            key metrics from your Kafka configuration. We’ve automatically
            connected this to your Grafana container, explained below.
          </Description>
        </Box>
        <Box className={classes.root}>
          <Step>Grafana</Step>
        </Box>
        <Box className={classes.root}>
          <Description>
            Grafana is a fantastic open-source observability platform that can
            be connected with databases like Prometheus to visualize complex
            data. Every xkite deployment will come preconfigured with a
            containerized Grafana instance, customized specifically to visualize
            Kafka-relevant data.
          </Description>
        </Box>
        <Box className={classes.root}>
          <Step>JMX</Step>
        </Box>
        <Box className={classes.root}>
          <Description>
            Regardless of what environment you’re developing in, Kafka requires
            a Java runtime to work, therefore requiring any data scrapers to
            have access to the Java runtime in order to ingest relevant metrics.
            xkite uses a JMX (Java Management Extension) exporter to both scrape
            Kafka performance data and expose this data via HTTP to be consumed
            by Prometheus (mentioned above). xkite uses the bitnami/jmx-exporter
            image, the most widely-used and supported image for exporting Kafka
            data, to fulfill this requirement.
          </Description>
        </Box>
        <Box className={classes.root}>
          <Step>Spring</Step>
        </Box>
        <Box className={classes.root}>
          <Description>
            You will see a container in your configuration labeled “spring” -
            this is the packaged and containerized instance of our Java
            application (built using the Spring Boot framework), with a simple
            consumer and producer instance, as well as the standard dependencies
            for Kafka and actuator, as well as key-value serialization and topic
            creation configurations for the consumer and producer. Similar to
            the other components in this ecosystem, the Spring application is
            already connected to the designated bootstrap servers for the
            producer and consumer, and is pre-set to expose relevant data to the
            JMX exporters (mentioned above).
          </Description>
        </Box>
        <Box className={classes.root}>
          <Step>KSQL/PostgreSQL, contingent on configuration</Step>
        </Box>
        <Box className={classes.root}>
          <Description>
            xkite is configured out-of-the-box with KSQL as the data source.
            KSQL is a SQL engine that’s designed specifically for analyzing
            real-time streaming data present in a Kafka configuration, and
            differs from typical databases such that it’s designed for stream
            processing. Therefore, it’s most likely to be the default source for
            a given Kafka setup. Similar to executing SQL queries in othNer
            relational databases, KSQL offers primary commands like SELECT,
            JOIN, LIMIT, and WHERE, which will feel familiar to most developers
            with existing SQL experience. xkite gives users the option to toggle
            data source preference to PostgreSQL as well.
          </Description>
        </Box>
        <Box className={classes.root}>
          <Step>Jupyterhub/Spark</Step>
        </Box>
        <Box className={classes.root}>
          <Description>
            In a complete Kafka ecosystem, a given setup would typically have a
            data sink for reading data from Kafka (which uses a Kafka consumer
            client code under the hood). xkite deploys either Jupyter Notebook
            or Spark to fill this function, giving development teams the option
            to customize settings as they see fit.
          </Description>
        </Box>
        <Box className={classes.root}>
          <Step>Kafka-Connect (source / sink)</Step>
        </Box>
        <Box className={classes.root}>
          <Description>
            Future instances of xkite shall provide the ability to connect a
            variety of data sources and sinks. The{' '}
            <Link href='https://hub.docker.com/r/xkite/kafka-connector'>
              xkite/kafka-connect
            </Link>
            docker image was custom built for the xkite application based on the{' '}
            <Link href='https://hub.docker.com/r/confluentinc/cp-kafka-connect'>
              confluentinc/cp-kafka-connect
            </Link>{' '}
            docker image. The key difference between these images is simply the
            connector plugins provided. Below is a list of the plugins provided
            by xkite:
          </Description>
        </Box>
        <Box className={classes.root}>
          <Description>
            <ol>
              <li>mmolimar-kafka-connect-fs-1.3.0</li>
              <li>confluentinc-kafka-connect-prometheus-metrics-1.3.0</li>
              <li>confluentinc-kafka-connect-jdbc-10.6.4</li>
              <li>mongodb-kafka-connect-mongodb-1.9.1</li>
              <li>confluentinc-kafka-connect-json-schema-converter-7.3.2</li>
            </ol>
          </Description>
        </Box>
        <Box className={classes.root}>
          <Description>
            At the moment, the current xkite toolset does not connect these
            source/sinks to their docker containers. Below is a diagram
            illustrating the way in which these images act as a conduit to Kafka
            brokers to serialize data to/from the docker containers.
          </Description>
        </Box>
        <Box className={classes.root}>
          <Step>KSQL Database CLI</Step>
        </Box>
        <Box className={classes.root}>
          <Description>
            This container is used primarily as a testing interface and is not
            essential to deploying/running a KSQL database within the xkite
            ecosystem. The CLI provides a simple to use terminal to
            interact/debug with the KSQL database server.
          </Description>
        </Box>
      </Panel>
    </>
  );
}
