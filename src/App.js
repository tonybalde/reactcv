import './App.css';
import Generalinfo from "./components/Generalinfo.jsx";
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <div class="info-btns-app">
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
        intro="I am a full-stack software engineer especially interested in building magical mobile experiences, scaling systems up, and shipping reliable applications. Note: use the summary when it makes sense."
        />
      <Skills 
        languages="HTML, CSS, JavaScript, TypeScript, Ruby"
        frameworks="React, Tailwind CSS, Ruby on Rails"
        platforms="Linux, Windows"
        tools="Git, Trello, Jira"
        databases="MySQL, MongoDB, PostgreSQL"
      />
      </div>

    </div>
  );
}

export default App;
