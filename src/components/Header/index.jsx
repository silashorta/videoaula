import React from 'react';
import { Link } from 'react-router-dom';

import { IoExitOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";



const Header = () => {
  return (
    <nav className="flex justify-between bg-zinc-800 p-4">
      <div className='text-white flex items-center'>Logo</div>
      <ul className="flex gap-8">
        <li>
          <Link to="/" className="text-white block py-2">Home</Link>
        </li>
        <li className="relative group">
          <nav className="text-white block py-2 cursor-pointer">Cursos</nav>
          <ul className="absolute left-0 top-8 hidden w-max group-hover:block bg-zinc-700 mt-1 rounded-lg text-sm">
            <li>
              <Link to="/courses" className="block px-4 py-2 text-white hover:bg-zinc-600 rounded-lg">Todos os Cursos</Link>
            </li>
            <li>
              <Link to="/my-courses" className="block px-4 py-2 text-white hover:bg-zinc-600 rounded-lg">Meus Cursos</Link>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <nav className="text-white block py-2 cursor-pointer">Aulas</nav>
          <ul className="absolute left-0 top-8 hidden w-max group-hover:block bg-zinc-700 mt-1 rounded-lg text-sm">
            <li>
              <Link to="/next-lesson" className="block px-4 py-2 text-white hover:bg-zinc-600 rounded-lg">Próxima Aula</Link>
            </li>
            <li>
              <Link to="/lesson-history" className="block px-4 py-2 text-white hover:bg-zinc-600 rounded-lg">Histórico de Aulas</Link>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <nav className="text-white block py-2 cursor-pointer">Exercícios</nav>
          <ul className="absolute left-0 top-8 hidden w-max group-hover:block bg-zinc-700 mt-1 rounded-lg text-sm">
            <li>
              <Link to="/exercises" className="block px-4 py-2 text-white hover:bg-zinc-600 rounded-lg">Todos os Exercícios</Link>
            </li>
            <li>
              <Link to="/my-exercises" className="block px-4 py-2 text-white hover:bg-zinc-600 rounded-lg">Meus Exercícios</Link>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <nav className="text-white block py-2 cursor-pointer">Recursos</nav>
          <ul className="absolute right-0 top-8 hidden w-max group-hover:block bg-zinc-700 mt-1 rounded-lg text-sm">
            <li>
              <Link to="/documents" className="block px-4 py-2 text-white hover:bg-zinc-600 rounded-lg">Documentos</Link>
            </li>
            <li>
              <Link to="/extra-videos" className="block px-4 py-2 text-white hover:bg-zinc-600 rounded-lg">Vídeos Extras</Link>
            </li>
            <li>
              <Link to="/recommended-readings" className="block px-4 py-2 text-white hover:bg-zinc-600 rounded-lg">Leituras Recomendadas</Link>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <nav className="text-white block py-2 cursor-pointer">Fórum</nav>
          <ul className="absolute right-0 top-8 hidden w-max group-hover:block bg-zinc-700 mt-1 rounded-lg text-sm">
            <li>
              <Link to="/discussions" className="block px-4 py-2 text-white hover:bg-zinc-600 rounded-lg">Discussões</Link>
            </li>
            <li>
              <Link to="/my-participation" className="block px-4 py-2 text-white hover:bg-zinc-600 rounded-lg">Minhas Participações</Link>
            </li>
          </ul>
        </li>
        <li className="relative group flex items-center">
          <nav className="flex items-center gap-2 text-white cursor-pointer">
            <LuUser className='w-7 h-7 p-1 text-2xl bg-zinc-500 rounded-full'/> 
            <span className='text-xs font-bold'>Silas Horta da Silva</span>
          </nav>
          <ul className="absolute right-0 top-8 hidden w-max group-hover:block bg-zinc-700 mt-1 rounded-lg text-sm">
            <li>
              <Link to="/profile" className="block px-4 py-2 text-white hover:bg-zinc-500 rounded-lg">Meu Perfil</Link>
            </li>
            <li>
              <Link to="/settings" className="block px-4 py-2 text-white hover:bg-zinc-500 rounded-lg">Configurações</Link>
            </li>
            <hr className='mx-4' />
            <li>
              <Link to="/logout" className="flex items-center gap-2 px-4 py-2 text-white hover:bg-zinc-600 rounded-lg"><IoExitOutline /> Sair</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
