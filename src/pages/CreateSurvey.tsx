import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Trash2, 
  Save, 
  Eye, 
  Settings,
  Users,
  DollarSign,
  Clock,
  Target
} from "lucide-react";

const CreateSurvey = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: "multiple-choice",
      question: "",
      options: ["", ""],
      required: true
    }
  ]);

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      type: "multiple-choice",
      question: "",
      options: ["", ""],
      required: true
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const addOption = (questionId: number) => {
    setQuestions(questions.map(q => 
      q.id === questionId 
        ? { ...q, options: [...q.options, ""] }
        : q
    ));
  };

  const removeOption = (questionId: number, optionIndex: number) => {
    setQuestions(questions.map(q => 
      q.id === questionId 
        ? { ...q, options: q.options.filter((_, i) => i !== optionIndex) }
        : q
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">Create New Survey</h1>
          <p className="text-muted-foreground">Design your survey and set targeting parameters</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline">
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90">
            Publish Survey
          </Button>
        </div>
      </div>

      <Tabs defaultValue="basic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="targeting">Targeting</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Survey Details</CardTitle>
              <p className="text-sm text-muted-foreground">
                Provide basic information about your survey
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Survey Title</Label>
                  <Input 
                    id="title" 
                    placeholder="e.g. Consumer Shopping Habits Study"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Retail & Shopping</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="food">Food & Beverage</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe what your survey is about and what participants can expect..."
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="duration">Estimated Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="10">10 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="20">20 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60+ minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Survey Questions</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Add and configure your survey questions
                  </p>
                </div>
                <Button onClick={addQuestion} variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Question
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {questions.map((question, index) => (
                <div key={question.id} className="p-4 border rounded-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Question {index + 1}</Badge>
                    {questions.length > 1 && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeQuestion(question.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Question Type</Label>
                      <Select defaultValue={question.type}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                          <SelectItem value="text">Text Response</SelectItem>
                          <SelectItem value="scale">Rating Scale</SelectItem>
                          <SelectItem value="checkbox">Checkbox</SelectItem>
                          <SelectItem value="dropdown">Dropdown</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Required</Label>
                      <Select defaultValue={question.required ? "yes" : "no"}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Question Text</Label>
                    <Textarea 
                      placeholder="Enter your question here..."
                      value={question.question}
                      onChange={(e) => {
                        setQuestions(questions.map(q => 
                          q.id === question.id 
                            ? { ...q, question: e.target.value }
                            : q
                        ));
                      }}
                    />
                  </div>

                  {question.type === "multiple-choice" && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Answer Options</Label>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => addOption(question.id)}
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Option
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <div key={optionIndex} className="flex items-center space-x-2">
                            <Input 
                              placeholder={`Option ${optionIndex + 1}`}
                              value={option}
                              onChange={(e) => {
                                const newOptions = [...question.options];
                                newOptions[optionIndex] = e.target.value;
                                setQuestions(questions.map(q => 
                                  q.id === question.id 
                                    ? { ...q, options: newOptions }
                                    : q
                                ));
                              }}
                            />
                            {question.options.length > 2 && (
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => removeOption(question.id, optionIndex)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="targeting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Target Audience
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Define who should take your survey
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Age Range</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Min age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18">18</SelectItem>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="35">35</SelectItem>
                        <SelectItem value="45">45</SelectItem>
                        <SelectItem value="55">55</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Max age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="35">35</SelectItem>
                        <SelectItem value="45">45</SelectItem>
                        <SelectItem value="55">55</SelectItem>
                        <SelectItem value="65">65+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="global">Global</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Income Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select income" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="low">Under $30k</SelectItem>
                      <SelectItem value="medium">$30k - $75k</SelectItem>
                      <SelectItem value="high">$75k - $150k</SelectItem>
                      <SelectItem value="very-high">$150k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Additional Requirements</Label>
                <Textarea 
                  placeholder="Specify any additional targeting criteria..."
                  rows={3}
                />
              </div>

              <div className="p-4 bg-accent/20 rounded-lg">
                <h4 className="font-medium mb-2">Estimated Reach</h4>
                <p className="text-2xl font-bold text-primary">~12,500 users</p>
                <p className="text-sm text-muted-foreground">
                  Based on your targeting criteria
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                Pricing & Budget
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Set your reward amount and campaign budget
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="reward">Reward per Completion</Label>
                  <div className="relative">
                    <DollarSign className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                    <Input 
                      id="reward"
                      type="number"
                      placeholder="0.00"
                      className="pl-10"
                      step="0.25"
                      min="0.25"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Recommended: $0.50 - $2.00 per minute
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Total Campaign Budget</Label>
                  <div className="relative">
                    <DollarSign className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                    <Input 
                      id="budget"
                      type="number"
                      placeholder="0.00"
                      className="pl-10"
                      step="100"
                      min="100"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Minimum budget: $100
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="responses">Target Responses</Label>
                  <Input 
                    id="responses"
                    type="number"
                    placeholder="1000"
                    min="50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Campaign Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="14">14 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="w-4 h-4 text-primary" />
                    <h4 className="font-medium">Estimated Responses</h4>
                  </div>
                  <p className="text-2xl font-bold">850</p>
                  <p className="text-xs text-muted-foreground">Based on reward amount</p>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-secondary" />
                    <h4 className="font-medium">Est. Completion</h4>
                  </div>
                  <p className="text-2xl font-bold">18 days</p>
                  <p className="text-xs text-muted-foreground">Time to reach target</p>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="w-4 h-4 text-success" />
                    <h4 className="font-medium">Cost per Response</h4>
                  </div>
                  <p className="text-2xl font-bold">$1.76</p>
                  <p className="text-xs text-muted-foreground">Including platform fees</p>
                </Card>
              </div>

              <div className="p-4 border-2 border-dashed border-primary/20 rounded-lg">
                <h4 className="font-medium mb-2">Campaign Summary</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>Reward per completion: <span className="font-medium">$1.50</span></div>
                  <div>Platform fee (15%): <span className="font-medium">$0.26</span></div>
                  <div>Total per response: <span className="font-medium">$1.76</span></div>
                  <div>Campaign budget: <span className="font-medium">$1,500</span></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CreateSurvey;