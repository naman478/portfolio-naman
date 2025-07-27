import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Scene3D } from '@/components/3d/Scene3D';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import profileHero from '@/assets/profile-hero.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <Scene3D />
      
      <div className="container mx-auto px-6 lg:px-12 z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 text-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Naman
              </span>{' '}
              👋
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-Stack Developer | Software Engineer
              <br />
              <span className="text-primary">Building innovative solutions for the web 🚀</span>
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Completed B.Tech in Computer Science from JIIT Noida with 8.0 CGPA.
              Experienced in building scalable applications.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="mailto:namanjhanwar953@gmail.com">
      <Button variant="hero" size="lg" className="group">
        <Mail className="w-4 h-4 mr-2" />
        Contact Me
      </Button>
    </a>
              
              <a href="https://drive.google.com/file/d/1RYPnLB7VKXhBLSIk3KywvrXUfgotynuk/view" target="_blank" rel="noopener noreferrer">
  <Button variant="glass" size="lg">
    <Download className="w-4 h-4 mr-2" />
    Resume
  </Button>
</a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 justify-center lg:justify-start mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="https://github.com/naman478/" target="_blank" rel="noopener noreferrer">
      <Button variant="ghost" size="icon" className="hover-glow">
        <Github className="w-5 h-5" />
      </Button>
    </a>

    <a href="https://www.linkedin.com/in/naman-jhanwar/" target="_blank" rel="noopener noreferrer">
      <Button variant="ghost" size="icon" className="hover-glow">
        <Linkedin className="w-5 h-5" />
      </Button>
    </a>

    <a href="mailto:namanjhanwar953@gmail.com">
      <Button variant="ghost" size="icon" className="hover-glow">
        <Mail className="w-5 h-5" />
      </Button>
    </a>

    <a href="tel:+917410850685">
      <Button variant="ghost" size="icon" className="hover-glow">
        <Phone className="w-5 h-5" />
      </Button>
      </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 glass-card hover-glow float"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={profileHero}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
    
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};