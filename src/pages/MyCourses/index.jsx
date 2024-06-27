import React from 'react';
import { Link } from 'react-router-dom';

const MyCourses = () => {
  return (
    <div>
      <main className="flex-1 p-8">
        {/* Título da Página */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold">Meus Cursos</h1>
          <p className="text-gray-700">Aqui estão os cursos nos quais você está inscrito.</p>
        </section>

        {/* Lista de Cursos */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Exemplo de Card de Curso */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="course-thumbnail.jpg" alt="Course Thumbnail" className="w-full h-36 object-cover" />
              <div className="p-4 flex flex-col justify-between ">
                <div>
                  <h3 className="text-lg font-semibold">Course Title</h3>
                  <p className="text-sm text-gray-700">Instructor Name</p>
                  <p className="text-sm text-yellow-500">★★★★☆</p>
                </div>
                <Link to="/course-details" className="block mt-4 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2">
                  Ver Curso
                </Link>
              </div>
            </div>
            {/* Repita para outros cursos */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyCourses;
