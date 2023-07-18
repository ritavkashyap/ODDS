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
import PreviousData from './pages/PreviousData';
import TermsAndCondition from './pages/TermsAndConditions';
// import PrivacyPolicy from './pages/PrivacyPolicy'
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Notification from './pages/Notification';
import Topbar from './components/Topbar'
import AddNewCamera from './pages/AddNewCamera';

// import SerachBar from './components/SerachBar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/CameraStatus" element={<CameraStatus />} />
            <Route path="/TrajectoryStudy" element={<TrajectoryStudy />} />
            <Route path="/DataVisualization" element={<DataVisualization />} />
            <Route path="/Documentation" element={<Documentation />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path='/TermsAndConditions' element={<TermsAndCondition />} />
            {/* <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} /> */}
            <Route path='/Settings' element={<Settings />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Notification' element={<Notification />} />
            <Route path='/PreviousData' element={<PreviousData />} />
            <Route path='/AddNewCamera' element={<AddNewCamera />} />
          </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App