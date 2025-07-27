import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { CalendarDays, MapPin, Building2 } from 'lucide-react';
import starHealthLogo from '@/assets/star-health-logo.jpg';
import vegavidLogo from '@/assets/vegavid-logo.jpg';

export const Experience = () => {
  const experiences = [
    {
      company: "Star Health and Allied Insurance Co. Limited",
      role: "SDE Intern",
      duration: "Jan 2025 - Present",
      location: "Gurgaon, India",
      logo: starHealthLogo,
      achievements: [
        "Developed backend for StarHealth Customer app serving 5M+ customers and 30k+ daily active users",
        "Built Star Wellness Program backend enabling 1,000+ user signups in first month through secure APIs",
        "Enhanced policy renewal feature driving $2.4M+ monthly revenue with MongoDB and PostgreSQL optimizations",
        "Collaborated with UI, Product, and Platform teams in Agile environment for end-to-end feature delivery"
      ],
      current: true
    },
    {
      company: "Vegavid Technologies",
      role: "SDE Intern",
      duration: "June 2024 - July 2024",
      location: "Noida, India",
      logo: vegavidLogo,
      achievements: [
        "Built subscription-based platform with tiered access (starter, pro, premium plans)",
        "Developed robust admin panel for subscription management with full CRUD operations",
        "Implemented secure authentication system using JWT tokens for seamless user experience",
        "Designed scalable architecture supporting multiple subscription tiers and user roles"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-glow">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience in building scalable applications and working with cross-functional teams
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover-glow p-8 relative overflow-hidden">
                {exp.current && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-medium pulse-glow">
                      Current
                    </span>
                  </div>
                )}
                
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Company logo */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="w-24 h-24 rounded-xl overflow-hidden border border-primary/20 bg-background/50">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Experience details */}
                  <div className="lg:col-span-3">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-1">{exp.role}</h3>
                        <h4 className="text-xl font-semibold mb-2 flex items-center">
                          <Building2 className="w-5 h-5 mr-2" />
                          {exp.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col lg:items-end space-y-1">
                        <div className="flex items-center text-muted-foreground">
                          <CalendarDays className="w-4 h-4 mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};