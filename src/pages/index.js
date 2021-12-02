//import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <Layout>
        <Section>
          <Hero />
        </Section>
        <Technologies />
        <Projects />      
        <Timeline />
      </Layout>
    </>
  );
};

export default Home;
