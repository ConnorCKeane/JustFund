import React from 'react';
import Sidebar from "../components/Sidebar";
import EventListing from "../components/EventListing";

const Events: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <EventListing />
    </div>
  );
};

export default Events;
