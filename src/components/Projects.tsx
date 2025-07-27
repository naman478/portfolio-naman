import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Globe } from 'lucide-react';
import inelfProject from '@/assets/inelf-project.jpg';
import bikeRentalProject from '@/assets/bike-rental-project.jpg';
import expenseTrackerProject from '@/assets/expense-tracker-project.jpg';

export const Projects = () => {
  const projects = [
    {
      title: "inelf.com",
      description: "Free study platform designed to make learning as easy as possible using interactive slides, integrated code editor, and engaging quizzes. Built for desktop users to provide the best study experience.",
      image: inelfProject,
      tags: ["React", "Node.js", "MongoDB", "Express", "Code Editor"],
      features: [
        "Interactive study slides with rich content",
        "Built-in code editor for practice",
        "Engaging quizzes and assessments",
        "Desktop-optimized user experience"
      ],
      liveLink: "https://inelf.com",
      githubLink: "#",
      featured: true
    },
    {
      title: "AI Mock Interview Prep",
      description: "AI-powered platform for mock interview preparation, helping candidates practice and improve their interview skills with personalized feedback.",
      image: inelfProject, // Reusing image for now
      tags: ["React", "AI/ML", "TypeScript", "OpenAI", "WebRTC"],
      features: [
        "AI-powered interview simulation",
        "Real-time feedback and scoring",
        "Industry-specific question banks",
        "Performance analytics dashboard"
      ],
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      title: "Bike Rental System",
      description: "Full-stack rental platform where users can browse and book bikes based on real-time availability, while bike owners can list their vehicles for extra income.",
      image: bikeRentalProject,
      tags: ["React", "Node.js", "Express", "MongoDB", "CSS"],
      features: [
        "Real-time bike availability system",
        "Dual user roles: renters and owners",
        "Comprehensive booking management",
        "Unified dashboard for all operations"
      ],
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      title: "Expense Tracker",
      description: "Personal finance management application with advanced filtering, budget tracking, and visual spending insights to help users manage their finances effectively.",
      image: expenseTrackerProject,
      tags: ["React", "Node.js", "Express", "MongoDB", "Charts"],
      features: [
        "Category-wise expense tracking",
        "Advanced filtering and search",
        "Monthly budget management",
        "Visual spending analytics"
      ],
      liveLink: "#",
      githubLink: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-glow">
            Featured <span className="text-primary">Projects</span> 🚀
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through real-world applications
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`glass-card hover-glow overflow-hidden ${
                project.featured ? 'border-primary/40 shadow-lg shadow-primary/10' : ''
              }`}>
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project image */}
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features - show only first 2 */}
                    <div className="mb-4">
                      <ul className="space-y-1">
                        {project.features.slice(0, 2).map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <Button variant="default" size="sm" className="group">
                        <Globe className="w-3 h-3 mr-2" />
                        Live Demo
                      </Button>
                      
                      <Button variant="outline" size="sm">
                        <Github className="w-3 h-3 mr-2" />
                        Code
                      </Button>
                    </div>
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