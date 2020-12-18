import './App.css';
import below from './assets/below.png';
import ProjectCard from './components/ProjectCard'
import pianoApp1 from './assets/piano-app/1.png';
import pianoApp2 from './assets/piano-app/2.png';
import pianoApp3 from './assets/piano-app/3.png';

function App() {
  return (
    <div className="App">
      <div className="name-display">
        <div className="name-display-text">
          <h1 className="p-name-display">Hi,</h1>
          <h1 className="p-name-display">I'm Dan,</h1>
          <h1 className="p-name-display">a Software Developer.</h1>
        </div>
        <img className='below' alt='below' src={below}/>
      </div>
      <ProjectCard title={"title"} text={"this is a project"} images={[
        pianoApp1,
        pianoApp2,
        pianoApp3,
      ]}
      buttons={[]}/>
    </div>
  );
}

export default App;
