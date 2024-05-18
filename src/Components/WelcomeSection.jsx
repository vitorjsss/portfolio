import React from 'react';
import codingImg from '../assets/coding.jpg';

const WelcomeSection = () => {
    return (
        <section id="welcome-section">
            <br />
            <br />
            <div>
                <h1>Olá, Eu sou <span id="name-span">Vitor</span></h1>
                <em>
                    <h3>Desenvolvedor Web e Mobile</h3>
                </em>
            </div>
            <img src={codingImg}></img>
        </section>
    );
};

export default WelcomeSection;