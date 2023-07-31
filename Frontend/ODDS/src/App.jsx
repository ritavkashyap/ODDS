import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import DroneMap from './pages/DroneMap';
import LiveVideoFeed from './pages/LiveVideoFeed'
import AboutUs from './pages/AboutUs.jsx';
import DataVisualization from './pages/DataVisualization.jsx';
import Documentation from './pages/Documentation.jsx';
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
import CameraDetail from './pages/CameraDetail';
import VideoFeed from './pages/VideoFeed';

function App() {
  const [data, setData] = React.useState([])
  function createCameraArray(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }

  // // API call
  React.useEffect(function () {
    fetch("http://127.0.0.1:8000/api/cameraModels/")
      .then(res => res.json()) // Parse the response as JSON
      .then(data => { setData(createCameraArray(data)); })
  }, [data]);

  return (
    <BrowserRouter>
      <Sidebar>
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard etData={setData} data = {data}/>} />
          <Route path="/Dashboard" element={<Dashboard etData={setData} data = {data}/>} />
          <Route path="/DroneMap" element={<DroneMap visible={1} data = {data}/>}  />
          <Route path="/LiveVideoFeed" element={<LiveVideoFeed data = {data} setData={setData} />} />
          <Route path="/CameraStatus" element={<CameraStatus data = {data} setData={setData} />} />
          <Route path="/TrajectoryStudy" element={<DroneMap visible={0} data = {data}/>} />
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
          <Route path='/EditCamera/:id' element={<CameraDetail />} />
          <Route path='/VideoFeed' element={<VideoFeed />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App