import { Typography } from "@mui/material";
import { Footer } from "../../componentes-gerais/footer/Footer";
import { Header } from "../../componentes-gerais/header/Header";
import WtccLogo from "../../images/WTCC-LOGO.svg";
import CapcomLogo from "../../images/capcom-logo.png";
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
import { Mostrar } from "./components/Mostrar";
import Box from '@mui/material/Box';
import { InfoCard } from "../home/components/Infocard";

interface Imagem {
  imagem: string;
  titulo: string;
  descricao: string;
}

export const Eventos = () => {
  const handleWTCCClick = () => {
  window.open("https://wtcc.com.br/", '_blank');
  };
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
    <div className="bg-gray-100 min-h-screen pt-16 flex flex-col">
      <Header />
      <div className="mt-16 mb-12 mx-16">
        <Typography variant="h2" align="center" gutterBottom>
          Eventos realizados por nós
        </Typography>
      </div>
      <div className="mt-16 mb-12 p-4">
        <InfoCard
          title="IX WTCC"
          description1="O Workshop Técnico-Científico de Computação visa despertar e estimular o interesse dos estudantes de Graduação e de Pós-Graduação em Computação na pesquisa científica sobre temas relacionados à ciência da computação. Assim como discutir temas atuais da área que são importantes tanto para estudantes quanto para profissionais de computação."
          data='2024-06-05'
          description2="Durante o evento, os participantes terão acesso a uma programação diversificada, incluindo cerimônia de abertura, palestras, mesas-redondas, minicursos, hackathon e maratona de programação. Além disso, ao participar dos minicursos, os alunos poderão obter CERTIFICADOS, enriquecendo seus currículos e ampliando suas habilidades na área. Não perca essa oportunidade de aprendizado e networking! 🚀🔍🎓"
          image={WtccLogo}
          terBotao={true}
          titleBotao="iscrever-se"
          onClick={handleWTCCClick}
        />
      </div>
      <div className="mt-16 mb-12 p-4">
        <InfoCard
          title="Capcom"
          description1="A CAPCOM, ou 'Semana de Capacitação em Computação da UFERSA', é um evento anual organizado pela Universidade Federal Rural do Semi-Árido. Durante toda a semana, são oferecidos diversos minicursos ministrados por professores e alunos, abrangendo uma ampla gama de temas na área de computação. O objetivo é proporcionar aos participantes uma imersão intensiva em conhecimentos técnicos e práticos, estimulando o aprendizado contínuo e a troca de experiências entre os membros da comunidade acadêmica e profissional."
          data='2023-11-29'
          description2="Participar da CAPCOM é uma excelente oportunidade para ampliar suas habilidades e conhecimentos em computação. Além de enriquecer seu currículo, você terá a chance de aprender com especialistas, explorar novas tecnologias e tendências do mercado, e fazer networking com colegas e profissionais da área. É um momento valioso para desenvolvimento pessoal e profissional, que pode abrir portas para futuras oportunidades e colaborações."
          image={CapcomLogo} 
          terBotao={true}
          titleBotao="iscrever-se"
          onClick={handleWTCCClick}
        />
      </div>
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          Galeria de imagens
        </Typography>
      </div>
      <Box
        sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'flex'
          },
          justifyContent: 'center',
          mb: 12
        }}
      >
        <Mostrar label="Mostrar Galeria">
          <Galeria imagens={imagens} />
        </Mostrar>
      </Box>
      <Footer />
    </div>
  );
};