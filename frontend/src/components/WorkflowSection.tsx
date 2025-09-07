import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  Brain, 
  FolderOpen, 
  CheckSquare, 
  Download,
  FileText,
  Code,
  Table
} from 'lucide-react';

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 animate-fade-in-up">
            <FolderOpen className="inline-block mr-4 icon-gradient" />
            Complete Test Management Workflow
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up">
            From SRS upload to comprehensive test management - see how AI transforms your testing process
          </p>
        </div>
        
        <div className="test-management-flow">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Step 1 */}
            <Card className="flow-step">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Upload className="mr-3 h-6 w-6" />
                  1. Upload SRS Document
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Upload your Software Requirement Specification in PDF, DOCX, or TXT format
                </p>
                <div className="flex items-center space-x-4">
                  <FileText className="h-8 w-8 text-red-500" />
                  <span className="text-2xl">→</span>
                  <Brain className="h-8 w-8 text-primary animate-pulse-slow" />
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="flow-step">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Brain className="mr-3 h-6 w-6" />
                  2. AI Analysis & Generation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  AI analyzes requirements and generates comprehensive test cases in JSON format
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">ChatGPT</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Gemini</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">Claude</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="flow-step">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <FolderOpen className="mr-3 h-6 w-6" />
                  3. Project Organization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  System creates projects and organizes tests into modules with structured fields
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-muted-foreground mb-2">Project Structure:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center"><FolderOpen className="h-4 w-4 text-yellow-500 mr-2" />Modules</li>
                      <li className="flex items-center"><FileText className="h-4 w-4 text-blue-500 mr-2" />Test Cases</li>
                      <li className="flex items-center"><Badge className="h-4 w-4 text-green-500 mr-2" />Categories</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-muted-foreground mb-2">Test Fields:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center"><span className="h-4 w-4 bg-primary rounded mr-2"></span>Test ID</li>
                      <li className="flex items-center"><span className="h-4 w-4 bg-secondary rounded mr-2"></span>Description</li>
                      <li className="flex items-center"><span className="h-4 w-4 bg-blue-500 rounded mr-2"></span>Pre-conditions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="flow-step">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <CheckSquare className="mr-3 h-6 w-6" />
                  4. Test Management & Execution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Manage test execution with status tracking and collaborative features
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="status-badge status-pending">
                    Pending
                  </span>
                  <span className="status-badge status-passed">
                    Passed
                  </span>
                  <span className="status-badge status-failed">
                    Failed
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Export Options */}
          <Card className="flow-step mt-8">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Download className="mr-3 h-6 w-6" />
                5. Export & Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-muted-foreground">
                Export test cases and management data in multiple formats for seamless integration
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Code className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h6 className="font-semibold">JSON Format</h6>
                  <p className="text-sm text-muted-foreground">Structured data for API integration</p>
                </div>
                <div className="text-center">
                  <FileText className="h-12 w-12 text-red-500 mx-auto mb-3" />
                  <h6 className="font-semibold">PDF Reports</h6>
                  <p className="text-sm text-muted-foreground">Professional documentation</p>
                </div>
                <div className="text-center">
                  <Table className="h-12 w-12 text-green-500 mx-auto mb-3" />
                  <h6 className="font-semibold">CSV Export</h6>
                  <p className="text-sm text-muted-foreground">Spreadsheet compatibility</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;