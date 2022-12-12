
import './App.css';
import Header from './components/header/Header';
import ImageProfile from "./components/proImage/imageProfile"
import ProfileData from './components/data/profileData';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import Skill from './components/pages/skills/skill';
// import Contact from "./components/pages/skill/skill"
import Contact from './components/pages/contact/Contact';
import Project from "./components/pages/projects/Project"
import Cv from "./components/pages/cv/Cv"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
   
 <Router>
  <Header/>
    <ImageProfile/>
 <ProfileData/>
 <Navbar/>

  <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route  exact path="/skill" element={<Skill/>}></Route>
    <Route exact path="/contact" element={<Contact/>}></Route>
    <Route exact path="/project" element={<Project/>}></Route>
    <Route exact path="/cv" element={<Cv/>}></Route>
  </Routes>
 </Router>
    </>
  );
}

export default App;
