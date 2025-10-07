import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import StepCard from "@/components/StepCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Shield, Heart, Sparkles, UserCheck, Search, MessageCircle, CheckCircle, Facebook, Instagram, Twitter, Mail } from "lucide-react";
import heroImage from "@/assets/hero-couple.jpg";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-[hsl(var(--deep-maroon))] to-[hsl(0_100%_20%)]"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(75, 0, 0, 0.95), rgba(75, 0, 0, 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="container mx-auto grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div>
              <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-black mb-4" 
                  style={{ color: 'hsl(var(--royal-gold))' }}>
                SacchaRishta
              </h1>
              <p className="font-nunito text-lg md:text-xl mb-2" 
                 style={{ color: 'hsl(var(--warm-beige))' }}>
                हर रिश्ता, विश्वास के साथ
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-playfair text-3xl md:text-5xl font-bold" 
                  style={{ color: 'hsl(var(--ivory))' }}>
                Find Your True Partner, with Trust
              </h2>
              <p className="font-nunito text-base md:text-lg max-w-xl mx-auto lg:mx-0" 
                 style={{ color: 'hsl(var(--warm-beige))' }}>
                India's most genuine matrimonial platform connecting hearts built on honesty and respect.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg">
                Get Started
              </Button>
              <Button variant="hero-outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in hidden lg:block">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
            <img 
              src={heroImage}
              alt="Happy couple in traditional wedding attire"
              className="relative z-10 rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-4">
              Why SacchaRishta.com?
            </h2>
            <p className="font-nunito text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe every relationship deserves a foundation of trust. Our platform ensures authenticity at every step.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              icon={Shield}
              title="Verified Profiles"
              description="Every profile goes through a rigorous verification process to ensure authenticity and safety for all members."
            />
            <FeatureCard 
              icon={Heart}
              title="Authentic Matches"
              description="Connect with genuine individuals who share your values, culture, and aspirations for a meaningful relationship."
            />
            <FeatureCard 
              icon={Sparkles}
              title="AI-Powered Suggestions"
              description="Our intelligent matching algorithm finds compatible partners based on your preferences and compatibility factors."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        className="py-20 px-4"
        style={{ background: 'linear-gradient(180deg, hsl(var(--ivory)), hsl(var(--warm-beige) / 0.3))' }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="font-nunito text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to find your perfect match
            </p>
          </div>
          
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 relative">
            <StepCard 
              number="1"
              title="Create Profile"
              description="Sign up and create your detailed profile with photos and preferences"
            />
            <StepCard 
              number="2"
              title="Get Verified"
              description="Complete our quick verification process to build trust and credibility"
            />
            <StepCard 
              number="3"
              title="Find Matches"
              description="Browse verified profiles and receive AI-powered match suggestions"
            />
            <StepCard 
              number="4"
              title="Connect"
              description="Start meaningful conversations with compatible matches securely"
              isLast
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section 
        className="py-20 px-4 relative"
        style={{ 
          backgroundImage: 'linear-gradient(135deg, rgba(75, 0, 0, 0.95), rgba(75, 0, 0, 0.9))',
          backgroundColor: 'hsl(var(--deep-maroon))'
        }}
      >
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--royal-gold) / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--royal-gold) / 0.3) 0%, transparent 50%)',
             }} 
        />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 shadow-[var(--glow-gold)]">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6" 
                style={{ color: 'hsl(var(--ivory))' }}>
              Trust is Our Foundation
            </h2>
            
            <p className="font-nunito text-lg mb-8" 
               style={{ color: 'hsl(var(--warm-beige))' }}>
              At SacchaRishta.com, we prioritize your safety and privacy. Our comprehensive verification process includes document verification, phone verification, and profile authenticity checks. Your data is encrypted and protected with industry-leading security standards.
            </p>
            
            <div className="grid gap-6 md:grid-cols-3 text-left">
              <div className="flex gap-4 items-start">
                <UserCheck className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-poppins font-semibold mb-2" style={{ color: 'hsl(var(--ivory))' }}>
                    Profile Verification
                  </h3>
                  <p className="font-nunito text-sm" style={{ color: 'hsl(var(--warm-beige))' }}>
                    Multi-step verification ensures authentic profiles only
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <MessageCircle className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-poppins font-semibold mb-2" style={{ color: 'hsl(var(--ivory))' }}>
                    Secure Chat
                  </h3>
                  <p className="font-nunito text-sm" style={{ color: 'hsl(var(--warm-beige))' }}>
                    End-to-end encrypted messaging for safe conversations
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-poppins font-semibold mb-2" style={{ color: 'hsl(var(--ivory))' }}>
                    Privacy Control
                  </h3>
                  <p className="font-nunito text-sm" style={{ color: 'hsl(var(--warm-beige))' }}>
                    You control who sees your profile and information
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-4">
              सच्चे रिश्तों की सच्ची कहानियाँ
            </h2>
            <p className="font-nunito text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real couples who found their perfect match
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <TestimonialCard 
              name="Priya & Rahul"
              story="We found each other through SacchaRishta and instantly connected over our shared values. The verification process made us feel safe from day one. Today, we're happily married!"
              image="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=400&fit=crop"
            />
            <TestimonialCard 
              name="Anjali & Vikram"
              story="The platform's genuine approach to matchmaking is what drew us here. We appreciated the emphasis on trust and authenticity. We're grateful for this beautiful journey!"
              image="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&h=400&fit=crop"
            />
            <TestimonialCard 
              name="Neha & Arjun"
              story="Finding someone who truly understands you is rare. SacchaRishta made it possible for us to connect on a deeper level. The AI matching was surprisingly accurate!"
              image="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=400&h=400&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        className="py-20 px-4 relative overflow-hidden"
        style={{ 
          backgroundImage: 'linear-gradient(135deg, rgba(75, 0, 0, 0.95), rgba(75, 0, 0, 0.9))',
          backgroundColor: 'hsl(var(--deep-maroon))'
        }}
      >
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--royal-gold) / 0.1) 0px, transparent 1px, transparent 10px, hsl(var(--royal-gold) / 0.1) 11px)',
             }} 
        />
        
        <div className="container mx-auto relative z-10 text-center animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6" 
              style={{ color: 'hsl(var(--ivory))' }}>
            Start Your Journey Today
          </h2>
          <p className="font-nunito text-lg md:text-xl mb-10 max-w-2xl mx-auto" 
             style={{ color: 'hsl(var(--warm-beige))' }}>
            Thousands of verified singles are waiting to connect. Your perfect match could be just a click away.
          </p>
          <Button variant="hero" size="lg" className="animate-glow">
            Join Now — It's Free!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-12 px-4"
        style={{ backgroundColor: 'hsl(var(--deep-maroon))' }}
      >
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-3 mb-8">
            <div>
              <h3 className="font-cinzel text-2xl font-bold mb-4" 
                  style={{ color: 'hsl(var(--royal-gold))' }}>
                SacchaRishta
              </h3>
              <p className="font-nunito text-sm" 
                 style={{ color: 'hsl(var(--warm-beige))' }}>
                हर रिश्ता, विश्वास के साथ
              </p>
            </div>
            
            <div>
              <h4 className="font-poppins font-semibold mb-4" 
                  style={{ color: 'hsl(var(--ivory))' }}>
                Quick Links
              </h4>
              <ul className="space-y-2 font-nunito" 
                  style={{ color: 'hsl(var(--warm-beige))' }}>
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-poppins font-semibold mb-4" 
                  style={{ color: 'hsl(var(--ivory))' }}>
                Connect With Us
              </h4>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-primary transition-all hover:bg-primary/20 hover:scale-110">
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-primary transition-all hover:bg-primary/20 hover:scale-110">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-primary transition-all hover:bg-primary/20 hover:scale-110">
                  <Twitter className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-primary transition-all hover:bg-primary/20 hover:scale-110">
                  <Mail className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center font-nunito text-sm" 
               style={{ 
                 borderColor: 'hsl(var(--royal-gold) / 0.2)',
                 color: 'hsl(var(--warm-beige))' 
               }}>
            <p>© 2025 SacchaRishta.com. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
