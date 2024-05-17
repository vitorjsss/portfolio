import React from 'react';
import tempConverterImg from '/react/portfolio/src/assets/TempConverter.jpeg';
import rockScissorsPaperImg from '/react/portfolio/src/assets/RockScissorsPaper.jpeg';
import guessTheFlagImg from '/react/portfolio/src/assets/GuessTheFlag.jpeg';

const Projects = () => {
    return (
        <section id="projects">
            <h1 id="project-title">Aqui estão alguns dos meus projetos:</h1>
            <section id="projects-figures">
                <figure className="project-tile">
                    <img src={tempConverterImg} alt="Projeto Conversor de Temperatura" />
                    <a href="https://github.com/vitorjsss/toDoList">
                        <figcaption>Temperature Converter</figcaption>
                    </a>
                </figure>
                <figure className="project-tile">
                    <img src={rockScissorsPaperImg} alt="Projeto Pedra Papel Tesoura" />
                    <figcaption>
                        <a href="https://github.com/vitorjsss/RockScissorPaper">Rock Paper Scissor</a>
                    </figcaption>
                </figure>
                <figure className="project-tile">
                    <img src={guessTheFlagImg} alt="Projeto Adivinhar Bandeiras" />
                    <figcaption>
                        <a href="https://github.com/vitorjsss/Guess-The-Flag">Guess The Flag</a>
                    </figcaption>
                </figure>
            </section>
        </section>
    );
};

export default Projects;