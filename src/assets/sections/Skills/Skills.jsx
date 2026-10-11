import Title from "../../components/Title/Title";
import "./skills.css";
import git from "../../../../public/images/git.webp";
import github from "../../../../public/images/github.webp";
import js from "../../../../public/images/js.webp";
import html from "../../../../public/images/html.webp";
import css from "../../../../public/images/css.webp";
import react from "../../../../public/images/react.webp";
import python from "../../../../public/images/python.webp";
import postgres from "../../../../public/images/postgres.webp";
import sql from "../../../../public/images/sql.webp";
import php from "../../../../public/images/php.webp";
import laravel from "../../../../public/images/laravel.webp";

const techs = [
    { src: git, alt: "Git" },
    { src: github, alt: "GitHub" },
    { src: js, alt: "JavaScript" },
    { src: html, alt: "HTML5" },
    { src: css, alt: "CSS3" },
    { src: react, alt: "React" },
    { src: python, alt: "Python" },
    { src: postgres, alt: "PostgreSQL" },
    { src: sql, alt: "SQL" },
    { src: php, alt: "PHP" },
    { src: laravel, alt: "Laravel" },
];

function Skills() {
    return (
        <section className="skills" id="skills">
            <Title text="Habilidades" spantext="Gerais" />
            <br />

            <div className="interface">
                <div className="flex">
                    <div className="box">
                        <i className="bi bi-code-slash"></i>
                        <h2>Programação</h2>
                        <p>
                            No <span>Front End</span>, utilizo <span>JavaScript</span>, <span>HTML5</span>,
                            <span>CSS3</span> e <span>React</span>  desenvolvendo interfaces modernas e eficientes. <br />
                            No <span>Back End</span>, trabalho com <span>PHP</span> utilizando o framework
                            <span> CakePHP</span>, integrado  principalmente ao <span>Banco de Dados Oracle</span>.
                        </p>
                    </div>

                    <div className="box">
                        <i className="bi bi-fast-forward"></i>
                        <h2>Automação</h2>
                        <p>
                            Estudei previamente a ferramenta <span>n8n</span>, criando fluxos para otimizar processos manuais. Também possuo conhecimentos em <span>Python</span>, desenvolvendo <span>scripts para automatizar tarefas repetitivas simples</span>.
                        </p>

                    </div>

                    <div className="box">
                        <i className="bi bi-clipboard-data"></i>
                        <h2>Metodologias Ágeis</h2>
                        <p>
                            Tenho conhecimento nas metodologias <span>Scrum</span> e <span>Kanban</span>,
                            aplicando conceitos como <span>Análise de Requisitos</span>,
                            <span> Histórias de Usuário</span> e o uso do <span>GitLab </span>
                            para gestão e versionamento de código.
                        </p>
                    </div>
                </div>
            </div>

            <div className="icons">
                {techs.map((tech, index) => (
                    <img key={index} src={tech.src} alt={tech.alt} />
                ))}
            </div>
        </section>
    );
}

export default Skills;