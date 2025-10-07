import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-2 animate-fade-in">
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="mb-3 font-playfair text-xl font-bold text-foreground">
        {title}
      </h3>
      <p className="font-nunito text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-300 group-hover:bg-primary/10" />
    </div>
  );
};

export default FeatureCard;
