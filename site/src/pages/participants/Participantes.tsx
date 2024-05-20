import React from 'react';
import { Footer } from "../../componentes-gerais/footer/Footer";
import { Header } from "../../componentes-gerais/header/Header";
import { CardAlunos } from "./components/CardAlunos";
import PedroImage from '../../images/pedro.jpeg';
import DanieleImage from '../../images/daniele.jpeg';
import JoasImage from '../../images/joas.jpg';
import PatrickImage from '../../images/patrick.jpeg';
import ClaraImage from '../../images/clara.jpg';
import RafaelImage from '../../images/rafael.jpg';
import JoaolImage from '../../images/joao.jpeg';
import ViniciuslImage from '../../images/vinicius.jpg';
import LucasImage from '../../images/lucas.jpg';
import { ColumnsGrid } from "../../componentes-gerais/body/Grid";
import { Typography } from '@mui/material';

export const Participantes = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <Header />
      <div className="mt-40 mb-120 mx-16">
        <Typography variant="h2" align="center" gutterBottom>
          Conheça cada um de nós melhor!
        </Typography>
      </div>
      <div className="mr-16 ml-16 mt-16">
        <ColumnsGrid
          gridSizes={[
            { xs: 12, sm: 6, md: 3 },
            { xs: 12, sm: 6, md: 3 },
            { xs: 12, sm: 6, md: 3 },
            { xs: 12, sm: 6, md: 3 },
            { xs: 12, sm: 6, md: 3 },
            { xs: 12, sm: 6, md: 3 },
            { xs: 12, sm: 6, md: 3 },
            { xs: 12, sm: 6, md: 3 },
            { xs: 12, sm: 6, md: 3 }
          ]}
        >
          <CardAlunos
            image={DanieleImage}
            title="Daniele Casillo"
            cargo="Coordenadora do Projeto"
            curso="ciência da computação (docente)"
            github="https://github.com/BenAriel"
          />
          <CardAlunos
            image={PedroImage}
            title="Pedro Figueira"
            cargo="Bolsista"
            curso="ciência da computação (5º período)"
            github="https://github.com/PepeuFBV"
          />
          <CardAlunos
            image={JoasImage}
            title="Joas Barros"
            cargo="Participante"
            curso="ciência da computação (3º período)"
            github="https://github.com/joas-barros"
          />
          <CardAlunos
            image={PatrickImage}
            title="Erick Patrick"
            cargo="Participante"
            curso="ciência da computação (7º período)"
            github="https://github.com/ErkPatrick"
          />
          <CardAlunos
            image={ClaraImage}
            title="Clara Letícia"
            cargo="Participante"
            curso="ciência da computação (3º período)"
            github="https://github.com/ClaraLeticia"
          />
          <CardAlunos
            image={RafaelImage}
            title="Rafael Lucas"
            cargo="Participante"
            curso="ciência da computação (7º período)"
            github="https://github.com/Rafaellucasaz"
          />
          <CardAlunos
            image={LucasImage}
            title="Lucas Silva"
            cargo="Participante"
            curso="ciência da computação (3º período)"
            github="https://github.com/Lucassilv7"
          />
          <CardAlunos
            image={ViniciuslImage}
            title="Vinicius Dantasso"
            cargo="Participante"
            curso="ciência da computação (3º período)"
            github="https://github.com/vinicius-dantasso"
          />
          <CardAlunos
            image={JoaolImage}
            title="Joao Victor"
            cargo="Participante"
            curso="ciência da computação (3º período)"
            github="https://github.com/BenAriel"
          />
        </ColumnsGrid>
      </div>
      <div className="mt-52">
        <Footer />
      </div>
    </div>
  );
};
