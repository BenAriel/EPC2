import React from "react";
import { Typography } from "@mui/material";
import { Footer } from "../../componentes-gerais/footer/Footer";
import { Header } from "../../componentes-gerais/header/Header";
import { InfoEvento } from "./components/InfoEvento";
import WtccReservaImage from "../../images/wtcc-resesrva.png";
import capcom1 from "../../images/Capcom1.jpg";
import capcom2 from "../../images/Capcom2.jpg";
import capcom3 from "../../images/Capcom3.jpg";
import capcom4 from "../../images/Capcom4.jpg";
import capcom5 from "../../images/Capcom5.jpg";
import capcom6 from "../../images/Capcom6.jpg";
import capcom7 from "../../images/Capcom7.jpg";
import capcom8 from "../../images/Capcom8.jpg";
import wtcc1 from "../../images/wtcc1.jpg";
import wtcc2 from "../../images/wtcc2.jpg";
import wtcc3 from "../../images/wtcc3.jpg";
import wtcc4 from "../../images/wtcc4.jpg";
import wtcc5 from "../../images/wtcc5.jpeg";
import wtcc6 from "../../images/wtcc6.jpeg";
import wtcc7 from "../../images/wtcc7.jpeg";
import wtcc8 from "../../images/wtcc8.jpeg";
import { Galeria } from "./components/Galeria";
import { Mostrar } from "./components/Mostrar"; // Importe o componente Mostrar

export const Eventos = () => {
  interface Imagem {
    imagem: string;
    titulo: string;
    descricao: string;
  }

  const imagens: Imagem[] = [
    {
      imagem: capcom1,
      titulo: "Capcom Robotica",
      descricao: "Mini Curso de Robótica oferecido durante o evento CAPCOM",
    },
    {
      imagem: capcom2,
      titulo: "Capcom Springboot",
      descricao: "Mini Curso de Springboot oferecido durante o evento CAPCOM",
    },
    {
      imagem: capcom3,
      titulo: "Capcom Laravel",
      descricao: "Mini Curso de Laravel oferecido durante o evento CAPCOM",
    },
    {
      imagem: wtcc1,
      titulo: "WTCC",
      descricao: "Imagem de um dos eventos WTCC organizados pelo EPC",
    },
    {
      imagem: wtcc2,
      titulo: "WTCC",
      descricao: "Imagem de um dos eventos WTCC organizados pelo EPC",
    },
    {
      imagem: wtcc3,
      titulo: "WTCC",
      descricao: "Imagem de um dos eventos WTCC organizados pelo EPC",
    },
    {
      imagem: capcom4,
      titulo: "Capcom minicurso",
      descricao: "Mini Curso de alguma coisa oferecido durante o evento CAPCOM",
    },
    {
      imagem: capcom5,
      titulo: "Capcom minicurso",
      descricao: "Mini Curso de alguma coisa oferecido durante o evento CAPCOM",
    },
    {
      imagem: capcom6,
      titulo: "Capcom minicurso",
      descricao: "Mini Curso de alguma coisa oferecido durante o evento CAPCOM",
    },
    {
      imagem: capcom7,
      titulo: "Capcom minicurso",
      descricao: "Mini Curso de alguma coisa oferecido durante o evento CAPCOM",
    },
    {
      imagem: capcom8,
      titulo: "Capcom minicurso",
      descricao: "Mini Curso de alguma coisa oferecido durante o evento CAPCOM",
    },
    {
      imagem: wtcc4,
      titulo: "WTCC",
      descricao: "Imagem de um dos eventos WTCC organizados pelo EPC",
    },
    {
      imagem: wtcc5,
      titulo: "WTCC",
      descricao: "Imagem de um dos eventos WTCC organizados pelo EPC",
    },
    {
      imagem: wtcc6,
      titulo: "WTCC",
      descricao: "Imagem de um dos eventos WTCC organizados pelo EPC",
    },
    {
      imagem: wtcc7,
      titulo: "WTCC",
      descricao: "Imagem de um dos eventos WTCC organizados pelo EPC",
    },
    {
      imagem: wtcc8,
      titulo: "WTCC",
      descricao: "Imagem de um dos eventos WTCC organizados pelo EPC",
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <Header />
      <div className="mt-40 mb-12 mx-16">
        <Typography variant="h2" align="center" gutterBottom>
          Eventos realizados por nós
        </Typography>
      </div>
      <div className="mt-40 mb-12 mx-16">
        <InfoEvento
          tituloEvento="IX WTCC"
          descricaoEvento="O Workshop Técnico-Científico de Computação visa despertar e estimular o interesse dos estudantes de Graduação e de Pós-Graduação em Computação na pesquisa científica sobre temas relacionados à ciência da computação. Assim como discutir temas atuais da área que são importantes tanto para estudantes quanto para profissionais de computação."
          dataEvento="05/06/2024"
          imagemEvento={WtccReservaImage}
        />
      </div>
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          Galeria de imagens
        </Typography>
      </div>
      <div className="flex justify-center mb-60">
        <Mostrar label="Mostrar Galeria">
          <Galeria imagens={imagens} />
        </Mostrar>
      </div>
      <Footer />
    </div>
  );
};

