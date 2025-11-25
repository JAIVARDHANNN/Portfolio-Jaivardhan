import { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
// import ParticlesBackground from "./components/ParticlesBackground";
import About from "./section/About";
import Contacts from "./section/Contacts";
import Experience from "./section/Experience";
import Footer from "./section/Footer";
import Home from "./section/Home";
import Projects from "./section/Projects";
import Skills from "./section/Skills";
import Testimonials from "./section/Testimonials";
import IntroAnimation from "./components/IntroAnimation";

//Importing the components depending upon there visuality on the screen
export default function App(){
  const[introDone , setIntroDone] = useState(false);
return (
  <>

  {!introDone && <IntroAnimation onFinish={()=> setIntroDone(true)} />}

    {introDone && (
  <div className="relative gradient text-white">
<CustomCursor/>
{/* <ParticlesBackground/> */}

    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Testimonials/>
    <Contacts/>
    <Footer/>
  </div>
  )}
  </>
)
}