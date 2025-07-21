import { Button } from "@/components/ui/button";
import { Coins, Menu, User, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Coins className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              GigRift
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Surveys
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Rewards
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Leaderboard
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 px-3 py-1 bg-accent rounded-full">
            <Coins className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">2,450 pts</span>
          </div>
          
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Bell className="w-4 h-4" />
          </Button>
          
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <User className="w-4 h-4" />
          </Button>
          
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;