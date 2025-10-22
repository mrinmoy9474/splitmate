import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, Scale, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Terms() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our Equal Contribution Calculator service.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  By accessing and using the Equal Contribution Calculator website and services ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These Terms of Service ("Terms") govern your relationship with Equal Contribution Calculator operated by M.Mitra ("us", "we", or "our").
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-secondary" />
                  Description of Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Equal Contribution Calculator is a free web-based tool that helps users calculate fair bill splitting among groups. The service provides:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Mathematical calculations for equal expense sharing</li>
                    <li>• Optimization algorithms to minimize payment transfers</li>
                    <li>• Real-time calculation results</li>
                    <li>• Educational explanations of the mathematical process</li>
                    <li>• No registration or personal information requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Scale className="h-5 w-5 text-success" />
                  User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Appropriate Use</h4>
                    <p className="text-muted-foreground">
                      You agree to use the service only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use does not violate any applicable laws or regulations.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Data Accuracy</h4>
                    <p className="text-muted-foreground">
                      You are responsible for the accuracy of any data you input into the calculator. While our algorithms are designed to be accurate, you should verify calculations for important financial decisions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Prohibited Activities</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Attempting to reverse engineer or copy the calculation algorithms</li>
                      <li>• Using automated tools to access the service excessively</li>
                      <li>• Attempting to compromise the security of the website</li>
                      <li>• Using the service for any illegal or fraudulent activities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Disclaimers and Limitations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Service Availability</h4>
                    <p className="text-muted-foreground">
                      While we strive to maintain continuous service availability, we do not guarantee that the service will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue the service at any time without notice.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Accuracy of Calculations</h4>
                    <p className="text-muted-foreground">
                      Our calculator is designed to provide accurate mathematical results based on the algorithms implemented. However, we recommend verifying important calculations independently and do not accept responsibility for financial decisions made based solely on our calculations.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Limitation of Liability</h4>
                    <p className="text-muted-foreground">
                      To the fullest extent permitted by law, M.Mitra and Equal Contribution Calculator shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    The service and its original content, features, and functionality are and will remain the exclusive property of M.Mitra and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                  </p>
                  <p className="text-muted-foreground">
                    You may not copy, modify, distribute, sell, or lease any part of our services or included software, nor may you reverse engineer or attempt to extract the source code of that software, unless laws prohibit those restrictions or you have our written permission.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Privacy and Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices regarding the collection and use of your information.
                  </p>
                  <p className="text-muted-foreground">
                    All calculation data (names and amounts) is processed locally in your browser and is not transmitted to or stored on our servers. We collect only minimal, anonymized analytics data to improve the service.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Free Service</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Equal Contribution Calculator is provided as a free service. We reserve the right to introduce premium features or advertising in the future, but the core calculation functionality will remain free for all users.
                  </p>
                  <p className="text-muted-foreground">
                    We do not guarantee any specific level of service or support for the free version of our calculator.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Modifications to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                  <p className="text-muted-foreground">
                    What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    These Terms shall be interpreted and governed by the laws of the jurisdiction in which the service operates, without regard to its conflict of law provisions.
                  </p>
                  <p className="text-muted-foreground">
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us through our website. We will respond to inquiries in a timely manner.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Developer Credit */}
          <div className="text-center mt-16 pt-8 border-t border-accent/30">
            <p className="text-muted-foreground text-lg">
              Developed with ❤️ by <span className="font-semibold text-primary">M.Mitra</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Committed to providing transparent and fair terms of service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
