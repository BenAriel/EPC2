import { ColumnsGrid } from "../../componentes-gerais/body/Grid";
import { Header } from "../../componentes-gerais/header/Header";
import { InfoCard } from "./components/Infocard";
import { Footer } from "../../componentes-gerais/footer/Footer";
import { MediaCard } from "../../pages/home/components/MediaCard";
import Eventos from '../../images/Eventos.jpeg'; 
import Equipe from '../../images/equipe.jpeg'; 
import { useNavigate } from "react-router-dom";
import EPCLogo from "../../images/EPC-logo.jpeg";

export const Principal = () => {
    const navigate = useNavigate();
    const handleEventos = () => {
        navigate('/eventos');
    };
    const handleAlunos = () => {
        navigate('/alunos');
    };

    return (
        <div className="bg-gray-100 min-h-screen pt-16">
            <Header />
            <div className="p-4 mt-20">
                <InfoCard title="Escola piloto de Computação" image={EPCLogo} description1="é uma iniciativa da Universidade Federal Rural do Semi-Árido (UFERSA) dedicada a fornecer educação de alta qualidade em ciências da computação. Nossa missão é preparar os alunos para enfrentar os desafios do mundo tecnológico em constante evolução, oferecendo um currículo robusto e atualizado, ministrado por professores experientes e qualificados." description2="A EPC foi lançada em 2019 com o objetivo de criar um ambiente de aprendizagem inovador, onde os alunos pudessem desenvolver habilidades práticas e teóricas em computação. No entanto, devido à pandemia de COVID-19, as atividades foram suspensas em 2020 para garantir a segurança de todos os envolvidos. Felizmente, o projeto foi retomado em 2023, renovado e com ainda mais entusiasmo e compromisso em proporcionar uma educação transformadora." description3="Atualmente, a Escola Piloto de Computação da UFERSA oferece uma variedade de cursos e atividades, incluindo programação, desenvolvimento de software, inteligência artificial, e muito mais. Nossos alunos têm a oportunidade de participar de projetos práticos, estágios e pesquisas que os preparam para o mercado de trabalho e para futuras pesquisas acadêmicas." />
            </div>
            <div className="mr-16 ml-16 mt-60">
                <ColumnsGrid
                 gridSizes={[
                    { xs: 12, sm: 12,md: 6, lg: 6, xl: 6},
                    { xs: 12, sm: 12,md: 6, lg: 6, xl: 6},
    
                  ]} space={8}
                >
                    <MediaCard 
                        title="Eventos" 
                        onClick={handleEventos} 
                        description="Acompanhe os eventos do EPC e reveja todos os que já realizamos" 
                        image={Eventos}
                    />
                    <MediaCard 
                        title="Participantes" 
                        onClick={handleAlunos} 
                        description="Conheça mais sobre cada participante desse belo projeto!" 
                        image={Equipe}
                    />
                </ColumnsGrid>
            </div>
            <div className="mt-80">
                <Footer />
            </div>
        </div>
    );
};
