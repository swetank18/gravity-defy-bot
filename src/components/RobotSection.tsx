import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cpu, Wrench, Gauge, Wifi } from "lucide-react";

const RobotSection = () => {
  return (
    <section id="robot" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Robot</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A masterpiece of engineering combining advanced sensor technology, 
            precise mechanical design, and intelligent control systems.
          </p>
        </div>

        <Tabs defaultValue="strategy" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-secondary/50">
            <TabsTrigger value="strategy" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Strategy
            </TabsTrigger>
            <TabsTrigger value="mechanical" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Mechanical
            </TabsTrigger>
            <TabsTrigger value="control" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Control
            </TabsTrigger>
            <TabsTrigger value="specs" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Specs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="strategy" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="tech-card animate-slide-up">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Gauge className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Balancing System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    An Inertial Measurement Unit (IMU) detects orientation, tilt and motion. 
                    The sensor data is processed through a PID (Proportional-Integral-Derivative) 
                    algorithm, which continuously adjusts the motors to maintain upright position.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Real-time tilt detection</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">PID control algorithm</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Continuous motor adjustment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="tech-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Wifi className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Remote Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Using the ESP32 microcontroller to control the robot remotely, 
                    enabling precise navigation and real-time adjustments to the balancing system.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">ESP32 microcontroller</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Wireless communication</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Real-time control</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mechanical" className="mt-8">
            <Card className="tech-card animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Mechanical Design Excellence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Design Goal</h4>
                  <p className="text-muted-foreground">
                    Maximisation of stability, particularly while doing movement, turns and acceleration. 
                    A lower profile and wider base are key design features to achieve a low centre of gravity.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Chassis & Frame</h4>
                    <div className="space-y-2">
                      <p className="text-sm"><span className="font-medium">Dimensions:</span> 180cm × 130cm × 140cm</p>
                      <p className="text-sm"><span className="font-medium">Frame Material:</span> 19cm × 19cm aluminium square tubing</p>
                      <p className="text-sm"><span className="font-medium">Base:</span> Wood construction</p>
                      <p className="text-sm"><span className="font-medium">Top:</span> Acrylic for coffee cup balance</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Key Features</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Low centre of gravity (140cm height)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">High strength-to-weight ratio</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Enhanced stability design</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Durable material selection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="control" className="mt-8">
            <Card className="tech-card animate-slide-up">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Advanced Control Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">IMU</span>
                    </div>
                    <h4 className="font-semibold mb-2">Sensor Input</h4>
                    <p className="text-sm text-muted-foreground">
                      Inertial Measurement Unit provides real-time orientation and motion data
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">PID</span>
                    </div>
                    <h4 className="font-semibold mb-2">Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      Proportional-Integral-Derivative algorithm processes sensor data
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">PWM</span>
                    </div>
                    <h4 className="font-semibold mb-2">Motor Control</h4>
                    <p className="text-sm text-muted-foreground">
                      Precise motor adjustments maintain perfect balance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specs" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="tech-card animate-slide-up">
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium text-primary">Length</span>
                      <p className="text-lg">180cm</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">Width</span>
                      <p className="text-lg">130cm</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">Height</span>
                      <p className="text-lg">140cm</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">Wheels</span>
                      <p className="text-lg">2 (Self-balancing)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="tech-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle>Key Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Microcontroller</span>
                    <span className="text-sm font-medium text-primary">ESP32</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sensor</span>
                    <span className="text-sm font-medium text-primary">IMU</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Control Algorithm</span>
                    <span className="text-sm font-medium text-primary">PID</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Frame Material</span>
                    <span className="text-sm font-medium text-primary">Aluminium</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Base Platform</span>
                    <span className="text-sm font-medium text-primary">Wood</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Top Platform</span>
                    <span className="text-sm font-medium text-primary">Acrylic</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default RobotSection;