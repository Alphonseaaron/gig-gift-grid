import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TakeSurvey = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  // Mock survey data
  const survey = {
    id: id,
    title: "Consumer Shopping Habits",
    description: "Help us understand how people shop online",
    reward: "$3.50",
    estimatedTime: "8 minutes",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "How often do you shop online?",
        options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"]
      },
      {
        id: 2,
        type: "multiple-choice", 
        question: "What influences your online purchasing decisions most?",
        options: ["Price", "Reviews", "Brand reputation", "Product features", "Recommendations"]
      },
      {
        id: 3,
        type: "text",
        question: "What improvements would you like to see in online shopping experiences?"
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "How important is free shipping to you?",
        options: ["Very important", "Somewhat important", "Not important", "I don't mind paying for shipping"]
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "Which payment method do you prefer for online purchases?",
        options: ["Credit Card", "PayPal", "Apple Pay", "Google Pay", "Bank Transfer", "Cryptocurrency"]
      }
    ]
  };

  const progress = ((currentQuestion + 1) / survey.questions.length) * 100;
  const currentQ = survey.questions[currentQuestion];

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQ.id]: value }));
  };

  const handleNext = () => {
    if (!answers[currentQ.id]) {
      toast({
        title: "Answer Required",
        description: "Please answer the current question before proceeding.",
        variant: "destructive"
      });
      return;
    }

    if (currentQuestion < survey.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
      toast({
        title: "Survey Completed!",
        description: `You've earned ${survey.reward}. Reward will be added to your account.`,
      });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (isCompleted) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="text-center">
          <CardContent className="pt-6">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Survey Completed!</h1>
            <p className="text-muted-foreground mb-4">
              Thank you for participating in "{survey.title}"
            </p>
            <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-6">
              <p className="text-success font-semibold text-lg">
                You've earned {survey.reward}
              </p>
              <p className="text-sm text-muted-foreground">
                Reward will be added to your account within 24 hours
              </p>
            </div>
            <div className="space-y-3">
              <Button 
                onClick={() => navigate("/surveys")} 
                className="w-full bg-gradient-primary hover:opacity-90"
              >
                Take Another Survey
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate("/profile")}
                className="w-full"
              >
                View My Earnings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      {/* Survey Header */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">{survey.title}</CardTitle>
              <p className="text-muted-foreground">{survey.description}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center text-success font-semibold mb-1">
                <DollarSign className="w-4 h-4 mr-1" />
                {survey.reward}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-3 h-3 mr-1" />
                {survey.estimatedTime}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Question {currentQuestion + 1} of {survey.questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{currentQ.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentQ.type === "multiple-choice" ? (
            <RadioGroup
              value={answers[currentQ.id] || ""}
              onValueChange={handleAnswer}
            >
              {currentQ.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          ) : (
            <Textarea
              placeholder="Please share your thoughts..."
              value={answers[currentQ.id] || ""}
              onChange={(e) => handleAnswer(e.target.value)}
              className="min-h-[100px]"
            />
          )}

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button 
              onClick={handleNext}
              className="bg-gradient-primary hover:opacity-90"
            >
              {currentQuestion === survey.questions.length - 1 ? "Complete Survey" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TakeSurvey;