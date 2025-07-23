import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  HelpCircle,
  Shield,
  Briefcase
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", category: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      value: "support@gigrift.com",
      description: "24/7 email support"
    },
    {
      icon: Phone,
      title: "Phone Support",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Tech Street, Suite 100",
      description: "San Francisco, CA 94105"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      description: "Average response time"
    }
  ];

  const supportCategories = [
    {
      icon: HelpCircle,
      title: "General Questions",
      description: "Questions about how GigRift works"
    },
    {
      icon: Shield,
      title: "Account & Security",
      description: "Login issues, security concerns"
    },
    {
      icon: MessageSquare,
      title: "Survey Support",
      description: "Issues with specific surveys"
    },
    {
      icon: Briefcase,
      title: "Business Inquiries",
      description: "Partnership and business questions"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions? We're here to help. Reach out to our support team and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((info, index) => (
          <Card key={index}>
            <CardContent className="pt-6 text-center">
              <info.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
              <p className="font-medium">{info.value}</p>
              <p className="text-sm text-muted-foreground">{info.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Questions</SelectItem>
                    <SelectItem value="account">Account & Security</SelectItem>
                    <SelectItem value="survey">Survey Support</SelectItem>
                    <SelectItem value="business">Business Inquiries</SelectItem>
                    <SelectItem value="technical">Technical Issues</SelectItem>
                    <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="min-h-[120px]"
                  placeholder="Please provide as much detail as possible..."
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Support Categories */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Help</CardTitle>
              <p className="text-muted-foreground">
                Common support categories to help you get assistance faster.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportCategories.map((category, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                    <category.icon className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">How long does it take to get paid?</h3>
                  <p className="text-sm text-muted-foreground">
                    Payments are processed within 24 hours of survey completion.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">What's the minimum withdrawal amount?</h3>
                  <p className="text-sm text-muted-foreground">
                    The minimum withdrawal amount is $10.00.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">How do I qualify for surveys?</h3>
                  <p className="text-sm text-muted-foreground">
                    Survey qualification is based on demographics and profile information.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;