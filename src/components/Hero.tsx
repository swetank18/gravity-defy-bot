import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text">
            GRAVITY
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              DEFIERS
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Designing and developing self-stabilising, two-wheeled robots capable of 
            maintaining equilibrium under real-world conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg shadow-glow animate-pulse-glow"
            >
              Explore Our Project
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
            >
              View Team
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown className="h-8 w-8 text-primary" />
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;