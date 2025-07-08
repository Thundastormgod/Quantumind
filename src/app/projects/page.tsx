import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface AutomationProject {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  benefits: string[];
  image: string;
  testimonial?: {
    content: string;
    author: string;
    role: string;
  };
}

const categories: ServiceCategory[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Intelligent automation powered by cutting-edge AI and machine learning technologies',
    icon: '🧠',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'business-process',
    name: 'Business Process Automation',
    description: 'Streamline operations and boost efficiency across your organization',
    icon: '⚙️',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'customer-engagement',
    name: 'Customer Engagement',
    description: 'Enhance customer experiences through automated interactions',
    icon: '💬',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'data-integration',
    name: 'Data Integration',
    description: 'Seamlessly connect and synchronize your business data',
    icon: '🔗',
    color: 'bg-amber-100 text-amber-800'
  }
];

const featuredProjects: AutomationProject[] = [
  {
    id: 'whatsapp-ai',
    title: 'AI-Powered WhatsApp Automation',
    category: 'ai-ml',
    description: 'Transform customer engagement with our intelligent WhatsApp automation solution that provides instant, accurate responses 24/7.',
    features: [
      'Natural language understanding',
      'Automated responses to common queries',
      'Seamless handoff to human agents',
      'Multi-language support',
      'CRM integration'
    ],
    technologies: ['OpenAI', 'WhatsApp Business API', 'Node.js', 'MongoDB'],
    benefits: [
      '80% faster response times',
      '24/7 availability',
      'Reduced operational costs',
      'Improved customer satisfaction'
    ],
    image: '/images/whatsapp-ai.jpg',
    testimonial: {
      content: "This WhatsApp automation has transformed our customer service. Response times are down 80% and our team can focus on complex queries.",
      author: "Sarah Johnson",
      role: "Customer Service Director, TechCorp"
    }
  },
  {
    id: 'sales-automation',
    title: 'Intelligent Sales Automation',
    category: 'business-process',
    description: 'Automate lead qualification, follow-ups, and meeting scheduling to boost your sales productivity.',
    features: [
      'Automated lead scoring',
      'Smart meeting scheduling',
      'Personalized follow-ups',
      'CRM synchronization',
      'Performance analytics'
    ],
    technologies: ['HubSpot', 'Zapier', 'n8n', 'Google Workspace'],
    benefits: [
      '40% increase in lead conversion',
      '50% less time spent on admin tasks',
      'Never miss a follow-up',
      'Complete sales pipeline visibility'
    ],
    image: '/images/sales-automation.jpg'
  },
  {
    id: 'data-pipeline',
    title: 'Enterprise Data Pipeline',
    category: 'data-integration',
    description: 'Automate data collection, transformation, and reporting across your organization.',
    features: [
      'Real-time data synchronization',
      'Automated ETL processes',
      'Custom reporting dashboards',
      'Data quality monitoring',
      'API integrations'
    ],
    technologies: ['Apache Airflow', 'Python', 'Snowflake', 'Tableau'],
    benefits: [
      '90% reduction in manual data work',
      'Real-time business insights',
      'Improved data accuracy',
      'Scalable infrastructure'
    ],
    image: '/images/data-pipeline.jpg'
  }
];

// Sample automation projects
const automationProjects: AutomationProject[] = [
  {
    id: 'whatsapp-ai',
    title: 'AI-Powered WhatsApp Automation',
    category: 'ai-ml',
    description: 'Transform customer engagement with intelligent WhatsApp automation that provides instant, accurate responses 24/7.',
    features: [
      'Natural language understanding',
      'Automated responses to common queries',
      'Seamless handoff to human agents',
      'Multi-language support',
      'CRM integration'
    ],
    technologies: ['OpenAI', 'WhatsApp Business API', 'Node.js', 'MongoDB'],
    benefits: [
      '80% faster response times',
      '24/7 availability',
      'Reduced operational costs',
      'Improved customer satisfaction'
    ],
    image: '/images/whatsapp-ai.jpg',
    testimonial: {
      content: "This WhatsApp automation has transformed our customer service. Response times are down 80% and our team can focus on complex queries.",
      author: "Sarah Johnson",
      role: "Customer Service Director, TechCorp"
    }
  },
  {
    id: 'sales-automation',
    title: 'Intelligent Sales Automation',
    category: 'business-process',
    description: 'Automate lead qualification, follow-ups, and meeting scheduling to boost your sales productivity.',
    features: [
      'Automated lead scoring',
      'Smart meeting scheduling',
      'Personalized follow-ups',
      'CRM synchronization',
      'Performance analytics'
    ],
    technologies: ['HubSpot', 'Zapier', 'n8n', 'Google Workspace'],
    benefits: [
      '40% increase in lead conversion',
      '50% less time spent on admin tasks',
      'Never miss a follow-up',
      'Complete sales pipeline visibility'
    ],
    image: '/images/sales-automation.jpg'
  },
  {
    id: 'customer-support',
    title: 'Omnichannel Support Automation',
    category: 'customer-engagement',
    description: 'Unified customer support across email, chat, and social media with intelligent routing and automation.',
    features: [
      'Multi-channel ticket management',
      'AI-powered response suggestions',
      'Automated ticket categorization',
      'Sentiment analysis',
      'Performance analytics'
    ],
    technologies: ['Zendesk', 'Intercom', 'OpenAI', 'Node.js', 'React'],
    benefits: [
      '60% faster resolution times',
      'Consistent cross-channel experience',
      'Reduced agent workload',
      'Actionable insights'
    ],
    image: '/images/customer-support.jpg'
  },
  {
    id: 'data-pipeline',
    title: 'Enterprise Data Pipeline',
    category: 'data-integration',
    description: 'Automate data collection, transformation, and reporting across your organization.',
    features: [
      'Real-time data synchronization',
      'Automated ETL processes',
      'Custom reporting dashboards',
      'Data quality monitoring',
      'API integrations'
    ],
    technologies: ['Apache Airflow', 'Python', 'Snowflake', 'Tableau'],
    benefits: [
      '90% reduction in manual data work',
      'Real-time business insights',
      'Improved data accuracy',
      'Scalable infrastructure'
    ],
    image: '/images/data-pipeline.jpg',
    testimonial: {
      content: "The data pipeline has transformed how we handle information. What used to take days now happens in minutes.",
      author: "Michael Chen",
      role: "Data Operations Manager"
    }
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Our Automation Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered automation solutions can transform your business operations and customer engagement.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`p-6 rounded-xl ${category.color} bg-opacity-50 hover:bg-opacity-70 transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-sm text-gray-700">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {automationProjects.map((project) => {
            const category = categories.find(cat => cat.id === project.category);
            
            return (
              <Card key={project.id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100"></div>
                    <div className="relative h-full flex items-center justify-center p-8">
                      <div className="text-center">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${category?.color} bg-opacity-30`}>
                          {category?.name}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h2>
                        <p className="text-gray-600 mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Business Benefits</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.benefits.map((benefit, i) => (
                            <div key={i} className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-sm text-gray-700">{benefit}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {project.testimonial && (
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <p className="text-sm text-blue-800 italic mb-2">"{project.testimonial.content}"</p>
                          <p className="text-xs font-medium text-blue-900">
                            {project.testimonial.author}, {project.testimonial.role}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 shadow-xl max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Automate Your Business?</h2>
              <p className="text-white/90 mb-8 text-lg">
                Let's discuss how our automation solutions can save you time and money while improving customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100 shadow-md">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/solutions">Explore Solutions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;