import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Code, 
  Database, 
  Wrench, 
  Layers,
  FileCode,
  GitBranch,
  Monitor,
  MessageSquare,
  Zap,
  Globe,
  Server,
  Smartphone
} from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: FileCode,
      skills: [
        { name: "C++", icon: Code, level: 90 },
        { name: "Java", icon: Code, level: 85 },
        { name: "JavaScript", icon: Code, level: 95 },
        { name: "HTML", icon: Globe, level: 95 },
        { name: "CSS", icon: Monitor, level: 90 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: Database, level: 90 },
        { name: "PostgreSQL", icon: Database, level: 85 },
        { name: "MySQL", icon: Database, level: 80 }
      ]
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: [
        { name: "VS Code", icon: Monitor, level: 95 },
        { name: "Git/GitHub", icon: GitBranch, level: 90 },
        { name: "Postman", icon: MessageSquare, level: 85 },
        { name: "OpenSearch", icon: Database, level: 75 }
      ]
    },
    {
      title: "Technologies & Frameworks",
      icon: Layers,
      skills: [
        { name: "Spring Boot", icon: Zap, level: 85 },
        { name: "ReactJS", icon: Globe, level: 95 },
        { name: "Node.js", icon: Server, level: 90 },
        { name: "Express.js", icon: Server, level: 90 }
      ]
    }
  ];

  const achievements = [
    {
      title: "Codify Challenge",
      description: "Secured 2nd Position in community-driven tech challenge",
      icon: "🥈"
    },
    {
      title: "Adobe GenSolve x GFG",
      description: "Reached top 5 percentile in prestigious coding competition",
      icon: "🏆"
    },
    {
      title: "TVS Credit E.P.I.C 6.0",
      description: "Advanced to Round-3 in national hackathon",
      icon: "🚀"
    },
    {
      title: "Peer Support Program",
      description: "Mentoring junior students in programming concepts",
      icon: "👥"
    },
    {
      title: "Problem Solving",
      description: "Solved 500+ DSA problems on LeetCode & GeeksforGeeks",
      icon: "💡"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-glow">
            My Tech <span className="text-primary">Toolkit</span> 🎨
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set built through academic learning, hands-on projects, and professional experience
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover-glow p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <skill.icon className="w-4 h-4 text-primary mr-3" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-background/50 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-primary-glow"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground min-w-[3rem]">{skill.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Achievements & <span className="text-primary">Recognition</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card hover-glow p-6 text-center">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h4 className="font-bold text-lg mb-2 text-primary">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};