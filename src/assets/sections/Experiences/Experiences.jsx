import Title from '../../components/Title/Title';
import './experiences.css';
import logo_prodemge from "../../../../public/images/logo_prodemge.png"

function Experiences() {
    return (
        <>
            <section className="experiências" id='experiences'>
                <br /><br /><Title text="Minha " spantext="Experiência" /> <br />
                <div className="interface">
                    <div className="timeline">
                        <div className="card-content">
                            <img src={logo_prodemge} alt="logo_prodemge" />
                            <div className="text-content">
                                <small className='span1'>Out 2024 - <span className='span2'>Nov 2025</span></small>
                                <h5>Estagiário</h5>
                                <ul>
                                    <li>Uso de Metodologias Ágeis: Scrum e Kanban</li>
                                    <li>Escrita de Histórias de usuário e organização estruturada no GitLab</li>
                                    <li>Manutenção e evolução do <span className='span3'>Sistema de Envio de Correspondências de Trânsito</span>.
                                    </li>
                                </ul>
                                <small className='span1'>Dez 2025 - <span className='span2'>atual</span></small>
                                <h5>Assessor de T.I</h5>
                                <ul>
                                    <li>Manutenção e evolução do <span className='span3'>Sistema do Protocolo Digital</span>.
                                    </li>
                                    <li>Uso de CakePhP, Oracle e Bootstrap.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Experiences;