import { Card, CardContent } from "@/components/ui/card";
import { Camera, User } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    { name: "Shivam", role: "Spaced" },
    { name: "Dhruv", role: "Spaced" },
    { name: "Lohit", role: "Sissed" },
    { name: "Einstein", role: "Sissed" },
    { name: "Rijhul", role: "Sambed" },
    { name: "Venkat", role: "MCSOCD" },
    { name: "Soham", role: "MCSOD" },
  ];

  return (
    <section id="team" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Meet the brilliant minds behind Gravity Defiers - a diverse team of engineers, 
            innovators, and problem-solvers united by our passion for robotics.
          </p>
        </div>

        {/* Team Photo Section */}
        <Card className="tech-card max-w-4xl mx-auto mb-16 animate-slide-up">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-full h-64 bg-gradient-surface rounded-lg flex items-center justify-center mb-6 border-2 border-dashed border-border">
                <div className="text-center">
                  <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Team Photo</h3>
                  <p className="text-muted-foreground">
                    Team photo will be uploaded here soon
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                📸 Coming Soon - Official Team Gravity Defiers Photo
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Team Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="tech-card animate-slide-up" 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <div className="px-3 py-1 bg-secondary rounded-full">
                  <span className="text-sm font-medium text-primary">{member.role}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="tech-card text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">7</div>
              <p className="text-muted-foreground">Team Members</p>
            </CardContent>
          </Card>
          
          <Card className="tech-card text-center animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <p className="text-muted-foreground">Self-Balancing Robot</p>
            </CardContent>
          </Card>
          
          <Card className="tech-card text-center animate-slide-up" style={{ animationDelay: '1s' }}>
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <p className="text-muted-foreground">Innovation Potential</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;