import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Review {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  outcome?: string;
}

interface CustomerReviewsProps {
  type: 'business' | 'mentorship' | 'mixed';
  title?: string;
  subtitle?: string;
}

const businessReviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow Solutions',
    content: 'QuantumindAI transformed our fraud detection system, reducing false positives by 67% and saving us over £2M annually. Their expertise in production ML is unmatched.',
    rating: 5,
    outcome: '£2M+ Annual Savings'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Head of Operations',
    company: 'Global Logistics Inc',
    content: 'The automation solution they built streamlined our entire supply chain process. What used to take weeks now happens in days, with 40% cost reduction.',
    rating: 5,
    outcome: '40% Cost Reduction'
  },
  {
    id: '3',
    name: 'Dr. Emily Watson',
    role: 'Research Director',
    company: 'BioInnovate Labs',
    content: 'Victor\'s team implemented an AI system that accelerated our drug discovery research by 3x. Their understanding of both AI and domain expertise is exceptional.',
    rating: 5,
    outcome: '3x Faster Research'
  }
];

const mentorshipReviews: Review[] = [
  {
    id: '4',
    name: 'Alex Kumar',
    role: 'Senior ML Engineer',
    company: 'Google',
    content: 'Victor\'s mentorship was a game-changer for my career. His practical approach to teaching MLOps helped me land my dream job at Google. The personalized curriculum was exactly what I needed.',
    rating: 5,
    outcome: 'Landed Google Role'
  },
  {
    id: '5',
    name: 'Jessica Thompson',
    role: 'AI Product Manager',
    company: 'Microsoft',
    content: 'The mentorship program gave me hands-on experience with real-world AI projects. Victor\'s guidance on both technical and strategic aspects was invaluable for my transition to product management.',
    rating: 5,
    outcome: 'Career Transition Success'
  },
  {
    id: '6',
    name: 'David Park',
    role: 'Lead Data Scientist',
    company: 'Stripe',
    content: 'Learning GNNs and advanced ML techniques under Victor\'s guidance was incredible. The project-based approach meant I built a portfolio that directly led to my promotion.',
    rating: 5,
    outcome: 'Promoted to Lead'
  }
];

const CustomerReviews = ({ type, title, subtitle }: CustomerReviewsProps) => {
  const getReviews = () => {
    switch (type) {
      case 'business':
        return businessReviews;
      case 'mentorship':
        return mentorshipReviews;
      case 'mixed':
        return [...businessReviews.slice(0, 2), ...mentorshipReviews.slice(0, 1)];
      default:
        return businessReviews;
    }
  };

  const reviews = getReviews();

  const defaultTitle = type === 'business' 
    ? 'Trusted by Industry Leaders' 
    : type === 'mentorship'
    ? 'Success Stories from Our Mentees'
    : 'What Our Clients Say';

  const defaultSubtitle = type === 'business'
    ? 'See how we\'ve helped businesses transform with AI'
    : type === 'mentorship'
    ? 'Hear from professionals who accelerated their AI careers with our mentorship'
    : 'Real results from businesses and individuals who chose QuantumindAI';

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title || defaultTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle || defaultSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-card shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < review.rating ? 'text-accent' : 'text-muted-foreground/30'
                      }`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Review Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.content}"
                </blockquote>

                {/* Reviewer Info */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                    {review.company && (
                      <div className="text-sm text-primary font-medium">{review.company}</div>
                    )}
                  </div>
                  
                  {review.outcome && (
                    <Badge variant="secondary" className="ml-2 text-xs bg-accent/10 text-accent border-accent/20">
                      {review.outcome}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            {type === 'business' 
              ? 'Ready to see similar results for your business?' 
              : type === 'mentorship'
              ? 'Ready to accelerate your AI career?'
              : 'Join our growing community of success stories'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;