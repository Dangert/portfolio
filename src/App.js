import React, { useEffect } from "react";
import './App.css';
import below from './assets/below.png';
import hand from './assets/hand.png';
import ProjectCard from './components/ProjectCard';
import AOS from 'aos';
import "aos/dist/aos.css";
import pianoApp1 from './assets/piano-app/1.png';
import pianoApp2 from './assets/piano-app/2.png';
import pianoApp3 from './assets/piano-app/3.png';
import postImageApp1 from './assets/post-image-app/1.png';
import postImageApp2 from './assets/post-image-app/2.png';
import postImageApp3 from './assets/post-image-app/3.png';
import postImageApp4 from './assets/post-image-app/4.png';
import postImageApp5 from './assets/post-image-app/5.png';
import postImageApp6 from './assets/post-image-app/6.png';
import blinkingApp1 from './assets/blinking-app/1.png';
import blinkingApp2 from './assets/blinking-app/2.png';
import blinkingApp3 from './assets/blinking-app/3.png';
//import animalSoundApp1 from './assets/animal-sound-app/1.gif';
import animalSoundApp2 from './assets/animal-sound-app/2.gif';

function App(props) {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <div className="name-display">
        <div className="name-display-text">
          <div className="hi-container">
            <h1 className="p-name-display">Hi</h1>
            <img className="icon hand" alt="hand" src={hand}/>
          </div>
          <h1 className="p-name-display">I'm Dan,</h1>
          <h1 className="p-name-display">a Software Developer.</h1>
        </div>
        <img className="icon below" alt="below" src={below}/>
      </div>

      {/*Toddler Hearing Test*/}
      <div data-aos="fade-up">
          <ProjectCard title={"Toddler Hearing Test"} text={"This still-in-development app is part of a collaboration with Tunefork.\nIt is designed to be an interactive game for toddlers, with sounds and animations, that will serve as a valid hearing test."}
        images={[
          animalSoundApp2
        ]}
        links={[
          {name: 'about Tunefork', href: 'https://www.tunefork.co.il/', withoutView: true}
        ]}
        tools={[{name: 'React Native', class: 'react-native'}, {name: 'Android', class: 'android'}]}/>
      </div>

      {/*No Blink*/}
      <div data-aos="fade-up">
          <ProjectCard title={"No Blink"} text={"It's the good old blinking contest - but now you don't need a partner.\nWith the help of face detection packages, this mobile app will start the clock for you to see how long you can keep your eyes open.\nJust don't blink and try to top your last record."}
        images={[
          blinkingApp1,
          blinkingApp2,
          blinkingApp3,
        ]}
        links={[
          //{name: 'app', href: 'https://guess-the-note.herokuapp.com/'},
          {name: 'code', href: 'https://github.com/Dangert/blinking-app'}
        ]}
        tools={[{name: 'React Native', class: 'react-native'}]}/>
      </div>

      {/*Guess the Note*/}
      <div data-aos="fade-up">
          <ProjectCard title={"Guess the Note"} text={"A cool game for those who want to challenge their relative pitch!\nEach round, the player is given a random musical note (pitch) to find on the piano. The fewer guesses they make, the more points they win. They can try harder levels and win even more points.\nThe ten best scorers get a spot in the prestigious \"Top 10\"."}
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

      {/*Post with Image*/}
      <div data-aos="fade-up">
        <ProjectCard title={"Post with Image"} text={"This tool lets you find the perfect picture for your social media post.\nThe algorithm performs some natural language processing (NLP) on the text and then queries the Unsplash API. If you find a good picture but don't want to upload your post yet, you can save it for later."}
        images={[
          postImageApp1,
          postImageApp2,
          postImageApp3,
          postImageApp4,
          postImageApp5,
          postImageApp6
        ]}
        links={[
          {name: 'UI code', href: 'https://github.com/Dangert/post-image-app'},
          {name: 'server code', href: 'https://github.com/Dangert/post-image-api'}
        ]}
        tools={[{name: 'ReactJS', class: 'react'}, {name: 'Node.js', class: 'nodejs'}, {name: 'PostgreSQL', class: 'postgres'}]}/>
      </div>

    </div>
  );
}

export default App;
