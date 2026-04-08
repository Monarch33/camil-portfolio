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
    <div className="relative min-h-screen overflow-x-hidden bg-[#090a0d] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(131,166,255,0.18),transparent_38%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.06),transparent_28%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:56px_56px]" />
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
