import { ColumnsGrid } from "../../componentes-gerais/body/Grid";
import { Header } from "../../componentes-gerais/header/Header";
import { InfoCard } from "./components/Infocard";
import { Footer } from "../../componentes-gerais/footer/Footer";
import { MediaCard } from "../../pages/home/components/MediaCard";
import Eventos from '../../images/Eventos.jpeg'; 
import Equipe from '../../images/equipe.jpeg'; 
import { useNavigate } from "react-router-dom";

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
                <InfoCard />
            </div>
            <div className="mr-16 ml-16 mt-36">
                <ColumnsGrid
                 gridSizes={[
                    { xs: 12, md: 6 },
                    { xs: 12, md: 6 },
    
                  ]}
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
            <div className="mt-52">
                <Footer />
            </div>
        </div>
    );
};
