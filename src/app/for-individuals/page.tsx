import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomerReviews from "@/components/CustomerReviews";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const ForIndividuals = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Become an AI Expert with Personalized, Project-Based Mentorship
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from a practicing industry expert through hands-on projects and personalized guidance tailored to your goals.
          </p>
        </div>

        {/* Why Us Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl text-primary-foreground">🎯</span>
              </div>
              <CardTitle>Personalized Curriculum</CardTitle>
              <CardDescription>
                Every learning path is tailored to your specific goals, background, and career aspirations. No one-size-fits-all approaches.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl text-accent-foreground">👨‍🔬</span>
              </div>
              <CardTitle>Expert Guidance</CardTitle>
              <CardDescription>
                Learn directly from a published Senior AI Scientist with 6+ years of industry experience and proven track record.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl text-primary-foreground">🚀</span>
              </div>
              <CardTitle>Real-World Projects</CardTitle>
              <CardDescription>
                Build end-to-end AI systems that solve actual business problems, giving you portfolio-worthy experience.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Curriculum Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mentorship Covers the Full AI Lifecycle</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🧠</span>
                  AI & Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Deep Learning</Badge>
                    <Badge variant="secondary">GNNs</Badge>
                    <Badge variant="secondary">Transformers</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">NLP</Badge>
                    <Badge variant="outline">LLM Fine-Tuning</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">XGBoost</Badge>
                    <Badge variant="default">Random Forest</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Master modern ML techniques from classical algorithms to cutting-edge neural architectures.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  MLOps & Production Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">CI/CD</Badge>
                    <Badge variant="secondary">GitHub Actions</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Prometheus</Badge>
                    <Badge variant="outline">Grafana</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Azure ML</Badge>
                    <Badge variant="default">AWS SageMaker</Badge>
                    <Badge variant="default">GCP Vertex AI</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Learn to deploy, monitor, and scale ML systems in production environments.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🗄️</span>
                  Data Engineering & Big Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Snowflake</Badge>
                    <Badge variant="secondary">BigQuery</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Kafka</Badge>
                    <Badge variant="outline">PySpark</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Build robust data pipelines and architectures that can handle enterprise-scale workloads.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Customer Reviews */}
        <CustomerReviews type="mentorship" />

        {/* Call-to-Action */}
        <div className="container mx-auto px-4 pb-16">
          <div className="text-center">
            <Card className="bg-gradient-hero p-8 shadow-glow">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-foreground">Start Your AI Journey Today</h2>
                <p className="text-primary-foreground/90 mb-6">
                  Join a personalized mentorship program designed to accelerate your career in AI.
                </p>
                <Button asChild size="lg" variant="secondary" className="shadow-accent">
                  <Link href="/contact#mentorship">Apply for Mentorship</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ForIndividuals;