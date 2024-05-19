import { useNavigate } from "react-router-dom";
import { Abas } from "./Abas";
import EPCLogo from '../../images/EPC-logo.jpeg';

export const Header = () => {
    const navegar = useNavigate();

    const handleClickHome = () => {
        navegar('/home');
    };

    const handleClickEventos = () => {
        navegar('/eventos');
    };

    const handleClickParticipantes = () => {
        navegar('/alunos');
    };

    return (
        <header className="bg-blue-900 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-md">
            <img src={EPCLogo} alt="EPC Logo" className="h-12" />
            <nav className="flex-1 flex justify-end items-center space-x-10 ml-15 mr-20">
                <Abas label="Home" onClick={handleClickHome} />
                <Abas label="Eventos" onClick={handleClickEventos} />
                <Abas label="Participantes" onClick={handleClickParticipantes} />
            </nav>
        </header>
    );
};
