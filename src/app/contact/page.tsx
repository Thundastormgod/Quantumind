'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [businessForm, setBusinessForm] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleBusinessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Sent",
      description: "We'll get back to you within 24 hours to schedule your free consultation.",
    });
    setBusinessForm({ name: '', company: '', email: '', message: '' });
  };

  const handleBusinessFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBusinessForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Let's Build the Future. Together.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're looking to transform your business or advance your career in AI, we're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Business Inquiry Form */}
          <Card id="business" className="bg-card shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🏢</span>
                Discuss Your Business Needs
              </CardTitle>
              <CardDescription>
                Tell us about your challenges and let's explore how AI can drive your business forward.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBusinessSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={businessForm.name}
                    onChange={handleBusinessFormChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={businessForm.company}
                    onChange={handleBusinessFormChange}
                    placeholder="Company name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={businessForm.email}
                    onChange={handleBusinessFormChange}
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={businessForm.message}
                    onChange={handleBusinessFormChange}
                    placeholder="Tell us about your business challenges and goals..."
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Request a Consultation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Mentorship Application */}
          <Card id="mentorship" className="bg-gradient-card shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                Inquire About 1-on-1 Mentorship
              </CardTitle>
              <CardDescription>
                Ready to accelerate your AI career with personalized guidance?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Application Process</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  To apply for mentorship, please send your CV and a statement of purpose explaining:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Your current background and experience</li>
                  <li>Your specific AI/ML goals and interests</li>
                  <li>What you hope to achieve through mentorship</li>
                  <li>Your preferred learning style and time commitment</li>
                </ul>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Send your application to:
                </p>
                <a 
                  href="mailto:gbamilavictor@gmail.com?subject=AI Mentorship Application"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                >
                  <span className="text-xl">📧</span>
                  gbamilavictor@gmail.com
                </a>
              </div>
              
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <p className="text-sm text-center">
                  <strong>Limited Spots Available:</strong> We accept only a select number of mentorship students to ensure quality personalized attention.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="max-w-2xl mx-auto mt-16">
          <Card className="bg-gradient-hero shadow-glow">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-primary-foreground">Get In Touch</h2>
              <p className="text-primary-foreground/90 mb-6">
                Have questions? We're here to help you on your AI journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-primary-foreground/90">
                  <strong>Business Inquiries:</strong> Fast response within 24 hours
                </div>
                <div className="text-primary-foreground/90">
                  <strong>Mentorship:</strong> Applications reviewed weekly
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;