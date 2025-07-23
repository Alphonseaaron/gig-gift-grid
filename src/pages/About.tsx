import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Shield, 
  DollarSign,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const About = () => {
  const stats = [
    { label: "Active Users", value: "250K+", icon: Users },
    { label: "Surveys Completed", value: "2M+", icon: Target },
    { label: "Total Paid Out", value: "$5.2M", icon: DollarSign },
    { label: "Average Rating", value: "4.8/5", icon: TrendingUp }
  ];

  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is protected with enterprise-grade security. We never sell personal information."
    },
    {
      icon: DollarSign,
      title: "Fair Compensation",
      description: "Earn competitive rates for your time and opinions. Transparent pricing with no hidden fees."
    },
    {
      icon: Target,
      title: "Quality Surveys",
      description: "Carefully curated surveys from reputable brands and research organizations."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by the community, for the community. Your feedback shapes our platform."
    }
  ];

  const features = [
    "Instant payments within 24 hours",
    "Mobile-friendly survey experience",
    "24/7 customer support",
    "Advanced fraud protection",
    "Demographic targeting",
    "Real-time earnings tracking"
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="bg-gradient-primary bg-clip-text text-transparent">GigRift</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're democratizing market research by connecting businesses with real people, 
          creating value for both survey takers and companies seeking authentic insights.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To create the most trusted and rewarding survey platform where individuals can earn meaningful income 
            by sharing their opinions, while helping businesses make better decisions through authentic consumer insights.
          </p>
        </CardContent>
      </Card>

      {/* Values */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <value.icon className="w-6 h-6 mr-3 text-primary" />
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Why Choose GigRift?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Story */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Our Story</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-gray max-w-none">
          <div className="space-y-4 text-muted-foreground">
            <p>
              GigRift was founded in 2024 with a simple idea: what if sharing your opinion could actually pay? 
              Traditional market research was broken – surveys were long, boring, and participants were barely compensated for their time.
            </p>
            <p>
              We set out to change that by creating a platform that respects both the time of survey takers and 
              the research needs of businesses. Our technology ensures high-quality responses while providing 
              fair compensation and an engaging user experience.
            </p>
            <p>
              Today, GigRift connects hundreds of thousands of users with meaningful survey opportunities, 
              helping them earn extra income while providing businesses with the authentic insights they need to succeed.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Team */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Sarah Johnson</h3>
              <p className="text-muted-foreground">CEO & Co-Founder</p>
              <Badge variant="secondary" className="mt-2">Former Google</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-24 h-24 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Michael Chen</h3>
              <p className="text-muted-foreground">CTO & Co-Founder</p>
              <Badge variant="secondary" className="mt-2">Former Meta</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">David Rodriguez</h3>
              <p className="text-muted-foreground">Head of Security</p>
              <Badge variant="secondary" className="mt-2">Former Amazon</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;