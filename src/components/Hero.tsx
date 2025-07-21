import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Star, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-secondary/10">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              Join 500K+ active earners
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Turn Your
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Opinions </span>
              Into Cash
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Share your thoughts through surveys, product tests, and micro-gigs. 
              Earn real money in your spare time with GigRift's trusted platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 animate-pulse-glow">
                <Play className="w-5 h-5 mr-2" />
                Start Earning Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                See How It Works
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$15</div>
                <div className="text-sm text-muted-foreground">Avg per survey</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Opportunities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-info">Fast</div>
                <div className="text-sm text-muted-foreground">Payouts</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="People earning with GigRift"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <Card className="absolute -bottom-6 -left-6 p-4 bg-background/95 backdrop-blur border-primary/20 shadow-glow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-semibold">$2,847</div>
                  <div className="text-sm text-muted-foreground">Earned this week</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -top-6 -right-6 p-4 bg-background/95 backdrop-blur border-secondary/20 shadow-glow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold">1,247</div>
                  <div className="text-sm text-muted-foreground">Active now</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;