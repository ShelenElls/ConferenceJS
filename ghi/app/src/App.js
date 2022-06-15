import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import React from 'react';
import AttendeesList from './AttendeesList';
import AttendConferenceForm from './AttendConferenceForm';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PresentationForm from './PresentationForm'
import MainPage from './MainPage'




function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='locations'>
          <Route path='new' element={<LocationForm />} />
        </Route>
        <Route path='conferences'>
          <Route path='new' element={<ConferenceForm />} />
    
        </Route>
        <Route path='presentations'>
          <Route path='new' element={<PresentationForm />} />
        </Route>
        <Route path='attendees' element={<AttendeesList attendees={props.attendees} />}></Route>
        
        <Route path='attendees/new' element={<AttendConferenceForm />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;