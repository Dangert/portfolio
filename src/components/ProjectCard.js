import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ProjectCard.css';

function ProjectCard(props) {
  const { title, text, images, links } = props;
  const [mouseIsOver, setMouseOver] = useState(false);

  return (
    <div className="project-card" onMouseEnter={() => {setMouseOver(true)}} onMouseLeave={() => {setMouseOver(false)}}>
      <Carousel>
      {
        images.map((img, i) => {
          return <div key={i}><img alt={title} className={mouseIsOver ? "blur" : ""} src={img}/></div>
        })
      }
      </Carousel>
      {
        mouseIsOver ?
          <div className="layer">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="links">
              {
                links.map((link, j) => {
                  return <a key={j} href={link.href}>{'view ' + link.name}</a>
                })
              }
            </div>
          </div>
        : null
      }
    </div>
  );
}

export default ProjectCard;
