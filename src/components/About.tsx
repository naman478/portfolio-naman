import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Code, Trophy, Users } from 'lucide-react';

export const About = () => {
  const stats = [
    {
      icon: GraduationCap,
      label: "CGPA",
      value: "8.0",
      description: "Computer Science & Engineering"
    },
    {
      icon: Code,
      label: "Problems Solved",
      value: "500+",
      description: "LeetCode & GeeksforGeeks"
    },
    {
      icon: Trophy,
      label: "Achievements",
      value: "5+",
      description: "Hackathons & Competitions"
    },
    {
      icon: Users,
      label: "Users Impact",
      value: "5M+",
      description: "Through applications built"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-glow">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science student at Jaypee Institute of Information Technology, Noida, 
            with hands-on experience in full-stack development. I specialize in building scalable web applications 
            and have contributed to platforms serving millions of users during my internships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover-glow p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="font-semibold mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass-card p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-primary" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-lg">B.Tech - Computer Science and Engineering</h4>
                    <p className="text-primary">Jaypee Institute of Information Technology, Noida</p>
                    <p className="text-muted-foreground">2021-2025 • CGPA: 8.0</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p>• Data Structures & Algorithms</p>
                    <p>• Database Management Systems</p>
                    <p>• Operating Systems</p>
                  </div>
                  <div className="space-y-2">
                    <p>• Object-Oriented Programming</p>
                    <p>• Software Engineering</p>
                    <p>• System Design</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};