import React from 'react';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import EventListing from "../components/EventListing.tsx";

const Events: React.FC = () => {
  return (
    <div>
      <Header />
      <EventListing />
  
      <Footer />
    </div>
  );
};

export default Events;
