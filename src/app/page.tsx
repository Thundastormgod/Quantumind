import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomerReviews from "@/components/CustomerReviews";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              QuantumindAI: Intelligent Automation for Business. Expert-Led AI Training for You.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions while advancing your career through personalized mentorship from industry experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant">
                <Link href="/for-businesses">Automate Your Business</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-accent">
                <Link href="/for-individuals">Start Your AI Journey</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Dual Focus on Value Creation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a business leader or an aspiring AI professional, we provide the expertise and guidance you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For Businesses Card */}
            <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl text-primary-foreground">🏢</span>
                </div>
                <CardTitle className="text-2xl">For Your Business</CardTitle>
                <CardDescription className="text-base">
                  We build secure, scalable AI and automation solutions that drive measurable business growth. Our track record includes solutions that have delivered over £5M in value through intelligent process automation and data-driven insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href="/for-businesses">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* For Individuals Card */}
            <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl text-accent-foreground">🎓</span>
                </div>
                <CardTitle className="text-2xl">For Your Career</CardTitle>
                <CardDescription className="text-base">
                  Master AI through personalized 1-on-1 mentorship with a practicing industry expert. Learn by building real-world projects and gain the skills that top tech companies are seeking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Link href="/for-individuals">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Customer Reviews */}
        <CustomerReviews type="mixed" />

        {/* Projects Showcase Teaser */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See Our Work in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore real AI automation projects we've built for clients across industries.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-accent-foreground">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Portfolio of Success</h3>
                <p className="text-muted-foreground mb-6">
                  From fraud detection systems saving £2M+ annually to supply chain automation reducing costs by 40%, discover the transformative AI solutions we've delivered.
                </p>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href="/projects">View Our Projects</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-hero shadow-glow">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-6 text-primary-foreground">Proven Results</h2>
                <div className="grid md:grid-cols-3 gap-8 text-primary-foreground/90">
                  <div>
                    <div className="text-3xl font-bold mb-2">£5M+</div>
                    <div className="text-sm">Value Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">42%</div>
                    <div className="text-sm">Fraud Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">6+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
