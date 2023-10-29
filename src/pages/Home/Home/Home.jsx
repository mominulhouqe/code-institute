import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Works from '../Works/Works';
import Projects1 from '../Projects/Projects1';
import Results from '../Counters/Results';
import Clients from '../Feedback/Clients';
import Download from '../Download/Download';


const Home = () => {
  return (
    <div >
      <Banner />
      <Services />
      <Works />
      <Projects1 />
      {/* <Counters /> */}
      <Results />
      <Clients />
      <Download />

    </div>
  );
};

export default Home;