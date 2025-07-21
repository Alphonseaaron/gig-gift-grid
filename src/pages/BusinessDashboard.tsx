import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  BarChart3, 
  Users, 
  DollarSign, 
  Clock,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
  Target,
  AlertCircle
} from "lucide-react";

const BusinessDashboard = () => {
  const [surveys] = useState([
    {
      id: 1,
      title: "Consumer Shopping Habits",
      status: "Active",
      responses: 2847,
      budget: 5000,
      spent: 3589.50,
      completion_rate: 94,
      created: "2024-01-15",
      ends: "2024-02-15"
    },
    {
      id: 2,
      title: "Mobile App Usage Study",
      status: "Draft",
      responses: 0,
      budget: 3000,
      spent: 0,
      completion_rate: 0,
      created: "2024-01-20",
      ends: "2024-02-20"
    },
    {
      id: 3,
      title: "Healthcare Awareness Survey",
      status: "Completed",
      responses: 1500,
      budget: 2500,
      spent: 2500,
      completion_rate: 88,
      created: "2023-12-01",
      ends: "2024-01-01"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success/10 text-success border-success/20";
      case "Draft": return "bg-warning/10 text-warning border-warning/20";
      case "Completed": return "bg-muted text-muted-foreground border-border";
      case "Paused": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">Business Dashboard</h1>
          <p className="text-muted-foreground">Manage your surveys and track performance</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          Create New Survey
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <BarChart3 className="w-4 h-4 mr-2 text-primary" />
              Active Surveys
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">2 in draft</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="w-4 h-4 mr-2 text-secondary" />
              Total Responses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,347</div>
            <p className="text-xs text-muted-foreground">+1,203 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-success" />
              Total Spent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$6,089</div>
            <p className="text-xs text-muted-foreground">$4,411 remaining</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Target className="w-4 h-4 mr-2 text-warning" />
              Avg Completion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">91%</div>
            <p className="text-xs text-muted-foreground">Above industry avg</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="surveys" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="surveys">My Surveys</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="surveys" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Survey Management</CardTitle>
              <p className="text-sm text-muted-foreground">
                Create, edit, and monitor your survey campaigns
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {surveys.map((survey) => (
                  <div key={survey.id} className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">{survey.title}</h3>
                        <div className="flex items-center space-x-4">
                          <Badge 
                            variant="outline" 
                            className={getStatusColor(survey.status)}
                          >
                            {survey.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            Created: {survey.created}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            Ends: {survey.ends}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Responses</p>
                        <p className="font-semibold">{survey.responses.toLocaleString()}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Budget</p>
                        <p className="font-semibold">${survey.budget.toLocaleString()}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Spent</p>
                        <p className="font-semibold">${survey.spent.toLocaleString()}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Completion Rate</p>
                        <p className="font-semibold">{survey.completion_rate}%</p>
                      </div>
                    </div>

                    {survey.status === "Active" && (
                      <div className="flex items-center space-x-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-info" />
                        <span className="text-muted-foreground">
                          Survey is live and collecting responses
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                  Response Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-muted/20 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Chart showing response trends over time</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-secondary" />
                  Demographic Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-muted/20 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Pie chart showing user demographics</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-warning" />
                  Completion Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-muted/20 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Average completion time analysis</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-success" />
                  Cost Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-muted/20 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Cost per response breakdown</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing Overview</CardTitle>
              <p className="text-sm text-muted-foreground">
                Manage your account billing and payment methods
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold">Current Balance</h3>
                    <p className="text-2xl font-bold text-primary">$4,411.50</p>
                    <p className="text-sm text-muted-foreground">Available for surveys</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold">This Month</h3>
                    <p className="text-2xl font-bold">$1,203.75</p>
                    <p className="text-sm text-muted-foreground">Total spent</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold">Next Billing</h3>
                    <p className="text-2xl font-bold">Feb 15</p>
                    <p className="text-sm text-muted-foreground">Auto-recharge: $1,000</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Add Funds
                  </Button>
                  <Button variant="outline">
                    Payment Methods
                  </Button>
                  <Button variant="outline">
                    Billing History
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BusinessDashboard;