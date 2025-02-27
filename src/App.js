import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import OurMission from './pages/OurMission.tsx';
import Events from './pages/Events.tsx';
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Callback from "./pages/Callback.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/OurMission" element={<OurMission />} />
        <Route
            path="/Events"
            element={
              <ProtectedRoute>
                <Events />
              </ProtectedRoute>
            }
          />
          <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
