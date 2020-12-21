import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ProjectCard.css';
import AOS from 'aos';
import "aos/dist/aos.css";
//import ReactCSSTransitionGroup from 'react-transition-group';

function ProjectCard(props) {
  const { title, text, images, links, tools } = props;
  const [mouseIsOver, setMouseOver] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" className="project-card" onMouseEnter={() => {setMouseOver(true)}} onMouseLeave={() => {setMouseOver(false)}}>
      <Carousel autoPlay interval="2500" infiniteLoop showStatus={false} showThumbs={false}>
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
              <div className='tools'>
              {
                tools.map((tool, j) => {
                  return <span key={j} className={'tool ' + tool.class}>{tool.name}</span>
                })
              }
              </div>
            <p>{text}</p>
            <div className="links">
              {
                links.map((link, k) => {
                  return <a className='link' key={k} href={link.href}>{'view ' + link.name}</a>
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
