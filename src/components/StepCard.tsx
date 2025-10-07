interface StepCardProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const StepCard = ({ number, title, description, isLast }: StepCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-center animate-fade-in">
      {/* Step Circle */}
      <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-110 hover:shadow-[var(--glow-gold)]">
        <span className="font-poppins text-2xl font-bold text-foreground">
          {number}
        </span>
      </div>
      
      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute left-1/2 top-10 hidden h-0.5 w-full bg-gradient-to-r from-primary to-primary/30 md:block" 
             style={{ transform: 'translateX(50%)' }} />
      )}
      
      {/* Content */}
      <h3 className="mb-3 font-playfair text-xl font-bold text-foreground">
        {title}
      </h3>
      <p className="max-w-xs font-nunito text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
