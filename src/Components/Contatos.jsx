import React from 'react';
import gitLogo from '../assets/github-logo-240.png';
import linkedinLogo from '../assets/linkedin-square-logo-240.png';
import LinhaQuebra from './LinhaQuebra';

function Contatos() {
    return (
        <section>
            <div id="contatos">
                <h1>Me contate</h1>
                <div id="contatosInfo">
                    <div className="container mt-3 contactContent">
                        <h2>Me envie um email!</h2>
                        <div>
                            <form>
                                <input type="text" className="form-control form-control-lg" placeholder="Nome" />
                                <input type="email" className="form-control mt-3" placeholder="Email" />
                                <input type="text" className="form-control mt-3" placeholder="Assunto" />
                                <div className="mb-3 mt-3">
                                    <textarea className="form-control" rows="5" id="comment" name="text" placeholder="Detalhes"></textarea>
                                </div>
                            </form>
                            <button type="button" className="btn btn-success mt-3">Contate-Me</button>
                        </div>
                    </div>
                    <div id="icon-container">
                        <h2 id="info">Acompanhe Meu Trabalho Mais De Perto...</h2>
                        <div>
                            {/* GitHub SVG */}
                            <div>
                                <a id="profile-link" target="_blank" href="https://github.com/vitorjsss/vitorjsss">
                                    <img className="icon" src={gitLogo}></img>
                                    <p>Github</p>
                                </a>
                            </div>

                            {/* LinkedIn SVG */}
                            <div>
                                <a href="https://www.linkedin.com/in/vitorjsss/">
                                    <img className="icon" src={linkedinLogo}></img>
                                    <p>Linkedin</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LinhaQuebra />
            <footer>
                <p>Desenvolvido por: Arthur Marques, Vítor Raimundo & Vitor Soares</p>
            </footer>
        </section>
    );
}

export default Contatos;
