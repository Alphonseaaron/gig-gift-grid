import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Coins, Users, Star } from "lucide-react";

interface SurveyCardProps {
  title: string;
  description: string;
  reward: string;
  duration: string;
  participants: number;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  rating: number;
}

const SurveyCard = ({ 
  title, 
  description, 
  reward, 
  duration, 
  participants, 
  category,
  difficulty,
  rating 
}: SurveyCardProps) => {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Easy": return "bg-success/10 text-success border-success/20";
      case "Medium": return "bg-warning/10 text-warning border-warning/20";
      case "Hard": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="hover:shadow-card transition-all duration-200 hover:-translate-y-1 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {title}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          </div>
          <Badge 
            variant="outline" 
            className={`text-xs ${getDifficultyColor(difficulty)}`}
          >
            {difficulty}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Coins className="w-4 h-4 text-primary" />
            <span className="font-medium text-primary">{reward}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{participants} taken</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-warning fill-warning" />
            <span className="text-sm text-muted-foreground">{rating}/5</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-gradient-primary hover:opacity-90 group-hover:animate-pulse-glow"
          size="sm"
        >
          Start Survey
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SurveyCard;