import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MessageCircle, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
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
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our Equal Contribution Calculator? We'd love to hear from you. Get in touch for support, feedback, or suggestions.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="What is your message about?" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your question, feedback, or suggestion..."
                    className="min-h-[120px] resize-none"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We typically respond to inquiries within 24-48 hours during business days. For urgent technical issues, we'll do our best to respond even sooner.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Is the calculator really free?</h4>
                    <p className="text-muted-foreground text-sm">
                      Yes, our Equal Contribution Calculator is completely free to use with no hidden fees or premium features.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Do you store my calculation data?</h4>
                    <p className="text-muted-foreground text-sm">
                      No, all calculations are performed locally in your browser. We don't store any of your personal calculation data.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Can I use this for business expenses?</h4>
                    <p className="text-muted-foreground text-sm">
                      While designed for personal use, the calculator can handle any type of group expense splitting scenario.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Is there a mobile app?</h4>
                    <p className="text-muted-foreground text-sm">
                      Our web calculator is fully responsive and works great on mobile devices. No app download required!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Support Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Technical Issues</p>
                        <p className="text-sm text-muted-foreground">Calculator not working, errors, browser compatibility</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Feature Requests</p>
                        <p className="text-sm text-muted-foreground">Suggestions for new features or improvements</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">General Feedback</p>
                        <p className="text-sm text-muted-foreground">Comments about your experience using the calculator</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-info rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Business Inquiries</p>
                        <p className="text-sm text-muted-foreground">Partnership opportunities, licensing, or commercial use</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="text-center mt-16 pt-8 border-t border-accent/30">
            <p className="text-muted-foreground text-lg">
              Developed with ❤️ by <span className="font-semibold text-primary">M.Mitra</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              We value your feedback and are committed to continuous improvement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
