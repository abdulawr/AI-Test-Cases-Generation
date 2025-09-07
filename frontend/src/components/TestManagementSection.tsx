import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  FolderOpen, 
  BarChart3, 
  Layers, 
  FileText, 
  Badge as BadgeIcon,
  Users,
  MessageCircle,
  Bell,
  History,
  AtSign
} from 'lucide-react';

const TestManagementSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            <BarChart3 className="inline-block mr-4 icon-gradient" />
            Advanced Test Management
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive test case organization and tracking system
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Project Structure Card */}
          <Card className="border-0 shadow-lg h-full">
            <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <FolderOpen className="mr-3 h-6 w-6" />
                Project Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6">
                <h6 className="font-bold text-primary mb-4 flex items-center">
                  <Layers className="mr-2 h-5 w-5" />
                  Hierarchical Organization
                </h6>
                <ul className="ml-4 space-y-2">
                  <li className="flex items-center">
                    <BarChart3 className="h-4 w-4 text-primary mr-2" />
                    Project Level
                  </li>
                  <li className="flex items-center ml-4">
                    <Layers className="h-4 w-4 text-green-500 mr-2" />
                    Module Division
                  </li>
                  <li className="flex items-center ml-8">
                    <FileText className="h-4 w-4 text-blue-500 mr-2" />
                    Individual Test Cases
                  </li>
                </ul>
              </div>
              
              <div>
                <h6 className="font-bold text-primary mb-4 flex items-center">
                  <BadgeIcon className="mr-2 h-5 w-5" />
                  Test Case Fields
                </h6>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Core Fields:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <span className="h-3 w-3 bg-primary rounded mr-2"></span>
                        Test ID
                      </li>
                      <li className="flex items-center">
                        <span className="h-3 w-3 bg-secondary rounded mr-2"></span>
                        Description
                      </li>
                      <li className="flex items-center">
                        <span className="h-3 w-3 bg-blue-500 rounded mr-2"></span>
                        Pre-conditions
                      </li>
                      <li className="flex items-center">
                        <span className="h-3 w-3 bg-green-500 rounded mr-2"></span>
                        Test Steps
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Management:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <span className="h-3 w-3 bg-yellow-500 rounded mr-2"></span>
                        Priority
                      </li>
                      <li className="flex items-center">
                        <span className="h-3 w-3 bg-primary rounded mr-2"></span>
                        Assignee
                      </li>
                      <li className="flex items-center">
                        <span className="h-3 w-3 bg-blue-500 rounded mr-2"></span>
                        Estimated Time
                      </li>
                      <li className="flex items-center">
                        <span className="h-3 w-3 bg-green-500 rounded mr-2"></span>
                        Due Date
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Status Tracking Card */}
          <Card className="border-0 shadow-lg h-full">
            <CardHeader className="bg-gradient-success text-white rounded-t-lg">
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-3 h-6 w-6" />
                Status Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6">
                <h6 className="font-bold text-green-600 mb-4 flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Test Execution Status
                </h6>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="status-badge status-pending">Not Started</span>
                  <span className="status-badge status-in-progress">In Progress</span>
                  <span className="status-badge status-passed">Passed</span>
                  <span className="status-badge status-failed">Failed</span>
                  <span className="status-badge status-blocked">Blocked</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h6 className="font-bold text-green-600 mb-4 flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Collaboration Features
                </h6>
                <ul className="ml-4 space-y-2">
                  <li className="flex items-center">
                    <MessageCircle className="h-4 w-4 text-primary mr-2" />
                    Test Case Comments
                  </li>
                  <li className="flex items-center">
                    <AtSign className="h-4 w-4 text-green-500 mr-2" />
                    Team Mentions
                  </li>
                  <li className="flex items-center">
                    <History className="h-4 w-4 text-blue-500 mr-2" />
                    Change History
                  </li>
                  <li className="flex items-center">
                    <Bell className="h-4 w-4 text-yellow-500 mr-2" />
                    Notifications
                  </li>
                </ul>
              </div>
              
              <div>
                <Progress value={45} className="mb-2 h-2" />
                <div className="text-sm text-muted-foreground flex flex-wrap gap-2">
                  <span className="text-green-600">45% Passed</span> •
                  <span className="text-red-600">15% Failed</span> •
                  <span className="text-yellow-600">20% Pending</span> •
                  <span className="text-blue-600">20% Not Started</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestManagementSection;