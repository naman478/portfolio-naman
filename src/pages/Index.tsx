import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Your Name. Built with ❤️ using React, Three.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
