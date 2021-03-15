import Head from 'next/head';
import NavContainer from '@components/NavContainer/NavContainer.component';
import Intro from '@components/Intro/Intro.component';
import Skills from '@components/Skills/Skills.component';
import Projects from '@components/Projects/Projects.component';
import Experience from '@components/Experience/Experience.component';
import Contact from '@components/Contact/Contact.component';
import Footer from '@components/Footer/Footer.component';

import { aosInit } from '../hooks/aos';

export default function Home() {
  aosInit(1000);

  return (
    <div className='topContainer'>
      <Head>
        <title>Blake Reeves</title>
        <link rel='icon' href='/logo.svg' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
      <NavContainer />

      <main>
        <Intro />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
