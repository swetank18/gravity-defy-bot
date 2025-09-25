import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">GD</span>
            </div>
            <span className="text-xl font-bold glow-text">Gravity Defiers</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors animated-underline"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('problem')}
              className="text-foreground hover:text-primary transition-colors animated-underline"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection('robot')}
              className="text-foreground hover:text-primary transition-colors animated-underline"
            >
              Robot
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-foreground hover:text-primary transition-colors animated-underline"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('progress')}
              className="text-foreground hover:text-primary transition-colors animated-underline"
            >
              Progress
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 pb-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('problem')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection('robot')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Robot
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('progress')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Progress
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;