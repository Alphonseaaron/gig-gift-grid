import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Users, 
  Download, 
  Eye, 
  TrendingUp,
  PieChart,
  Clock,
  Target
} from "lucide-react";

const SurveyResults = () => {
  const { id } = useParams();
  
  // Mock survey results data
  const survey = {
    id: id,
    title: "Consumer Shopping Habits",
    status: "Completed",
    responses: 2847,
    budget: 5000,
    spent: 3589.50,
    completion_rate: 94,
    created: "2024-01-15",
    ended: "2024-02-15"
  };

  const analytics = {
    demographics: {
      age: [
        { range: "18-24", percentage: 28, count: 798 },
        { range: "25-34", percentage: 35, count: 996 },
        { range: "35-44", percentage: 22, count: 626 },
        { range: "45-54", percentage: 12, count: 342 },
        { range: "55+", percentage: 3, count: 85 }
      ],
      gender: [
        { type: "Female", percentage: 58, count: 1651 },
        { type: "Male", percentage: 40, count: 1139 },
        { type: "Other", percentage: 2, count: 57 }
      ],
      location: [
        { region: "North America", percentage: 45, count: 1281 },
        { region: "Europe", percentage: 30, count: 854 },
        { region: "Asia", percentage: 20, count: 569 },
        { region: "Other", percentage: 5, count: 143 }
      ]
    },
    responses: [
      {
        question: "How often do you shop online?",
        answers: [
          { option: "Weekly", percentage: 42, count: 1196 },
          { option: "Monthly", percentage: 31, count: 883 },
          { option: "Daily", percentage: 18, count: 512 },
          { option: "Rarely", percentage: 7, count: 199 },
          { option: "Never", percentage: 2, count: 57 }
        ]
      },
      {
        question: "What influences your online purchasing decisions most?",
        answers: [
          { option: "Price", percentage: 38, count: 1082 },
          { option: "Reviews", percentage: 28, count: 797 },
          { option: "Product features", percentage: 20, count: 569 },
          { option: "Brand reputation", percentage: 10, count: 285 },
          { option: "Recommendations", percentage: 4, count: 114 }
        ]
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">{survey.title}</h1>
          <div className="flex items-center space-x-4 mt-2">
            <Badge className="bg-success/10 text-success border-success/20">
              {survey.status}
            </Badge>
            <span className="text-muted-foreground">
              {survey.created} - {survey.ended}
            </span>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Preview Survey
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90">
            <Download className="w-4 h-4 mr-2" />
            Export Results
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="w-4 h-4 mr-2 text-primary" />
              Total Responses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{survey.responses.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Target: 3,000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Target className="w-4 h-4 mr-2 text-success" />
              Completion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{survey.completion_rate}%</div>
            <p className="text-xs text-muted-foreground">Industry avg: 85%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Clock className="w-4 h-4 mr-2 text-warning" />
              Avg Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.2 min</div>
            <p className="text-xs text-muted-foreground">Estimated: 8 min</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-secondary" />
              Cost per Response
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(survey.spent / survey.responses).toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Total: ${survey.spent.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="responses" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="responses">Response Analysis</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="insights">Key Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="responses" className="space-y-6">
          {analytics.responses.map((question, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                  {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {question.answers.map((answer, answerIndex) => (
                    <div key={answerIndex}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{answer.option}</span>
                        <span className="font-medium">{answer.percentage}% ({answer.count})</span>
                      </div>
                      <Progress value={answer.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="w-5 h-5 mr-2 text-primary" />
                  Age Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analytics.demographics.age.map((age, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{age.range}</span>
                        <span className="font-medium">{age.percentage}%</span>
                      </div>
                      <Progress value={age.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-secondary" />
                  Gender Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analytics.demographics.gender.map((gender, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{gender.type}</span>
                        <span className="font-medium">{gender.percentage}%</span>
                      </div>
                      <Progress value={gender.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-success" />
                  Geographic Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analytics.demographics.location.map((location, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{location.region}</span>
                        <span className="font-medium">{location.percentage}%</span>
                      </div>
                      <Progress value={location.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Findings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Top Insight</h3>
                    <p className="text-sm">Weekly online shopping is the most common habit among respondents (42%), indicating regular digital commerce engagement.</p>
                  </div>
                  <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                    <h3 className="font-semibold text-secondary mb-2">Price Sensitivity</h3>
                    <p className="text-sm">Price remains the primary factor (38%) influencing online purchasing decisions, followed by customer reviews (28%).</p>
                  </div>
                  <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                    <h3 className="font-semibold text-success mb-2">Demographic Trend</h3>
                    <p className="text-sm">25-34 age group represents the largest segment (35%), with strong female participation (58%).</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">💡 Marketing Strategy</h3>
                    <p className="text-sm text-muted-foreground">Focus on competitive pricing and customer review collection to address the top two decision factors.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">🎯 Target Audience</h3>
                    <p className="text-sm text-muted-foreground">Prioritize 25-34 age group with female-focused messaging for maximum impact.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">📱 Engagement</h3>
                    <p className="text-sm text-muted-foreground">Develop weekly engagement campaigns to match the dominant shopping frequency pattern.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SurveyResults;