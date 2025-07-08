import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Founder Profile */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-card shadow-elegant">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="w-48 h-48 mx-auto md:mx-0 bg-gradient-hero rounded-full flex items-center justify-center mb-6">
                    <span className="text-6xl text-primary-foreground">👨‍💼</span>
                  </div>
                  <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold mb-2">Oluwaferanmi-Victor Oluwagbamila</h1>
                    <p className="text-lg text-primary font-semibold">AI & Data Scientist</p>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Oluwaferanmi-Victor is a seasoned AI professional with over 6 years of experience transforming businesses through intelligent automation and data-driven solutions. His multi-disciplinary approach spans Engineering, Security, and Governance, ensuring AI implementations that are both powerful and responsible.
                    </p>
                    <p>
                      Throughout his career, Oluwaferanmi-Victor has delivered exceptional results, including a 20% revenue uplift for enterprise clients and reducing fraud by 42% through advanced ML models. His expertise combines deep technical knowledge with practical business acumen, making him uniquely positioned to bridge the gap between cutting-edge AI research and real-world applications.
                    </p>
                    <p>
                      As both a practitioner and mentor, Victor is passionate about democratizing AI knowledge and helping the next generation of professionals navigate the rapidly evolving landscape of artificial intelligence and machine learning.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credentials & Recognition */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education & Certifications */}
          <Card className="bg-card shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                Education & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">MSc, Artificial Intelligence</p>
                    <p className="text-sm text-muted-foreground">University of Wolverhampton</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">BSc, Computer Science</p>
                    <p className="text-sm text-muted-foreground">Babcock University</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">AWS ML Specialty</Badge>
                    <Badge variant="outline">Google Gen AI Certified</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Thought Leadership */}
          <Card className="bg-card shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎤</span>
                Thought Leadership
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">Keynote Speaker</p>
                    <p className="text-sm text-muted-foreground">MLConf 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">Published Researcher</p>
                    <p className="text-sm text-muted-foreground">KDD 2023</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">Open Source Contributor</p>
                    <p className="text-sm text-muted-foreground">Hugging Face Transformers, LangChain</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-hero shadow-glow">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-primary-foreground">Our Mission</h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                To democratize AI knowledge and empower businesses and individuals to harness the transformative power of artificial intelligence through expert guidance, practical education, and innovative solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;