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
      <ProjectCard title={"Title"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
      images={[
        pianoApp1,
        pianoApp2,
        pianoApp3,
      ]}
      links={[
        {name: 'website', href: 'https://guess-the-note.herokuapp.com/'},
        {name: 'UI code', href: 'https://github.com/Dangert/piano-app'}]}
      tools={[{name: 'React', class: 'react'}, {name: 'Node.js', class: 'nodejs'}, {name: 'PostreSQL', class: 'postgres'}]}/>
    </div>
  );
}

export default App;
