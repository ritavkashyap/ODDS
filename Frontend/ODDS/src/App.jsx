import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import AboutUs from './pages/AboutUs.jsx';
import DataVisualization from './pages/DataVisualization.jsx';
import Documentation from './pages/Documentation.jsx';
import TrajectoryStudy from './pages/TrajectoryStudy.jsx';
import CameraStatus from './pages/CameraStatus.jsx';
import ContactUs from './pages/ContactUs';
import TermsAndCondition from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy'


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/CameraStatus" element={<CameraStatus />} />
          <Route path="/TrajectoryStudy" element={<TrajectoryStudy />} />
          <Route path="/DataVisualization" element={<DataVisualization />} />
          <Route path="/Documentation" element={<Documentation />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path='/TermsAndConditions' element={<TermsAndCondition />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;