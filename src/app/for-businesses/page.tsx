import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomerReviews from "@/components/CustomerReviews";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const ForBusinesses = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Transform Your Customer Support with AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deliver instant, accurate, 24/7 support on WhatsApp and slash your operational costs. Our AI-powered chatbot uses your own business data to provide expert answers.
          </p>
        </div>

        {/* Featured Automation Section */}
        <Card className="bg-gradient-hero shadow-glow overflow-hidden mb-16">
          <div className="grid md:grid-cols-2 items-center">
            <CardContent className="p-8 md:p-12">
              <Badge variant="secondary" className="mb-4">Featured Automation</Badge>
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">WhatsApp AI Chatbot with RAG</h2>
              <p className="text-primary-foreground/90 text-lg mb-6">
                Stop letting your customers wait. This intelligent chatbot integrates directly with your WhatsApp Business account, using OpenAI's advanced models and your company's knowledge base to resolve queries instantly.
              </p>
              
              <div className="space-y-4 text-primary-foreground/80">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>**24/7 Availability:** Provide round-the-clock support without increasing headcount.</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6"></path></svg>
                  <span>**Knowledge Base Integration:** Answers are sourced directly from your documents, ensuring accuracy and consistency.</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  <span>**Powered by OpenAI:** Leverages state-of-the-art models like GPT-4o for natural, human-like conversations.</span>
                </div>
              </div>
            </CardContent>
            <div className="p-8 bg-black/20 h-full flex items-center justify-center min-h-[300px]">
              <Image
                  src="/images/whatsapp-automation.jpeg"
                  alt="WhatsApp AI Automation Flow"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-2xl object-cover"
                />
            </div>
          </div>
        </Card>

        {/* Business Benefits */}
        <div className="my-16">
            <h2 className="text-3xl font-bold text-center mb-2">The Business Impact</h2>
            <p className="text-center text-muted-foreground mb-8">This isn't just a chatbot. It's a business transformation tool.</p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <Card><CardContent className="p-6"><h3 className="font-bold text-xl mb-2">Cut Support Costs</h3><p className="text-muted-foreground">Automate up to 80% of routine inquiries and free up your human agents for high-value tasks.</p></CardContent></Card>
                <Card><CardContent className="p-6"><h3 className="font-bold text-xl mb-2">Boost Customer Satisfaction</h3><p className="text-muted-foreground">Deliver instant, accurate answers on the world's most popular messaging app.</p></CardContent></Card>
                <Card><CardContent className="p-6"><h3 className="font-bold text-xl mb-2">Scale Effortlessly</h3><p className="text-muted-foreground">Handle unlimited conversations simultaneously without compromising on quality.</p></CardContent></Card>
            </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-transparent shadow-glow-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary-foreground">Ready to Automate Your Success?</CardTitle>
              <CardDescription className="text-lg text-primary-foreground/80">
                Let's build a custom AI solution that solves your specific challenges and drives growth.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent">
                <Link href="/contact">Schedule a Free Business Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <CustomerReviews type="business" />
      </main>

      <Footer />
    </div>
  );
};

export default ForBusinesses;