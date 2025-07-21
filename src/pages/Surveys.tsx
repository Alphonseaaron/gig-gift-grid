import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SurveyCard from "@/components/SurveyCard";

const Surveys = () => {
  const availableSurveys = [
    {
      title: "Consumer Shopping Habits",
      description: "Share your online shopping preferences and help brands understand customer behavior.",
      reward: "$12.50",
      duration: "15 min",
      participants: 2847,
      category: "Retail",
      difficulty: "Easy" as const,
      rating: 4.8
    },
    {
      title: "Mobile App Usage Study",
      description: "Test a new productivity app and provide detailed feedback on user experience.",
      reward: "$25.00",
      duration: "30 min",
      participants: 1203,
      category: "Technology",
      difficulty: "Medium" as const,
      rating: 4.6
    },
    {
      title: "Healthcare Awareness Survey",
      description: "Help medical researchers understand public health knowledge and awareness levels.",
      reward: "$18.75",
      duration: "20 min",
      participants: 956,
      category: "Healthcare",
      difficulty: "Easy" as const,
      rating: 4.9
    },
    {
      title: "Investment Portfolio Analysis",
      description: "Complex financial survey requiring knowledge of investment strategies and market analysis.",
      reward: "$45.00",
      duration: "45 min",
      participants: 342,
      category: "Finance",
      difficulty: "Hard" as const,
      rating: 4.7
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Available Surveys</h1>
        <p className="text-muted-foreground">
          Choose from high-paying survey opportunities that match your interests
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Survey Opportunities</CardTitle>
          <p className="text-sm text-muted-foreground">
            {availableSurveys.length} surveys available matching your profile
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableSurveys.map((survey, index) => (
              <SurveyCard key={index} {...survey} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Surveys;