import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllCourses from './pages/AllCourses';
import MyCourses from './pages/MyCourses';
import CourseSelected from './pages/CourseSelected';
import ShowCourse from './pages/ShowCourse';
import NextLesson from './pages/NextLesson';
import LessonHistory from './pages/LessonHistory';
import AllExercises from './pages/AllExercises';
import MyExercises from './pages/MyExercises';
import Documents from './pages/Documents';
import ExtraVideos from './pages/ExtraVideos';
import RecommendedReadings from './pages/RecommendedReadings';
import Discussions from './pages/Discussions';
import MyParticipation from './pages/MyParticipation';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
      <div className='font-quicksand'>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<AllCourses />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/course-details" element={<CourseSelected />} />
            <Route path="/show-course" element={<ShowCourse />} />
            <Route path="/next-lesson" element={<NextLesson />} />
            <Route path="/lesson-history" element={<LessonHistory />} />
            <Route path="/exercises" element={<AllExercises />} />
            <Route path="/my-exercises" element={<MyExercises />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/extra-videos" element={<ExtraVideos />} />
            <Route path="/recommended-readings" element={<RecommendedReadings />} />
            <Route path="/discussions" element={<Discussions />} />
            <Route path="/my-participation" element={<MyParticipation />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}

export default App;
