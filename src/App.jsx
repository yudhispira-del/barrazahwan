import Navbar from "./components/Navbar";
import SectionHero from "./components/SectionHero";
import SectionAbout from "./components/SectionAbout";
import SectionServices from "./components/SectionServices";
import SectionCTA from "./components/SectionCTA";
import SectionPortfolio from "./components/SectionPortfolio";
import SectionTestimonial from "./components/SectionTestimonial";
import SectionContact from "./components/SectionContact";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <SectionHero />
      <SectionAbout />
      <SectionServices />
      <SectionCTA />
      <SectionPortfolio />
      <SectionTestimonial />
      <SectionContact />
    </div>
  );
}

export default App;