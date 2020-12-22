import React, { useEffect } from "react";
import './App.css';
import below from './assets/below.png';
import ProjectCard from './components/ProjectCard';
import AOS from 'aos';
import "aos/dist/aos.css";
import pianoApp1 from './assets/piano-app/1.png';
import pianoApp2 from './assets/piano-app/2.png';
import pianoApp3 from './assets/piano-app/3.png';

function App(props) {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

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

      <div data-aos="fade-up">
        <ProjectCard title={"Guess the Note"} text={"A cool game for those who want to challenge their relative pitch!\nEach round, the player is given a random musical note (a pitch) and they need to find it on the piano. The least guesses it takes them, the more points they win. They can go for more difficult levels and win even more points.\nThe ten best scorers get a spot in the prestigious \"Top 10\"."}
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

      <div data-aos="fade-up">
        <ProjectCard title={"Guess the Note"} text={"A cool game for those who want to challenge their relative pitch!\nEach round, the player is given a random musical note (a pitch) and they need to find it on the piano. The least guesses it takes them, the more points they win. They can go for more difficult levels and win even more points.\nThe ten best scorers get a spot in the prestigious \"Top 10\"."}
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

    </div>
  );
}

export default App;
