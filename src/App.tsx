import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProgressProvider } from './hooks/useProgress';
import { PreferencesProvider } from './hooks/usePreferences';
import { Layout } from './components/layout/Layout';

// Page Imports
import { Overview } from './pages/Overview';
import { Analyzer } from './pages/Analyzer';
import { Library } from './pages/Library';
import { CategoryDetail } from './pages/CategoryDetail';
import { QuizPage } from './pages/QuizPage';
import { SimulationLab } from './pages/SimulationLab';
import { StudentSafety } from './pages/StudentSafety';
import { LearningPaths } from './pages/LearningPaths';
import { Checklist } from './pages/Checklist';
import { Progress } from './pages/Progress';
import { Resources } from './pages/Resources';
import { Emergency } from './pages/Emergency';
import { SettingsPage } from './pages/Settings';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PreferencesProvider>
        <ProgressProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Primary Navigation Destinations */}
              <Route index element={<Overview />} />
              <Route path="analyzer" element={<Analyzer />} />
              <Route path="library" element={<Library />} />
              <Route path="library/:categoryId" element={<CategoryDetail />} />
              <Route path="quiz" element={<QuizPage />} />
              <Route path="quiz/:categoryId" element={<QuizPage />} />
              <Route path="simulation" element={<SimulationLab />} />
              <Route path="student-safety" element={<StudentSafety />} />
              <Route path="learning-paths" element={<LearningPaths />} />
              <Route path="checklist" element={<Checklist />} />
              <Route path="progress" element={<Progress />} />
              <Route path="resources" element={<Resources />} />
              <Route path="emergency" element={<Emergency />} />
              <Route path="settings" element={<SettingsPage />} />

              {/* 404 Catch-All */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ProgressProvider>
      </PreferencesProvider>
    </BrowserRouter>
  );
};

export default App;
