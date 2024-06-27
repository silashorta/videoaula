import React from 'react'
import { Link, useParams } from 'react-router-dom';

function CourseSelected() {
    const { courseId } = useParams();
    function getCourseById(id) {
        // Função fictícia para buscar o curso pelo ID
        return {
            id,
            name: 'Curso Exemplo',
            description: 'Descrição do curso exemplo.',
            lessons: [
                { id: 1, title: 'Aula 1', description: 'Descrição da Aula 1' },
                { id: 2, title: 'Aula 2', description: 'Descrição da Aula 2' },
                // Mais aulas
            ],
            exercises: [
                { id: 1, title: 'Exercício 1', description: 'Descrição do Exercício 1' },
                { id: 2, title: 'Exercício 2', description: 'Descrição do Exercício 2' },
                // Mais exercícios
            ]
        };
    }

    // Assumindo que você tenha uma forma de buscar o curso específico pelo ID
    const course = getCourseById(courseId);
    return (
        <div>
            <div className='p-8'>
                <section>
                    <main className="p-8 bg-gray-100">
                        <div className="max-w-7xl mx-auto">
                            <header className="mb-8">
                                <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
                                <p className="text-gray-700">{course.description}</p>
                            </header>
                            <nav className="bg-white p-4 shadow rounded-lg mb-8">
                                <ul className="flex gap-8">
                                    <li>
                                        <Link to={`/course/${courseId}/details`} className="text-blue-500">Detalhes do Curso</Link>
                                    </li>
                                    <li>
                                        <Link to={`/course/${courseId}/lessons`} className="text-blue-500">Aulas</Link>
                                    </li>
                                    <li>
                                        <Link to={`/course/${courseId}/exercises`} className="text-blue-500">Exercícios</Link>
                                    </li>
                                    <li>
                                        <Link to={`/course/${courseId}/resources`} className="text-blue-500">Recursos</Link>
                                    </li>
                                    <li>
                                        <Link to={`/course/${courseId}/forum`} className="text-blue-500">Fórum</Link>
                                    </li>
                                </ul>
                            </nav>
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">Aulas</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                    {course.lessons.map(lesson => (
                                        <div key={lesson.id} className="bg-white p-4 shadow rounded-lg">
                                            <h3 className="text-xl font-bold mb-2">{lesson.title}</h3>
                                            <p className="text-gray-700 mb-4">{lesson.description}</p>
                                            <Link to={`/lesson/${lesson.id}`} className="text-blue-500">Assistir Aula</Link>
                                        </div>
                                    ))}
                                </div>
                            </section>
                            <section>
                                <h2 className="text-2xl font-bold mb-4">Exercícios</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                    {course.exercises.map(exercise => (
                                        <div key={exercise.id} className="bg-white p-4 shadow rounded-lg">
                                            <h3 className="text-xl font-bold mb-2">{exercise.title}</h3>
                                            <p className="text-gray-700 mb-4">{exercise.description}</p>
                                            <Link to={`/exercise/${exercise.id}`} className="text-blue-500">Fazer Exercício</Link>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </main>
                </section>
            </div>
            );
};
        </div>
    )
}

export default CourseSelected
