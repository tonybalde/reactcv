
import './App.css';
import './styles/Print.css'; // Import the print CSS file
import appLogo from "./images/resumeLogo.png";
import Generalinfo from "./components/Generalinfo.jsx";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Works from './components/Works';
import Education from './components/Education';
import { FaPrint } from 'react-icons/fa';

function App() {
  const handlePrint = () => {
    window.print(); // This will print the content inside .print-content
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="info-btns-app">
          <img src={appLogo} alt="" className="logo-app" />
          <h1>Dev.CV</h1>
          <h3>"A free CV template for Devs..."</h3>
          <p><strong>How it works?</strong></p>
          <p className="instrucctions-para"><span class="bold-text"><strong>Easy</strong>. You can click any item in each secction, like your <strong>name</strong>, a <strong>language</strong> in Skills, <strong>a company name</strong> and <strong>the start and finish dates</strong> in Work Experience or your <strong>Degree title and University</strong> in Education. If you want to add a Project, a Work Experience or a Degree in Education just click in the <strong>Add</strong> button.</span></p>
          <p className="instructions-para"><span class="bold-text">You are not sure if you wanted to add that last Project? No worries, just click <strong>Remove Project</strong>. Easy, right?</span></p>
          <p className="instructions-para"><span class="bold-text">Finally you can <strong>print</strong> or <strong>save a PDF file</strong></span> of your CV with the following button:</p>
          <div className="pdf-print-btn-container">
            <FaPrint className="print-pdf-btns" onClick={handlePrint} />
          </div>
        </div>

        <div className="main-cv">
          <div className="print-content"> {/* Container for printing */}
            <Generalinfo 
              city="Los Angeles"
              country="United States"
              email="johndoe@email.com"
              fullName="John Doe"
              github="https://www.github.com/johndoe"
              linkedin="https://www.linkedin.com/in/johndoe" 
            />
            <Skills 
              languages="HTML, CSS, JavaScript, TypeScript, Ruby"
              frameworks="React, Tailwind CSS, Ruby on Rails"
              platforms="Linux, Windows"
              tools="Git, Trello, Jira"
              databases="MySQL, MongoDB, PostgreSQL"
            />
            <Projects />
            <Works />
            <Education />
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
