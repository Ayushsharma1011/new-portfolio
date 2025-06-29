import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import SpinningCube from '@/components/ui/SpinningCube';
import AuroraBG from "@/components/ui/AuroraBG";
import TextPressure from "@/components/TextPressure";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Palette,
  Database,
  Globe,
  Menu,
  X,
  ChevronDown,
  Star,
  Award,
  Users,
  Coffee
} from 'lucide-react';


const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particle-bg">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
  whileHover={{ scale: 1.05 }}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="text-2xl font-bold gradient-text cursor-pointer"
>
  Ayush Sharma
</motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const HeroSection = () => {
  const { toast } = useToast();

  const handleDownloadCV = () => {
    toast({
      title: "📄 Opening CV...",
      description: "Your CV is being opened in a new tab."
    });
    window.open("/RESUME.pdf", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="mb-6 flex flex-col items-center gap-1"
>
  <TextPressure
    text="Ayush Sharma"
    flex={true}
    alpha={false}
    stroke={true}
    width={false}           // less stretching
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#00BFFF"
    minFontSize={10}        // reduced from 18
  />
  <TextPressure
    text="Full Stack Developer & UI/UX Designer"
    flex={true}
    alpha={false}
    stroke={true}
    width={false}           // less stretching
    weight={true}
    italic={true}
    textColor="#balck"
    strokeColor="#00BFFF"
    minFontSize={10}        // reduced from 18
  />
</motion.div>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <SpinningCube />
          </motion.div>

         <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
>
  <Button
    onClick={handleDownloadCV}
    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full glow-effect shadow-lg hover:scale-105 transition"
  >
    <Download className="mr-2" size={18} />
    Download CV
  </Button>

  <Button
    onClick={() =>
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    }
    variant="outline"
    className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-2 md:px-8 md:py-3 rounded-full shadow-md hover:scale-105 transition"
  >
    <Mail className="mr-2" size={18} />
    Get In Touch
  </Button>
</motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-white animate-bounce" size={32} />
        </motion.div>
      </div>
    </section>
  );
};


const AboutSection = () => {
  const stats = [
    { icon: <Award className="text-blue-400" size={24} />, number: "50+", label: "Projects Completed" },
    { icon: <Users className="text-purple-400" size={24} />, number: "3+", label: "Happy Clients" },
    { icon: <Coffee className="text-yellow-400" size={24} />, number: "1000+", label: "Cups of Caffeine" },
    { icon: <Star className="text-green-400" size={24} />, number: "1", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a keen eye for design and a love for creating 
            exceptional digital experiences that make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
<img  
  className="w-25 h-25 glow-effect floating-animation"
  alt="Ayush Sharma professional portrait"
  src="ayush.jpg"
/>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Crafting Digital Excellence
            </h3>
             <p>Hi, I'm <strong>Ayush Sharma</strong> — a creative and detail-oriented web developer passionate about building clean, modern, and user-friendly websites.</p>

<p>I specialize in the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js), combining frontend finesse with powerful backend logic to deliver full-stack solutions.</p>

<p>Every line of code I write aims to solve real-world problems, optimize performance, and create seamless user experiences that make a lasting impact.</p>

<p>From dynamic web apps to fully responsive landing pages, I enjoy transforming ideas into functional, elegant digital products that people love to use.</p>

<p>Beyond development, I'm always exploring new tools, learning modern frameworks, and staying updated with design trends to continuously improve my craft.</p>

<p>If you're looking for a developer who brings both <strong>technical expertise</strong> and <strong>creative vision</strong> to the table — let's connect and build something remarkable together!</p>

            
            <div className="flex flex-wrap gap-4 mt-6">
              {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Next.js'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm border border-blue-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center glass-effect rounded-2xl p-6"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-400" size={32} />,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 88 },
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="text-green-400" size={32} />,
      skills: [
        { name: "Node.js/Express", level: 85 },
        { name: "MongoDB", level: 80 },
       
        { name: "REST APIs", level: 90 },
      ]
    },
    {
      title: "Design & Tools",
      icon: <Palette className="text-purple-400" size={32} />,
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Git/GitHub", level: 55 },
      
      ]
    },
   
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass-effect rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-white ml-4">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="skill-progress"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Bhagwati Ayurvedic Clinic",
      description:
        "A modern, informative website for Bhagwati Ayurvedic Clinic, built to showcase services, doctors, and appointment booking. Fully responsive with SEO optimization.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://www.bhagwaticlinic1955.com",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with modern design, smooth animations, and optimized performance.",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://www.synergyayush.com/",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate
            my skills and passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="project-card glass-effect rounded-2xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  alt={`${project.title} project screenshot`}
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                      <ExternalLink size={16} />
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black"
                    >
                      <Github size={16} />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const scriptURL = "https://script.google.com/macros/s/AKfycbySZiPPYC1ulXnzwnUOEU-keLcRf1r6uNwpPRCoE25jEsuWVK2DblJegXmuzX93F9H-pw/exec"; // 🔁 Replace with your own

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = new FormData();
    formBody.append("Name", formData.name);
    formBody.append("Email", formData.email);
    formBody.append("Subject", formData.subject);
    formBody.append("Message", formData.message);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formBody
      });

      if (response.ok) {
        toast({
          title: "✅ Message Sent",
          description: "Thank you! Your message has been received.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: "❌ Failed to Send",
          description: "Please try again or contact me directly via email.",
        });
      }
    } catch (error) {
      toast({
        title: "⚠️ Network Error",
        description: "Something went wrong. Please check your connection.",
      });
    }
  };

  const handleSocialClick = (platform) => {
    toast({
      title: `🚧 ${platform} Link`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      label: "Email",
      value: "ayush988277@gmail.com",
      action: () => window.open("mailto:ayush988277@gmail.com", "_blank")
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      label: "Phone",
      value: "9882770709",
      action: () => window.open("tel:9882770709", "_blank")
    },
    {
      icon: <MapPin className="text-red-400" size={24} />,
      label: "Name",
      value: "Ayush Sharma",
      action: () => {}
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      platform: "GitHub",
      action: () => window.open("https://github.com/Ayushsharma1011", "_blank")
    },
    {
      icon: <Linkedin size={24} />,
      platform: "LinkedIn",
      action: () => window.open("https://www.linkedin.com/in/ayush-sharma-050a52289/", "_blank")
    },
    {
      icon: <Mail size={24} />,
      platform: "Email",
      action: () => window.open("mailto:ayush988277@gmail.com", "_blank")
    }
  ];


  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? Let's work together to create something amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  onClick={info.action}
                  className="flex items-center space-x-4 glass-effect rounded-xl p-4 cursor-pointer transition-all hover:glow-effect"
                >
                  {info.icon}
                  <div>
                    <div className="text-gray-400 text-sm">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={social.action}
                    className="social-icon p-3 glass-effect rounded-full text-gray-400 hover:text-white"
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="contact-form rounded-2xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg glow-effect"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <span className="font-semibold gradient-text">© 2024 Ayush Sharma.</span> All rights reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Built with React, Tailwind CSS & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <AuroraBG /> {/* Background Aurora animation */}
      
  
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        <Toaster />
      </div>
    </div>
  );
}
export default App;