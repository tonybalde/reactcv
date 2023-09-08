
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
      <div className="info-btns-app">
         <img src={appLogo} alt="" className="logo-app" />
         <h1>Dev.CV</h1>
         <h3>"A free CV template for Devs..."</h3>
         <p><strong>How it works?</strong></p>
         <p className="instrucctions-para">Easy. You can click in each item you want to edit, like your name, your city, your email, your Projects names, your Education or your start and finish dates. If you want to add a Project, a Work Experience or a Degree in Education just click in the Add button. </p>
         <p className="instrucctions-para">Are you not sure if you wanted to add that last Project? No worries, just click Remove Project. Easy, right?</p>
         <p className="instrucctions-para">Finally you can print or save a pdf file of your CV with the following button:</p>
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
  );
}

export default App;
