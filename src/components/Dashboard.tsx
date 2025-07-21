import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SurveyCard from "./SurveyCard";
import { 
  Coins, 
  TrendingUp, 
  Target, 
  Gift, 
  Filter,
  Search,
  Calendar,
  BarChart3
} from "lucide-react";

const Dashboard = () => {
  const surveyData = [
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
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-primary text-primary-foreground">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Coins className="w-4 h-4 mr-2" />
              Total Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,847.50</div>
            <p className="text-xs opacity-90">+$247.50 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-success" />
              Surveys Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">+12 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Target className="w-4 h-4 mr-2 text-warning" />
              Success Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">Above average</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Gift className="w-4 h-4 mr-2 text-secondary" />
              Bonus Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,450</div>
            <p className="text-xs text-muted-foreground">Ready to redeem</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Quick Actions</CardTitle>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule
              </Button>
              <Button variant="outline" size="sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="secondary" className="h-auto p-4 flex-col space-y-2">
              <Coins className="w-6 h-6" />
              <span className="text-sm">Redeem Points</span>
            </Button>
            <Button variant="secondary" className="h-auto p-4 flex-col space-y-2">
              <Target className="w-6 h-6" />
              <span className="text-sm">Daily Goals</span>
            </Button>
            <Button variant="secondary" className="h-auto p-4 flex-col space-y-2">
              <Gift className="w-6 h-6" />
              <span className="text-sm">Referral Program</span>
            </Button>
            <Button variant="secondary" className="h-auto p-4 flex-col space-y-2">
              <TrendingUp className="w-6 h-6" />
              <span className="text-sm">Leaderboard</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Available Surveys */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div>
              <CardTitle>Available Surveys</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Choose from {surveyData.length} high-paying opportunities
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surveyData.map((survey, index) => (
              <SurveyCard key={index} {...survey} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "Completed survey", title: "Brand Awareness Study", reward: "$8.50", time: "2 hours ago" },
              { action: "Redeemed points", title: "$25 PayPal Cash", points: "-2,500 pts", time: "1 day ago" },
              { action: "Completed survey", title: "Product Testing", reward: "$15.00", time: "3 days ago" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.title}</p>
                </div>
                <div className="text-right">
                  {activity.reward && (
                    <p className="font-medium text-success">{activity.reward}</p>
                  )}
                  {activity.points && (
                    <p className="font-medium text-warning">{activity.points}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;