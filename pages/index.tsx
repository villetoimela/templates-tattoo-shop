
import Hero from '../components/hero'
import React from "react";
import { Navbar } from '../components/navbar/navbar';
import Footer from '../components/footer';
import InfoSection from '../components/info-section/info-section';
import ExampleSomeFeed from '../components/example-some-feed.tsx/example-some-feed';
import TietoaInfoSection from '../components/tietoa-info-section';
import Team from '../components/team/team';
import InfoSectionCompact from '../components/info-section-combat/info-section-compact';
import CtaSimple from '../components/cta-simple';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfoSection />
      <ExampleSomeFeed />
      <TietoaInfoSection />
      <Team />
      <InfoSectionCompact />
      <CtaSimple />
      <Footer />
    </div>
  )
}

export default Home
