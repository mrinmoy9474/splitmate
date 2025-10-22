import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, Users, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Calculator
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent mb-6">
              About Equal Contribution Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The most advanced and user-friendly bill splitting calculator designed to make group expenses effortless and fair.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-primary" />
                  What is Equal Contribution Calculator?
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  Equal Contribution Calculator is a sophisticated web application designed to solve the common problem of splitting bills fairly among groups. Whether you're dividing restaurant expenses, sharing vacation costs, or splitting household bills, our calculator ensures everyone pays their fair share with minimal hassle.
                </p>
                <p>
                  Our advanced algorithm optimizes the number of transactions needed, reducing the complexity of settling debts within a group. Instead of everyone paying everyone else, we calculate the most efficient way to balance the books with the fewest transfers possible.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Zap className="h-5 w-5 text-warning" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Real-time calculation as you type</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Support for unlimited participants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <span>Smart input validation (alphabets for names, numbers for amounts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-info rounded-full mt-2 flex-shrink-0"></div>
                      <span>Optimized transfer calculations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                      <span>Detailed mathematical explanations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Mobile-responsive design</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="h-5 w-5 text-secondary" />
                    Perfect For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Group dining and restaurant bills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Vacation and travel expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <span>Shared apartment utilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-info rounded-full mt-2 flex-shrink-0"></div>
                      <span>Office team lunches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                      <span>Event planning costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Any group expense scenario</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Shield className="h-6 w-6 text-success" />
                  Why Choose Our Calculator?
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  Unlike simple bill splitting apps, our Equal Contribution Calculator uses advanced algorithms to minimize the number of transactions required to settle debts. This means less confusion, fewer payments to track, and a cleaner resolution to group expenses.
                </p>
                <p>
                  We've designed the interface to be intuitive and error-free, with smart validation that prevents common input mistakes. Our calculator is also completely free to use, with no ads or premium features - we believe fair bill splitting should be accessible to everyone.
                </p>
                <p>
                  The application is built with modern web technologies, ensuring fast performance, reliability, and compatibility across all devices and browsers.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold">Add Participants</h4>
                      <p className="text-muted-foreground">Enter the names of everyone who contributed to the expense and their respective amounts.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold">Automatic Calculation</h4>
                      <p className="text-muted-foreground">Our algorithm calculates the equal share for each person and determines the optimal transfers needed.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold">Get Results</h4>
                      <p className="text-muted-foreground">See exactly who needs to pay whom and how much, along with a mathematical explanation of the calculation.</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Developer Credit */}
          <div className="text-center mt-16 pt-8 border-t border-accent/30">
            <p className="text-muted-foreground text-lg">
              Developed with ❤️ by <span className="font-semibold text-primary">M.Mitra</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Committed to making bill splitting fair and effortless for everyone
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
