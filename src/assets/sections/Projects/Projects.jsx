import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import Title from '../../components/Title/Title.jsx';
import ImgProject from '../../components/ImgProject/ImgProject.jsx';
import Reveal from '../../components/Reveal/Reveal.jsx';
import { PROJECTS } from '../../../data/site';
import './projects.css';

function Projects() {
  const [showSwiper, setShowSwiper] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSwiper(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects section" id="projects" ref={sectionRef}>
      <Reveal>
        <p className="section-kicker" style={{ textAlign: 'center', width: '100%' }}>Seleção</p>
        <Title text="Meus " spantext="Projetos" />
      </Reveal>
      <div className="interface">
        {showSwiper && (
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            centeredSlides
            slidesPerView="auto"
            grabCursor
            initialSlide={Math.floor(PROJECTS.length / 2)}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 220,
              modifier: 1.2,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation
            keyboard={{ enabled: true }}
          >
            {PROJECTS.map((project) => (
              <SwiperSlide key={project.id} className="project-slide">
                <ImgProject
                  img={project.img}
                  text={project.name}
                  description={project.description}
                  github={project.github}
                  button
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default Projects;
