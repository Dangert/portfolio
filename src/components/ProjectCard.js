import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ProjectCard.css';

import { fadeIn, fadeInDown, fadeInUp } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
const ANIMATION_DURATION = '1s';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: ANIMATION_DURATION
  },
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: ANIMATION_DURATION
  },
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: ANIMATION_DURATION
  }
})

function ProjectCard(props) {
  const { title, text, images, links, tools } = props;
  const [mouseIsOver, setMouseOver] = useState(false);

  return (
    <div>
      <div className="project-card" onMouseEnter={() => {setMouseOver(true)}} onMouseLeave={() => {setMouseOver(false)}}>
        <Carousel autoPlay interval="2500" infiniteLoop showStatus={false} showArrows={false} showThumbs={false}>
        {
          images.map((img, i) => {
            return <div key={i}><img alt={title} className={mouseIsOver ? "blur" : ""} src={img}/></div>
          })
        }
        </Carousel>
        {
          mouseIsOver ?
            <div className={"layer " + css(styles.fadeIn)}>
              <h2 className={css(styles.fadeInDown)}>{title}</h2>
                <div className={"tools " + css(styles.fadeIn)}>
                {
                  tools.map((tool, j) => {
                    const toolStyle = StyleSheet.create({
                      toolFadeIn: {
                        animationName: fadeIn,
                        animationDuration: '' + 1*(tools.length - j) + 's'
                      }
                    })
                    return <span key={j} className={'tool ' + tool.class + ' ' + css(toolStyle.toolFadeIn)}>{tool.name}</span>
                  })
                }
                </div>
              <p className={css(styles.fadeIn)}>{text}</p>
              <div className={"links " + css(styles.fadeInUp)}>
                {
                  links.map((link, k) => {
                    return <a className='link' key={k} href={link.href}>{(link.withoutView ? '' : 'view ') + link.name}</a>
                  })
                }
              </div>
            </div>
          : null
        }
      </div>
      <div className='card-space'>
      </div>
    </div>
  );
}

export default ProjectCard;
