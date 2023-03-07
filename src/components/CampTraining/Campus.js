import React from 'react';
import Header from '../Head&Foot/Header';
import Section_01_Campus from  "./Section_01_Campus"
import Section_02_Campus from './Section_02_Campus';
import Section_03_Campus from './Section_03_Campus';
import Section_04_Campus from './Section_04_Campus';
import Section_05_Campus from './Section_05_Campus';
import Section_06_Campus from './Section_06_Campus';
import Section_07_Campus from './Section_07_Campus';
import Footer from '../Head&Foot/Footer';
// import './App.css';

function TrainingMain() {
  return (
    <div>
     <Header/>
      <Section_01_Campus />
      <Section_02_Campus />
      <Section_03_Campus />
      <Section_04_Campus />
      <Section_05_Campus />
      <Section_06_Campus />
      <Section_07_Campus />
      <Footer/>
    </div>
  );
}

export default TrainingMain;