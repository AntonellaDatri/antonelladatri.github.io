import './App.css';
import './css/styles.css';
import Navbar from './components/NavBar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills'
import Works from './components/Works'


function App() {
  return (
    <>
    {/* Navigation */}
        <Navbar/>
        {/* Page Content */}
        <div className="container-fluid p-0">
            {/* About */}
            <About/>
            <hr className="m-0" />
            {/* Experience */}
            <Experience/>
            <hr className="m-0" />
            {/* Education */}
            <Education/>
            <hr className="m-0" />
            {/* Skills */}
            <Skills/>
            <hr className="m-0" />
            {/* Works */}
            <Works/>
            <hr className="m-0" />
        </div>
        {/* Bootstrap core JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* Core theme JS */}
        <script src="js/scripts.js"></script>
    </>
  );
    
}

export default App;
 
