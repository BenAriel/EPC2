import EPCLogo from "../../../images/EPC-logo.jpeg";

export const InfoCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 h-auto mx-auto mt-8">
            <img src={EPCLogo} alt="EPC Logo" className="h-32 w-32 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-center mb-4">Escola Piloto de Computação</h2>
            <p className="text-center text-gray-700 text-lg">
                A Escola Piloto de Computação (EPC) é uma iniciativa da Universidade Federal Rural do Semi-Árido (UFERSA) dedicada a fornecer educação de alta qualidade em ciências da computação. Nossa missão é preparar os alunos para enfrentar os desafios do mundo tecnológico em constante evolução, oferecendo um currículo robusto e atualizado, ministrado por professores experientes e qualificados.
            </p>
            <p className="text-center text-gray-700 text-lg mt-4">
                A EPC foi lançada em 2019 com o objetivo de criar um ambiente de aprendizagem inovador, onde os alunos pudessem desenvolver habilidades práticas e teóricas em computação. No entanto, devido à pandemia de COVID-19, as atividades foram suspensas em 2020 para garantir a segurança de todos os envolvidos. Felizmente, o projeto foi retomado em 2023, renovado e com ainda mais entusiasmo e compromisso em proporcionar uma educação transformadora.
            </p>
            <p className="text-center text-gray-700 text-lg mt-4">
                Atualmente, a Escola Piloto de Computação da UFERSA oferece uma variedade de cursos e atividades, incluindo programação, desenvolvimento de software, inteligência artificial, e muito mais. Nossos alunos têm a oportunidade de participar de projetos práticos, estágios e pesquisas que os preparam para o mercado de trabalho e para futuras pesquisas acadêmicas.
            </p>
        </div>
    );
};
