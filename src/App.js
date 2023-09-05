import './App.css';
import Generalinfo from "./components/Generalinfo.jsx";

function App() {
  return (
    <div className="App">
      <Generalinfo 
        city="Los Angeles"
        country="United States"
        email="johndoe@email.com"
        fullName="John Doe"
        github="https://www.github.com/johndoe"
        linkedin="https://www.linkedin.com/in/johndoe" 
        intro="I am a full-stack software engineer especially interested in building magical mobile experiences, scaling systems up, and shipping reliable applications. Note: use the summary when it makes sense."
        />



    </div>
  );
}

export default App;
