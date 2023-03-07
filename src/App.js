import "./App.css"
import React from 'react'
import HomePage from './components/home_page/HomePage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Campus from './components/CampTraining/Campus';
import Main from './components/Main/Main';
import Training from "./components/CampTraining/Training";
import EducatorSection from './components/Main/EducatorSection';
import Browse from './components/Main/Browse/Browse';
import Practise from './components/Main/Practise/Practise';
import Test from './components/Main/Test/Test';
import Syllabus from './components/Main/Syllabus/Syllabus';
import Home from "./components/Main/Home";
import TakeTest from "./components/Main/Test/TestComponents/TakeTest"
import TestSeriesQP from "./components/Main/Test/TestComponents/TestSeriesQP"
import ScrollToTop from "./components/Main/ScrollToTop"
// './components/Main/Syllabus/Syllabus'

 function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop>
        
          <Routes>
             <Route path='/' exact element={ <HomePage/>} />
             <Route path='/campus'  element={<Campus/>} />
             <Route path='/training' element={<Training/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/educator' element={<EducatorSection/>}/>
            <Route path='/browse' element={<Browse/>}/>
            <Route path='/practise' element={<Practise/>}/>
            <Route path='/test' element={<Test/>}/>
            <Route path='/syllabus' element={<Syllabus/>}/>
            <Route path='/Main'  element={<Main/>} />
            <Route path='/test/taketest' element={<TakeTest/>}/>
            <Route path='/syllabus/taketest' element={<TakeTest/>}/>
            <Route path='/test/qp/:title/' element={<TestSeriesQP/>}/>
            
          </Routes>
          </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}


  //  <HomePage/>
  //     <SyllabusMain/>

export default App;
