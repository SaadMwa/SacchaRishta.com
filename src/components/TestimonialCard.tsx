import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  story: string;
  image: string;
}

const TestimonialCard = ({ name, story, image }: TestimonialCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-elegant)] animate-fade-in">
      <Quote className="mb-4 h-10 w-10 text-primary/30" />
      
      <p className="mb-6 font-nunito text-foreground/90 leading-relaxed italic">
        "{story}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20">
          <img 
            src={image} 
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-poppins font-semibold text-foreground">
            {name}
          </p>
          <p className="font-nunito text-sm text-muted-foreground">
            Happy Couple
          </p>
        </div>
      </div>
      
      <div className="absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all duration-300 group-hover:bg-primary/10" />
    </div>
  );
};

export default TestimonialCard;
