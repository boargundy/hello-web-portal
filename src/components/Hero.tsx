import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 to-primary/10">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Build Beautiful Websites with Ease
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create stunning, responsive websites quickly and efficiently with our modern web development platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};