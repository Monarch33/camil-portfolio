import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import CurrentFocusSection from './sections/CurrentFocusSection';
import ProjectsSection from './sections/ProjectsSection';
import ResearchSection from './sections/ResearchSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import TimelineSection from './sections/TimelineSection';
import LearningSection from './sections/LearningSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-100 text-zinc-900">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 via-zinc-100 to-zinc-200" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.08),transparent_55%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <CurrentFocusSection />
        <ProjectsSection />
        <ResearchSection />
        <ExperienceSection />
        <SkillsSection />
        <TimelineSection />
        <LearningSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
