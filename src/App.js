// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header"
import Body from './components/body';
import Home from './components/Home';
import Works from './components/Works';
import Service from './components/Service';
import Pricing from './components/pricing';
import { highlight1,highlight2,highlight3 } from './objects/highlight';
import Highlight from './components/highlight';
import Testinomials from './components/testinomials';
import Footer from './components/Footer';
// import Button1 from './components/button1';
// import Button2 from './components/button2';



function Website(){
  return (
    <>
    <Header />
    <Home  />
    <Works />
    <Service />
    <Body />
    <Highlight highlight={highlight1} isCheck={false} />
    <Pricing />
    <Highlight highlight={highlight2} isCheck={false} />
    <Testinomials />
    <Highlight highlight={highlight3} isCheck={true} />
    {/* <Button2 /> */}
    <Footer />



    {/* <App /> */}
    </>
  )

}

// function App() {
//   return (
//     <div className="App">

      
//     </div>
//   );
// }

export default Website;
