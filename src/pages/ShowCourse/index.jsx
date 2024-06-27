import React from 'react'
import { Outlet, Link } from 'react-router-dom';

function ShowCourse() {

    return (
        <main className="p-8 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Título do Curso</h1>
                    <p className="text-gray-700">Breve descrição do curso selecionado.</p>
                </header>

                {/* NavBar */}
                <nav className="bg-white p-4 shadow rounded-lg mb-8">
                    <ul className="flex gap-8">
                        <li>
                            <Link to="next-lesson" className="text-blue-500">Próxima Aula</Link>
                        </li>
                        <li>
                            <Link to="lesson-history" className="text-blue-500">Histórico de Aulas</Link>
                        </li>
                        <li>
                            <Link to="exercises" className="text-blue-500">Todos os Exercícios</Link>
                        </li>
                        <li>
                            <Link to="my-exercises" className="text-blue-500">Meus Exercícios</Link>
                        </li>
                    </ul>
                </nav>

                {/* Main Content */}
                <section className="mb-8">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Visão Geral do Curso</h2>
                        <p>Descrição detalhada sobre o curso.</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Lista de Módulos</h2>
                        <ul>
                            <li className="mb-2">
                                <div className="p-4 bg-white shadow rounded-lg">Módulo 1: Título do Módulo</div>
                            </li>
                            <li className="mb-2">
                                <div className="p-4 bg-white shadow rounded-lg">Módulo 2: Título do Módulo</div>
                            </li>
                            <li className="mb-2">
                                <div className="p-4 bg-white shadow rounded-lg">Módulo 3: Título do Módulo</div>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Exercícios</h2>
                        <ul>
                            <li className="mb-2">
                                <div className="p-4 bg-white shadow rounded-lg">Exercício 1: Título do Exercício</div>
                            </li>
                            <li className="mb-2">
                                <div className="p-4 bg-white shadow rounded-lg">Exercício 2: Título do Exercício</div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Feedback & Avaliações</h2>
                        <ul>
                            <li className="mb-2">
                                <div className="p-4 bg-white shadow rounded-lg">Avaliação 1: Feedback do usuário</div>
                            </li>
                            <li className="mb-2">
                                <div className="p-4 bg-white shadow rounded-lg">Avaliação 2: Feedback do usuário</div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Outlet for nested routes */}
                <section className="mb-8">
                    <Outlet />
                </section>
            </div>
        </main>
    );
}

export default ShowCourse
