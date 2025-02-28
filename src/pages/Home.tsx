import React from 'react';
import Sidebar from "../components/Sidebar";
import EventListing from "../components/EventListing";
import ActivismPromo from '../components/ActivismPromo';

const Home: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <ActivismPromo />
    </div>
  );
};

export default Home;
