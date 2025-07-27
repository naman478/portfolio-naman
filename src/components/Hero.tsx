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
                Your Name
              </span>{' '}
              👋
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-Stack Developer & Software Engineering Student
              <br />
              <span className="text-primary">Building innovative solutions for the web 🚀</span>
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Currently pursuing B.Tech in Computer Science at JIIT Noida with 8.0 CGPA. 
              Experienced in building scalable applications serving millions of users.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button variant="hero" size="lg" className="group">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              
              <Button variant="glass" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 justify-center lg:justify-start mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button variant="ghost" size="icon" className="hover-glow">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow">
                <Mail className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow">
                <Phone className="w-5 h-5" />
              </Button>
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
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-full border border-primary/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-sm font-semibold text-primary">Open to Work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};