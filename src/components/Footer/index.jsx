import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 p-6 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Navegação</h4>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-gray-400">Home</Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-gray-400">Todos os Cursos</Link>
                </li>
                <li>
                  <Link to="/my-courses" className="hover:text-gray-400">Meus Cursos</Link>
                </li>
                <li>
                  <Link to="/next-lesson" className="hover:text-gray-400">Próxima Aula</Link>
                </li>
                <li>
                  <Link to="/lesson-history" className="hover:text-gray-400">Histórico de Aulas</Link>
                </li>
                <li>
                  <Link to="/exercises" className="hover:text-gray-400">Todos os Exercícios</Link>
                </li>
                <li>
                  <Link to="/my-exercises" className="hover:text-gray-400">Meus Exercícios</Link>
                </li>
                <li>
                  <Link to="/documents" className="hover:text-gray-400">Documentos</Link>
                </li>
                <li>
                  <Link to="/extra-videos" className="hover:text-gray-400">Vídeos Extras</Link>
                </li>
                <li>
                  <Link to="/recommended-readings" className="hover:text-gray-400">Leituras Recomendadas</Link>
                </li>
                <li>
                  <Link to="/discussions" className="hover:text-gray-400">Discussões</Link>
                </li>
                <li>
                  <Link to="/my-participation" className="hover:text-gray-400">Minhas Participações</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Perfil</h4>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link to="/profile" className="hover:text-gray-400">Meu Perfil</Link>
                </li>
                <li>
                  <Link to="/settings" className="hover:text-gray-400">Configurações</Link>
                </li>
                <li>
                  <Link to="/logout" className="hover:text-gray-400">Sair</Link>
                </li>
              </ul>
            </nav>
            <h4 className="text-lg font-bold mt-6 mb-4">Contato</h4>
            <nav>
              <ul className="space-y-2">
                <li>Email: contato@cursoonline.com</li>
                <li>Telefone: (11) 1234-5678</li>
              </ul>
            </nav>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="hover:text-gray-400"><FaFacebook /></a>
              <a href="https://twitter.com" className="hover:text-gray-400"><FaTwitter /></a>
              <a href="https://instagram.com" className="hover:text-gray-400"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <hr className='my-8'/>
        <div className="text-center mt-6">
          <p>&copy; 2024 Curso Online. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
