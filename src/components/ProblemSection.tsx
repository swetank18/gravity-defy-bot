import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Coffee, Cpu, Shield } from "lucide-react";

const ProblemSection = () => {
  const requirements = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Sensor Integration",
      description: "Continuously detect tilt and motion using sensors, providing the robot with constant awareness regarding the balance state."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Disturbance Resistance",
      description: "Withstand external disturbances such as pushes, bumps and surface irregularities."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Control System",
      description: "Implement a control system that translates sensor data into rapid, precise motor adjustments."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Problem <span className="bg-gradient-primary bg-clip-text text-transparent">Statement</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The task is to design a two-wheeled self-balancing robot that can maintain vertical 
            stability under real-world conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {requirements.map((req, index) => (
            <Card key={index} className="tech-card animate-slide-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <div className="text-primary-foreground">
                    {req.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{req.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{req.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="tech-card max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Coffee className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 glow-text">Ultimate Challenge</h3>
            <p className="text-lg text-center text-muted-foreground leading-relaxed">
              The final objective of the robot is to <span className="text-primary font-semibold">balance a cup of coffee 
              without spilling even a single drop</span>, demonstrating resilience, adaptability and precise control 
              under the most demanding conditions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProblemSection;