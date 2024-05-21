import {Typography } from "@mui/material";

interface InfoEventoProps {
    tituloEvento: string;
    descricaoEvento: string;
    dataEvento: string;
    imagemEvento: string;
}

export const InfoEvento: React.FC<InfoEventoProps> = (props) => {
    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <div className="mb-8">
                <Typography variant="h2" align="center" gutterBottom>
                    {props.tituloEvento}
                </Typography>
            </div>
            <div className="mb-8 flex justify-center">
                <img
                    src={props.imagemEvento}
                    alt={`Imagem do evento ${props.tituloEvento}`}
                    className="max-w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            <div className="mb-8">
                <Typography variant="body1" align="center" gutterBottom>
                    {props.descricaoEvento}
                </Typography>
            </div>
            <div>
                <Typography variant="body1" align="center" gutterBottom>
                    {props.dataEvento}
                </Typography>
            </div>
        </div>
    );
}
