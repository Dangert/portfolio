import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ProjectCard.css';

function ProjectCard(props) {
  const { title, text, images, buttons } = props;
  return (
    <div className="project-card">
      <Carousel>
      {
        images.map(img => {
          return <div><img src={img}/></div>
        })
      }
      </Carousel>
    </div>
  );
}

export default ProjectCard;
