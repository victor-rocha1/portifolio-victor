import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import Title from "../../components/Title/Title.jsx";
import ImgProject from "../../components/ImgProject/ImgProject.jsx";
import imgSpace from "./images/VRSpaceX.webp";
import imgValidador from "./images/validador.webp";
import imgCalculadoraPy from "./images/calculadorapy.webp";
import imgOneBitFlix from "./images/onebitflix.webp";
import imgJogodeDamas from "./images/jogo-de-dama.webp";
import imgCadastro from "./images/cadastro-laravel.webp";
import imgLinkHub from "./images/linkhub.webp";
import imgFeetCare from "./images/feetcare.webp";
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
            { threshold: 0.3 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    const projects = [
        { img: imgSpace, text: "VRSpaceX", github: "https://github.com/victor-rocha1/SpaceX-Bootstrap" },
        { img: imgJogodeDamas, text: "Jogo de Damas - Projeto Acadêmico", github: "https://github.com/victor-rocha1/jogo-de-damas" },
        { img: imgOneBitFlix, text: "OneBitFlix", github: "https://github.com/victor-rocha1/onebitflix" },
        { img: imgLinkHub, text: "LinkHub", github: "https://github.com/victor-rocha1/linkhub" },
        { img: imgFeetCare, text: "Premier Feet Care Podologia (Em andamento)", github: "https://github.com/victor-rocha1/premier_feet_care_podologia" },
        { img: imgCadastro, text: "Cadastro Laravel", github: "https://github.com/victor-rocha1/cadastro_laravel" },
        { img: imgValidador, text: "Validador de Email e Senha", github: "https://github.com/victor-rocha1/Validador-de-Email-e-Senha" },
        { img: imgCalculadoraPy, text: "Calculadora Python", github: "https://github.com/victor-rocha1/Calculadora-Python" },  
    ];

    return (
        <section className="projects" id="projects" ref={sectionRef}>
            <Title text="Meus " spantext="Projetos" />
            <div className="interface">
                {showSwiper && (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        effect="coverflow"
                        centeredSlides={true}
                        slidesPerView="auto"
                        grabCursor={true}
                        autoplay={{ delay: 4000 }}
                        initialSlide={Math.floor(projects.length / 2)}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 300,
                            modifier: 1.5,
                            slideShadows: false,
                        }}
                        pagination={{ clickable: true }}
                        navigation={{ enabled: true }}
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index} className="project-slide">
                                <ImgProject
                                    img={project.img}
                                    text={project.text}
                                    github={project.github}
                                    button={true}
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