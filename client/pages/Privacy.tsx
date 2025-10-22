import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we protect your data when using the Equal Contribution Calculator.
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
                  <Shield className="h-6 w-6 text-primary" />
                  Our Commitment to Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  At Equal Contribution Calculator, we are committed to protecting your privacy and ensuring the security of any information you provide while using our service. This Privacy Policy explains how we collect, use, and protect your information.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Eye className="h-5 w-5 text-secondary" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Information You Provide</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Names and amounts entered in the calculator (processed locally in your browser)</li>
                      <li>• No personal identification information is required or collected</li>
                      <li>• No email addresses, phone numbers, or payment information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Automatically Collected Information</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Basic analytics data (page views, session duration)</li>
                      <li>• Device and browser information for compatibility</li>
                      <li>• IP address for security and analytics purposes</li>
                      <li>• Cookies for website functionality (essential cookies only)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Lock className="h-5 w-5 text-success" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Calculator Data</h4>
                    <p className="text-muted-foreground">
                      All names and amounts you enter are processed entirely within your browser. This data is never transmitted to our servers or stored anywhere outside your device. When you refresh the page or close your browser, this information is permanently deleted.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Analytics Information</h4>
                    <p className="text-muted-foreground">
                      We use anonymous analytics to understand how our calculator is used, which helps us improve the service. This includes tracking page visits, user engagement, and identifying technical issues. No personally identifiable information is included in this data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-info" />
                  Data Protection & Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Local Processing</h4>
                    <p className="text-muted-foreground">
                      Your calculation data (names and amounts) never leaves your device. All calculations are performed locally in your browser using JavaScript, ensuring complete privacy of your financial information.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Secure Connection</h4>
                    <p className="text-muted-foreground">
                      Our website uses HTTPS encryption to ensure that any communication between your browser and our servers is secure and protected from interception.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">No Data Storage</h4>
                    <p className="text-muted-foreground">
                      We do not store any of your calculation data on our servers. Each session is independent, and no calculation history is maintained.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We use minimal cookies that are essential for the website to function properly. These include:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Session cookies for maintaining your calculator state during your visit</li>
                    <li>• Analytics cookies to understand website usage (anonymized data only)</li>
                    <li>• No advertising or tracking cookies from third parties</li>
                  </ul>
                  <p className="text-muted-foreground">
                    You can disable cookies in your browser settings, though this may affect some functionality of the calculator.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We may use third-party services for:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Website hosting and content delivery</li>
                    <li>• Anonymous analytics and performance monitoring</li>
                    <li>• Security and DDoS protection</li>
                  </ul>
                  <p className="text-muted-foreground">
                    These services do not have access to your calculation data as it is processed entirely within your browser.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Since we don't store your personal calculation data, most data protection rights are automatically fulfilled:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Right to access: No personal data is stored to access</li>
                    <li>• Right to deletion: Data is automatically deleted when you leave the site</li>
                    <li>• Right to portability: You can copy your results before leaving the page</li>
                    <li>• Right to opt-out: You can disable analytics cookies in your browser</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or our data practices, please contact us through our website. We are committed to addressing any concerns you may have about your privacy.
                </p>
                <p className="text-muted-foreground mt-4">
                  This Privacy Policy may be updated from time to time to reflect changes in our practices or for legal requirements. We will notify users of any significant changes by updating the "Last updated" date at the top of this policy.
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
              Committed to protecting your privacy and data security
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
