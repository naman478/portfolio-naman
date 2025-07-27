import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "namanjhanwar953@gmail.com",
      link: "mailto:namanjhanwar953@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7410850685",
      link: "tel:+917410850685"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, Uttar Pradesh",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/naman478",
      username: "@naman478"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/naman-jhanwar",
      username: "/in/naman-jhanwar"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-glow">
            Let's <span className="text-primary">Connect!</span> 🤝
          </h2>
          <p className="text-lg text-muted-foreground">
            Feel free to reach out — whether it’s opportunities, networking, or just a friendly hello!
          </p>
        </motion.div>

        <Card className="glass-card p-8 space-y-10">
          {/* Contact Details */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-4 rounded-lg glass-card hover-glow transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{info.label}</p>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 rounded-lg glass-card hover-glow group transition-all"
                >
                  <social.icon className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium text-sm">{social.label}</p>
                    <p className="text-xs text-muted-foreground">{social.username}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
