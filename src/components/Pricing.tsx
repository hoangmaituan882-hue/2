import { cn } from "../lib/utils";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for exploring and small hobby projects.",
    features: ["1,000 queries / month", "Standard models", "Community support", "1 Custom Agent"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pulse",
    price: "$29",
    period: "/mo",
    description: "For professionals building production applications.",
    features: ["50,000 queries / month", "Advanced models (GPT-4, Claude 3)", "Priority email support", "Unlimited Agents", "Custom integrations"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Dedicated infrastructure and advanced security.",
    features: ["Unlimited queries", "Custom model fine-tuning", "24/7 Phone support", "SOC2 & HIPAA Compliance", "Dedicated Technical Account Manager"],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 md:py-48 px-4 w-full max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
          Simple, Transparent <span className="text-muted-foreground font-normal">Pricing</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Scale effortlessly from prototype to enterprise without hidden fees.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            key={plan.name}
            className={cn(
              "relative flex flex-col rounded-[2.5rem] border-2 bg-card p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
              plan.popular ? "border-primary/30 shadow-[0_8px_30px_rgb(134,158,113,0.15)] z-10" : "border-border shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
            )}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground shadow-sm uppercase tracking-widest">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-[15px] text-muted-foreground mt-2 min-h-[40px]">{plan.description}</p>
            </div>
            
            <div className="mb-8 flex items-baseline text-foreground">
              <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
              {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
            </div>
            
            <ul className="mb-10 flex-1 space-y-5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex flex-row items-start gap-4 text-[15px] text-muted-foreground">
                  <Check className="size-5 shrink-0 text-primary mt-0.5" strokeWidth={1.5} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button
              className={cn(
                "mt-auto h-14 w-full rounded-2xl text-[15px] font-bold transition-all focus-visible:ring-4 focus-visible:ring-primary/20 hover:-translate-y-0.5 active:scale-95 group",
                plan.popular 
                  ? "bg-primary text-primary-foreground hover:bg-primary/95 shadow-[0_4px_14px_0_rgb(134,158,113,0.39)] hover:shadow-[0_6px_20px_rgba(134,158,113,0.23)]" 
                  : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
              )}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
