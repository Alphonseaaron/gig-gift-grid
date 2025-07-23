import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  User, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  Banknote,
  Edit,
  Save
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345"
  });

  const stats = {
    totalEarnings: 247.50,
    pendingEarnings: 28.75,
    surveysCompleted: 34,
    averageRating: 4.8,
    currentStreak: 7,
    memberSince: "January 2024"
  };

  const recentEarnings = [
    { id: 1, survey: "Consumer Shopping Habits", amount: 3.50, date: "2024-01-22", status: "Completed" },
    { id: 2, survey: "Mobile App Usage Study", amount: 5.00, date: "2024-01-21", status: "Completed" },
    { id: 3, survey: "Healthcare Awareness", amount: 2.25, date: "2024-01-20", status: "Pending" },
    { id: 4, survey: "Food Delivery Preferences", amount: 4.75, date: "2024-01-19", status: "Completed" },
    { id: 5, survey: "Social Media Habits", amount: 3.25, date: "2024-01-18", status: "Completed" }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleWithdraw = () => {
    toast({
      title: "Withdrawal Requested",
      description: "Your withdrawal request has been submitted and will be processed within 3-5 business days.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="text-muted-foreground">Member since {stats.memberSince}</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-success" />
              Total Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalEarnings.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">${stats.pendingEarnings.toFixed(2)} pending</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-primary" />
              Surveys Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.surveysCompleted}</div>
            <p className="text-xs text-muted-foreground">{stats.currentStreak} day streak</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-secondary" />
              Average Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageRating}/5</div>
            <p className="text-xs text-muted-foreground">Quality responses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Clock className="w-4 h-4 mr-2 text-warning" />
              This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45.25</div>
            <p className="text-xs text-muted-foreground">12 surveys</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="earnings" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="earnings" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Withdrawal</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Minimum withdrawal amount is $10.00
                </p>
              </div>
              <Button 
                onClick={handleWithdraw}
                disabled={stats.totalEarnings < 10}
                className="bg-gradient-primary hover:opacity-90"
              >
                <Banknote className="w-4 h-4 mr-2" />
                Withdraw ${stats.totalEarnings.toFixed(2)}
              </Button>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentEarnings.map((earning) => (
                  <div key={earning.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h3 className="font-medium">{earning.survey}</h3>
                      <p className="text-sm text-muted-foreground">{earning.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${earning.amount.toFixed(2)}</p>
                      <Badge 
                        variant={earning.status === "Completed" ? "default" : "secondary"}
                        className={earning.status === "Completed" ? "bg-success/10 text-success border-success/20" : ""}
                      >
                        {earning.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Personal Information</CardTitle>
              <Button
                variant="outline"
                onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </>
                ) : (
                  <>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={profile.address}
                    onChange={(e) => setProfile(prev => ({ ...prev, address: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Survey Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stats.currentStreak} days</div>
                  <p className="text-muted-foreground mb-4">Current streak</p>
                  <Progress value={(stats.currentStreak / 30) * 100} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    {30 - stats.currentStreak} days to reach monthly goal
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quality Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">{stats.averageRating}/5</div>
                  <p className="text-muted-foreground mb-4">Response quality</p>
                  <Progress value={(stats.averageRating / 5) * 100} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    Excellent quality responses
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-success/10 border border-success/20 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>First Survey Completed</span>
                  </div>
                  <Badge className="bg-success/10 text-success border-success/20">Achieved</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-success/10 border border-success/20 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span>10 Surveys Completed</span>
                  </div>
                  <Badge className="bg-success/10 text-success border-success/20">Achieved</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 border rounded-lg">
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-muted rounded-full mr-3" />
                    <span>100 Surveys Completed</span>
                  </div>
                  <Badge variant="secondary">66 to go</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;