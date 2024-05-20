import React from 'react';
import { Botao } from '../../../componentes-gerais/body/Botao';
import GitHubIcon from '@mui/icons-material/GitHub';

interface CardAlunosProps {
    image: string;
    title: string;
    cargo: string;
    curso: string;
    github: string;
}

export const CardAlunos: React.FC<CardAlunosProps> = ({ image, title, cargo, curso, github }) => {
  const handleGitHubClick = () => {
    window.open(github, '_blank');
  };

  return (
    <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 h-full w-full flex flex-col">
      <img src={image} className="w-full h-40 object-cover" alt={title} />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div className="flex-grow">
          <h5 className="text-2xl font-bold mb-4 text-white">{title}</h5>
          <hr className="mb-4 border-gray-600" />
          <p className="text-gray-400 mb-2"><span className="font-semibold text-white">Cargo:</span> {cargo}</p>
          <p className="text-gray-400 mb-2"><span className="font-semibold text-white">Curso:</span> {curso}</p>
        </div>
        <div className="mt-4">
          <Botao label="GitHub" icon={GitHubIcon} variant="text" onClick={handleGitHubClick} />
        </div>
      </div>
    </div>
  );
};
