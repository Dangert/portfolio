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

      <ProjectCard title={"Guess the Note"} text={"A cool game for those who want to challenge their relative pitch!\nEach round, the player is given a random musical note (a pitch) and the sooner they get it, the more points they win. They can go for harder levels and win even more points.\nThe top 10 scorers appear in the prestigious \"Hall of Fame\" table."}
      images={[
        pianoApp1,
        pianoApp2,
        pianoApp3,
      ]}
      links={[
        {name: 'website', href: 'https://guess-the-note.herokuapp.com/'},
        {name: 'UI code', href: 'https://github.com/Dangert/piano-app'},
        {name: 'server code', href: 'https://github.com/Dangert/piano-api'}
      ]}
      tools={[{name: 'ReactJS', class: 'react'}, {name: 'Node.js', class: 'nodejs'}, {name: 'PostgreSQL', class: 'postgres'}]}/>

    </div>
  );
}

export default App;
