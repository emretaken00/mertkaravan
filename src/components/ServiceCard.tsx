import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description, className, ...props }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "group bg-card border border-border p-6 md:p-8 transition-smooth hover:border-foreground/20 hover:shadow-premium animate-fade-in-up",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-start gap-4">
        <div className="p-3 bg-muted rounded-lg group-hover:bg-foreground group-hover:text-background transition-smooth">
          <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
