import React from 'react';
import { Link } from 'react-router-dom';

const AllCourses = () => {
  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold'>Todos os Cursos</h1>
      <section>
      <main className="flex flex-1 gap-8 p-8">
        <aside className="w-1/4 pr-8 bg-zinc-100 p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Filtrar por</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Categorias</h3>
            <ul>
              <li><input type="checkbox" id="category1" /><label htmlFor="category1" className="ml-2">Categoria 1</label></li>
              <li><input type="checkbox" id="category2" /><label htmlFor="category2" className="ml-2">Categoria 2</label></li>
              <li><input type="checkbox" id="category3" /><label htmlFor="category3" className="ml-2">Categoria 3</label></li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Faixa de Preço</h3>
            <ul>
              <li><input type="checkbox" id="price1" /><label htmlFor="price1" className="ml-2">R$0 - R$50</label></li>
              <li><input type="checkbox" id="price2" /><label htmlFor="price2" className="ml-2">R$51 - R$100</label></li>
              <li><input type="checkbox" id="price3" /><label htmlFor="price3" className="ml-2">R$101 - R$200</label></li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Avaliação</h3>
            <ul>
              <li><input type="checkbox" id="rating1" /><label htmlFor="rating1" className="ml-2">4 estrelas e acima</label></li>
              <li><input type="checkbox" id="rating2" /><label htmlFor="rating2" className="ml-2">3 estrelas e acima</label></li>
              <li><input type="checkbox" id="rating3" /><label htmlFor="rating3" className="ml-2">2 estrelas e acima</label></li>
            </ul>
          </div>
        </aside>

        <section className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden h-max">
            <img src="course-thumbnail.jpg" alt="Course Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Course Title</h3>
              <p className="text-sm text-gray-700">Instructor Name</p>
              <p className="text-sm text-yellow-500">★★★★☆</p>
              <Link to="/show-course" className="block mt-2 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2">Ver Curso</Link>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden h-max">
            <img src="course-thumbnail.jpg" alt="Course Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Course Title</h3>
              <p className="text-sm text-gray-700">Instructor Name</p>
              <p className="text-sm text-yellow-500">★★★★☆</p>
              <Link to="/show-course" className="block mt-2 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2">Ver Curso</Link>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden h-max">
            <img src="course-thumbnail.jpg" alt="Course Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Course Title</h3>
              <p className="text-sm text-gray-700">Instructor Name</p>
              <p className="text-sm text-yellow-500">★★★★☆</p>
              <Link to="/show-course" className="block mt-2 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2">Ver Curso</Link>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden h-max">
            <img src="course-thumbnail.jpg" alt="Course Thumbnail" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Course Title</h3>
              <p className="text-sm text-gray-700">Instructor Name</p>
              <p className="text-sm text-yellow-500">★★★★☆</p>
              <Link to="/show-course" className="block mt-2 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2">Ver Curso</Link>
            </div>
          </div>
          {/* Repeat for other courses */}
        </section>
      </main>
      </section>
    </div>
  );
};

export default AllCourses;
