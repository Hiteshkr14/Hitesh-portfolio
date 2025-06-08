import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import Main from "./components/contactSection/Main";
import EducationMain from "./components/EducationSection/EducationMain";
import FooterMain from "./components/footer/FooterMain";
import UpperGradient from "./components/UpperSection/UpperGradient";
import UpperMain from "./components/UpperSection/UpperMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";

import Advertisement from "./components/Advertisement/Advertisement";


function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <UpperMain />
      <UpperGradient />
      <Advertisement />
      <AboutMeMain />
      <SkillsMain />
      <Advertisement />
      <EducationMain />
      <ProjectsMain />
      <Advertisement />
      <Main />
      <FooterMain />
    </main>
  );
}

export default App;
