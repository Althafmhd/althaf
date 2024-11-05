import {Link, Route, Routes } from "react-router-dom";
import Content from "./Content";
import OPBlock from "./OPBlock";
import TKMBlock from "./TKMBlock";
import AddDeleteMeter from "./AddDeleteMeter";
import ViewMeterValue from "./ViewMeterValue";
import Project from "./Project";
import React from 'react';
import './index.css';
function App() {
  
  
  return (
    <div>
      <nav id="lik">
       
          <Link to="/" >Content</Link> &nbsp; &nbsp; &nbsp;
          <Link to="/AddDeleteMeter " >   Addand DeleteMeter  </Link> &nbsp; &nbsp; &nbsp;
          <Link to="/ViewMeterValue">ViewMeterValue</Link>&nbsp; &nbsp; &nbsp;
          <Link to="/TKMBlock">TKMBlock</Link>&nbsp; &nbsp; &nbsp;
          <Link to="/OPBlock">OPBlock</Link>&nbsp; &nbsp; &nbsp;
          <Link to="/Project">Project</Link>&nbsp; &nbsp; &nbsp;
       
      </nav>
      <br></br><br></br>
      <Routes>
        
        <Route path="/" element={<Content />}>

        </Route>
        <Route path="/AddDeleteMeter" element={<AddDeleteMeter />}/>
        <Route path="/ViewMeterValue" element={<ViewMeterValue />}/>
        <Route path="/TKMBlock" element={<TKMBlock />}/>
        <Route path="/OPBlock" element={<OPBlock />}/>
        <Route path="/Project" element={<Project />}/>
      </Routes>
      
      
     {/*<Header />
     <TKMBlock />
     <OPBlock />
     <AddDeleteMeter />
     <ViewMeterValue />
     <Content />
     <Footer />
     */}
    </div>
  );
}

export default App;
