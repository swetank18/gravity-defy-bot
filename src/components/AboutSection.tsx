import { Card, CardContent } from "@/components/ui/card";
import { Bot, Target, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Team Gravity Defiers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are Team Gravity Defiers, dedicated to designing and developing a self-stabilizing, 
            two-wheeled robot with the ultimate goal of balancing a coffee cup with precision and stability. 
            As a sub-branch of SRM Robocon, we push the boundaries of robotics engineering 
            through innovative design and precise control systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="tech-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Self-Balancing Technology</h3>
              <p className="text-muted-foreground">
                Advanced IMU sensors and PID algorithms work together to maintain 
                perfect equilibrium under any conditions.
              </p>
            </CardContent>
          </Card>

          <Card className="tech-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Precision Control</h3>
              <p className="text-muted-foreground">
                ESP32 microcontroller enables precise motor adjustments and 
                real-time response to environmental disturbances.
              </p>
            </CardContent>
          </Card>

          <Card className="tech-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-World Performance</h3>
              <p className="text-muted-foreground">
                Engineered to withstand pushes, bumps, and surface irregularities 
                while maintaining stability and control.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;