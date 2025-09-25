import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProblemSection from "@/components/ProblemSection";
import RobotSection from "@/components/RobotSection";
import TeamSection from "@/components/TeamSection";
import ProgressSection from "@/components/ProgressSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutSection />
      <ProblemSection />
      <RobotSection />
      <TeamSection />
      <ProgressSection />
      <Footer />
    </div>
  );
};

export default Index;
