import { Zap, Shield, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed and performance, ensuring your website loads instantly."
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security features to protect your data and users."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design that looks great on any device, any screen size."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide the tools and features you need to create amazing websites.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};