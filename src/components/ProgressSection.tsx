import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle, Plus } from "lucide-react";

const ProgressSection = () => {
  const milestones = [
    {
      title: "Project Conceptualization",
      status: "completed",
      date: "Phase 1",
      description: "Defined project goals and requirements for the self-balancing robot."
    },
    {
      title: "Mechanical Design",
      status: "completed", 
      date: "Phase 2",
      description: "Completed chassis design with aluminium frame and optimized center of gravity."
    },
    {
      title: "Sensor Integration",
      status: "in-progress",
      date: "Phase 3",
      description: "IMU sensor setup and calibration for real-time balance detection."
    },
    {
      title: "PID Algorithm Implementation",
      status: "in-progress",
      date: "Phase 4", 
      description: "Developing and tuning the PID control system for motor adjustments."
    },
    {
      title: "ESP32 Programming",
      status: "pending",
      date: "Phase 5",
      description: "Remote control system development and wireless communication setup."
    },
    {
      title: "Testing & Calibration",
      status: "pending",
      date: "Phase 6",
      description: "Comprehensive testing with coffee cup balancing challenges."
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">In Progress</Badge>;
      default:
        return <Badge variant="outline" className="border-gray-500/30 text-gray-400">Pending</Badge>;
    }
  };

  return (
    <section id="progress" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Project <span className="bg-gradient-primary bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Track our journey from conception to completion. Each milestone represents 
            a crucial step in bringing our self-balancing robot to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <Card 
                key={index} 
                className={`tech-card animate-slide-left ${
                  milestone.status === 'completed' ? 'border-green-500/30' : 
                  milestone.status === 'in-progress' ? 'border-yellow-500/30' : 'border-border'
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(milestone.status)}
                      <div>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{milestone.date}</p>
                      </div>
                    </div>
                    {getStatusBadge(milestone.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add Progress Entry Card */}
          <Card className="tech-card mt-8 border-dashed border-2 border-primary/30 animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">More Updates Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                We'll keep updating our progress as we move through each development phase. 
                Stay tuned for exciting updates on our self-balancing robot journey!
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Development in progress</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="tech-card text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">2</div>
              <p className="text-muted-foreground">Phases Completed</p>
            </CardContent>
          </Card>
          
          <Card className="tech-card text-center animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-yellow-500 mb-2">2</div>
              <p className="text-muted-foreground">Currently In Progress</p>
            </CardContent>
          </Card>
          
          <Card className="tech-card text-center animate-slide-up" style={{ animationDelay: '1s' }}>
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">33%</div>
              <p className="text-muted-foreground">Overall Progress</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;