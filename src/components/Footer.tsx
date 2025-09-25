import { Heart, Github, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">GD</span>
              </div>
              <span className="text-xl font-bold glow-text">Gravity Defiers</span>
            </div>
            <p className="text-muted-foreground">
              Pushing the boundaries of robotics engineering through innovative 
              self-balancing technology and precise control systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors animated-underline"
              >
                About Team
              </button>
              <button 
                onClick={() => document.getElementById('robot')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors animated-underline"
              >
                Our Robot
              </button>
              <button 
                onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors animated-underline"
              >
                Team Members
              </button>
              <button 
                onClick={() => document.getElementById('progress')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-primary transition-colors animated-underline"
              >
                Progress
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">SRM Institute of Science and Technology</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">gravitydefiers@srm.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">github.com/gravitydefiers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by Team Gravity Defiers • SRM Robocon</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Gravity Defiers. Defying gravity, one robot at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;