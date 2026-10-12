import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import Title from '../../components/Title/Title.jsx';
import { projectsData } from '../../../data/projectsData.js';
import './projects.css';

function Projects() {
  return (
    <section className="projects-carousel-section" id="projects">
      <div className="interface">
        <Title text="Meus" spantext="Projetos" tag="Destaques em Foco" />

        <div className="carousel-wrapper">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Keyboard]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView="auto"
            grabCursor={true}
            keyboard={{ enabled: true }}
            initialSlide={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 220,
              modifier: 1.4,
              slideShadows: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              nextEl: '.swiper-btn-next-custom',
              prevEl: '.swiper-btn-prev-custom',
            }}
            className="projects-swiper"
          >
            {projectsData.slice(0, 8).map((project) => (
              <SwiperSlide key={project.id} className="carousel-slide-item">
                <div className="carousel-card">
                  <div
                    className="carousel-card-img"
                    style={{ backgroundImage: `url(${project.img})` }}
                  >
                    <div className="carousel-card-overlay">
                      <span className="carousel-card-category">{project.category}</span>
                      <h3 className="carousel-card-title">{project.text}</h3>
                      <p className="carousel-card-desc">{project.desc}</p>

                      <div className="carousel-card-footer">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="carousel-github-btn"
                            title="Ver código no GitHub"
                          >
                            <i className="bi bi-github"></i>
                            <span>Repositório</span>
                          </a>
                        )}
                        <a href="#portfolio" className="carousel-details-btn">
                          <span>Ver Página</span>
                          <i className="bi bi-arrow-down-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <button
            className="swiper-btn-prev-custom"
            aria-label="Projeto anterior"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="swiper-btn-next-custom"
            aria-label="Próximo projeto"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;