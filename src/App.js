import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import skillData from './skillsData';
import ProjectData from './projectData';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {

  const skillSet = skillData.map(skills  => {
    return(
         
    <Skill 
        details={skills}
    />
  )})

   
 const projects = ProjectData.map(info =>{
  return(
    <Project
    details={info}
 
    />
  )
})

  
  return (
    <div className=''>
      <Navbar />
      <Home />
      <About />
         
         
      <section className='mt-9 mb-32'>
      <h1 className="text-center mb-9 text-3xl text-gray-50">SKILLS</h1>
      <div className=' grid grid-cols-2 gap-4 text-center text-gray-50 p-4 w-full'>
      {skillSet}
      </div>
      </section >
      <section className='mt-9 mb-32 space-y-10'>
      <h1 className="text-center mb-7 text-3xl text-gray-50">PROJECTS</h1>
        {projects}
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
