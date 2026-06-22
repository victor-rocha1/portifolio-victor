import Title from '../../components/Title/Title';
import './experiences.css';
import logo_prodemge from "../../../../public/images/logo_prodemge.png"

function Experiences() {
    return (
        <>
            <section className="experiências" id='experiences'>
                <Title text="Minha " spantext="Experiência" />

                <div className="timeline-container">
                    {/* Esta é a linha que atravessa o centro */}
                    <div className="timeline-line"></div>

                    {/* Card 1: Assessor de T.I (Lado Direito) */}
                    <div className="timeline-item right">
                        <div className="timeline-dot"></div>

                        <div className="timeline-card">
                            <div className="card-header">
                                <small className='span1'>Dez 25 - <span className='span2'>atual</span></small>
                                <img src={logo_prodemge} alt="Logo Prodemge" className='img-card-timeline' />
                            </div>
                            <h5>Assessor de T.I</h5>
                            <ul>
                                <li>Manutenção e evolução do <span className='span3'>Sistema do Protocolo Digital</span>.</li>
                                <li>Manutenção e evolução do <span className='span3'>Sistema de Cadastro de Despachantes</span>.</li>
                                <li>Uso de CakePhP, Laravel, Oracle e Bootstrap.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Estagiário (Lado Esquerdo)  */}
                    <div className="timeline-item left">
                        <div className="timeline-dot"></div>
                        <div className="timeline-card">
                            <div className="card-header">
                                <small className='span1'>0ut 24 - <span className='span2'>Nov 25</span></small>
                                <img src={logo_prodemge} alt="Logo Prodemge" className='img-card-timeline' />
                            </div>
                            <h5>Estagiário</h5>
                            <ul>
                                <li>Uso de Metodologias Ágeis: Scrum e Kanban</li>
                                <li>Escrita de Histórias de usuário e organização estruturada no GitLab</li>
                                <li>Manutenção e evolução do <span className='span3'>Sistema de Envio de Correspondências de Trânsito</span>.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experiences;