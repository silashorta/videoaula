import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <main className="flex-1 p-8">
        {/* Hero Section */}
        <section className="bg-cover bg-center h-64 mb-8" style={{ backgroundImage: 'url(hero-banner.jpg)' }}>
          <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
            <h1 className="text-4xl text-white font-bold">Bem-vindo ao Nosso Curso Online</h1>
            <p className="text-white mt-2">Aprenda novas habilidades e melhore suas competências</p>
            <Link to="/courses" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">Comece Agora</Link>
          </div>
        </section>

        {/* Cursos Populares */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Cursos Populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-80 w-60">
              <img src="course-thumbnail.jpg" alt="Course Thumbnail" className="w-full h-36 object-cover" />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold">Course Title</h3>
                  <p className="text-sm text-gray-700">Instructor Name</p>
                  <p className="text-sm text-yellow-500">★★★★☆</p>
                </div>
                <Link to="/course-details" className="block mt-2 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2">Ver Curso</Link>
              </div>
            </div>
            {/* Repeat for other popular courses */}
          </div>
        </section>

        {/* Categorias Populares */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Categorias Populares</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-40 flex items-center justify-center">
              <Link to="/category-1" className="text-center">
                <img src="category-icon.jpg" alt="Category Icon" className="w-16 h-16 mx-auto mb-2" />
                <p className="text-lg font-semibold">Categoria 1</p>
              </Link>
            </div>
            {/* Repeat for other categories */}
          </div>
        </section>

        {/* Notícias e Atualizações */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Notícias e Atualizações</h2>
          <div className="space-y-4">
            <article className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold">Notícia 1</h3>
              <p className="text-sm text-gray-700">Resumo da notícia...</p>
              <Link to="/news-1" className="text-blue-500">Leia mais</Link>
            </article>
            {/* Repeat for other news */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
