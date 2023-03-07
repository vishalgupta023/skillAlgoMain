
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import EducatorSection from './Components/EducatorSection';
import Home from "./Home";
// import Browse from "./Components/Browse/Browse.jsx";
// import Practise from "./Components/Practise/Practise.jsx";
// import Test from "./Components/Test/Test.jsx";
// import Syllabus from "./Components/Syllabus/Syllabus.jsx";


function Main() {
  return (
    <Home/>
    // <Router>
    //       <Routes>
    //         <Route path='/' element={<Home/>}/>
    //         <Route path='/educator' element={<EducatorSection/>}/>
    //         <Route path='/browse' element={<Browse/>}/>
    //         <Route path='/practise' element={<Practise/>}/>
    //         <Route path='/test' element={<Test/>}/>
    //         <Route path='/syllabus' element={<Syllabus/>}/>
    //       </Routes>
    // </Router>

  );
}

export default Main;