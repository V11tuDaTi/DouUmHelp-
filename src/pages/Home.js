import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Bem-vindo ao DouUmHelp!</h1>
        <p>Conectamos freelancers e clientes para trabalhos rápidos e confiáveis.</p>
      </section>
      <section className="about">
        <h2>Sobre o Projeto</h2>
        <p>
          Nosso objetivo é facilitar a vida de quem precisa de ajuda em diversas áreas,
          conectando pessoas de forma segura e eficiente.
        </p>
      </section>
    </div>
  );
};

export default Home;
