import React from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import ActivismPromo from '../components/ActivismPromo.tsx';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <ActivismPromo />
      <Footer />
    </div>
  );
};

export default Home;
