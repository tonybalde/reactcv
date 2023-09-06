import './App.css';
import appLogo from "./images/resumeLogo.png";
import Generalinfo from "./components/Generalinfo.jsx";
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <div class="info-btns-app">
        <img src={appLogo} alt="" className="logo-app" />
        <h2>CV React App</h2>
        <p>Instructions: </p>
      </div>

      <div className="main-cv">
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
      </div>

    </div>
  );
}

export default App;
