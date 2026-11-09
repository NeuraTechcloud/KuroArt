/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HotmartProvider } from './context/HotmartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MethodologySection } from './components/MethodologySection';
import { CoursesSection } from './components/CoursesSection';
import { EvolutionSection } from './components/EvolutionSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { HotmartManagerModal } from './components/HotmartManagerModal';
import { CurriculumModal } from './components/CurriculumModal';
import { HotmartFloatingShortcut } from './components/HotmartFloatingShortcut';
import { Toast } from './components/Toast';

export function AppContent() {
  const [curriculumCourseId, setCurriculumCourseId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenCurriculum={id => setCurriculumCourseId(id)} />
        <MethodologySection />
        <CoursesSection onOpenCurriculum={id => setCurriculumCourseId(id)} />
        <EvolutionSection />
        <GallerySection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Hotmart Management Modal (Shortcut requested by user) */}
      <HotmartManagerModal />

      {/* Course Curriculum & Syllabus Modal */}
      <CurriculumModal
        courseId={curriculumCourseId}
        onClose={() => setCurriculumCourseId(null)}
      />

      {/* Persistent Floating Shortcut for Hotmart Links */}
      <HotmartFloatingShortcut />

      {/* Toast Feedback Notification */}
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <HotmartProvider>
      <AppContent />
    </HotmartProvider>
  );
}
