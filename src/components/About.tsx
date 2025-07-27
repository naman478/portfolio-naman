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
    <section id="about" className="py-16">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
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
         Developer by trade, problem solver by nature ⚡<br/>
CSE grad from JIIT Noida building web experiences that don't make users question their life choices.
 When I'm not coding, I'm probably debugging my life's infinite loop.
          </p>
        </motion.div>

        

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