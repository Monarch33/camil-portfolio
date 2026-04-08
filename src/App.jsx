import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import TLDRSection from './sections/TLDRSection';
import DocumentsSection from './sections/DocumentsSection';
import RecentActivitySection from './sections/RecentActivitySection';
import CurrentFocusSection from './sections/CurrentFocusSection';
import ResearchSection from './sections/ResearchSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';
import DrivesSection from './sections/DrivesSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import SkillsSection from './sections/SkillsSection';
import TimelineSection from './sections/TimelineSection';
import LearningSection from './sections/LearningSection';
import BlogSection from './sections/BlogSection';
import PapersSection from './sections/PapersSection';
import SocialsSection from './sections/SocialsSection';
import GithubActivitySection from './sections/GithubActivitySection';
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
        <TLDRSection />
        <DocumentsSection />
        <RecentActivitySection />
        <CurrentFocusSection />
        <ResearchSection />
        <ProjectsSection />
        <BlogSection />
        <PapersSection />
        <AboutSection />
        <DrivesSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <TimelineSection />
        <LearningSection />
        <SocialsSection />
        <GithubActivitySection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
