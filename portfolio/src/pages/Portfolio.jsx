import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    CheckCircle2,
    Briefcase,
    Code2,
    Mail,
    Github,
    Linkedin,
    Database,
    Wrench,
    Terminal,
    Layout,
    Globe,
    BookOpen
} from 'lucide-react';
import {
    LanguageSection,
    EducationSection,
    AchievementsSection,
    TestimonialsSection
} from './PortfolioSections';

const Portfolio = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code2 size={20} />,
            skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS', 'C++']
        },
        {
            title: "Frameworks & Libraries",
            icon: <Layout size={20} />,
            skills: ['React.js', 'Redux', 'Node.js', 'Express.js', 'Bootstrap', 'Mongoose', 'jQuery']
        },
        {
            title: "Database Technologies",
            icon: <Database size={20} />,
            skills: ['MongoDB', 'MySQL', 'PostgreSQL']
        },
        {
            title: "Tools & Platforms",
            icon: <Wrench size={20} />,
            skills: ['Git', 'Docker', 'Postman', 'JWT Authentication', 'Kubernetes']
        }
    ];

    const experiences = [
        {
            title: "Web Developer",
            company: "Maximize Market Research Pvt. Ltd.",
            period: "Jun 2024 - Present",
            description: [
                "Independently developed TeamSync - an Employee Management System using MERN stack",
                "Built REST APIs in Node.js and Express.js for complex data relationships",
                "Created reusable React components for improved UI consistency",
                "Implemented modules for attendance, leave management, and payroll"
            ]
        },
        {
            title: "Research Engineer Trainee",
            company: "Zeetron Networks Pvt. Ltd.",
            period: "Jan 2024 - May 2024",
            description: [
                "Developed interactive data visualization tools using React.js",
                "Integrated and debugged RESTful APIs for real-time updates",
                "Collaborated with backend teams for seamless communication"
            ]
        },
        {
            title: "Freelance Full Stack Developer",
            company: "Self-Employed",
            period: "Jul 2022 - Dec 2023",
            description: [
                "Built full-stack e-commerce platform with MERN stack",
                "Developed custom portfolio websites with responsive design",
                "Implemented secure user authentication systems"
            ]
        }
    ];

    const projects = [
        {
            title: "TeamSync",
            description: "Comprehensive employee management system with attendance tracking, leave management, and payroll processing",
            tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
            link: "#"
        },
        {
            title: "Inventory Management System",
            description: "Web application for inventory tracking with role-based access control and real-time updates",
            tags: ["Node.js", "Express", "MongoDB", "Authentication"],
            link: "#"
        },
        {
            title: "Blog Platform",
            description: "Feature-rich blogging platform with user authentication and rich text editing capabilities",
            tags: ["React", "Firebase", "Rich Text", "Authentication"],
            link: "#"
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather application with location-based forecasts and interactive maps",
            tags: ["React", "APIs", "JavaScript", "Responsive Design"],
            link: "#"
        }
    ];

    const certifications = [
        {
            title: "Full-Stack Web Development",
            issuer: "Udemy",
            icon: <Globe size={20} />
        },
        {
            title: "React.js Development",
            issuer: "Coursera",
            icon: <Layout size={20} />
        },
        {
            title: "Certified Kubernetes Application Developer (CKAD)",
            issuer: "The Linux Foundation",
            icon: <Terminal size={20} />
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            {/* Hero Section */}
            <motion.section
                style={{ opacity }}
                className="h-screen flex items-center justify-center relative"
            >
                <div className="text-center space-y-6">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-6xl font-bold"
                    >
                        Yashraj Ghosalkar
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-slate-300"
                    >
                        Full Stack Developer
                    </motion.p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center space-x-4"
                    >
                        <Button variant="outline" className="flex items-center gap-2">
                            <Mail size={16} /> Contact Me
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Github size={16} /> GitHub
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Linkedin size={16} /> LinkedIn
                        </Button>
                    </motion.div>
                </div>
            </motion.section>

            {/* About Section */}
            <section className="min-h-screen py-20 px-4 md:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <h2 className="text-4xl font-bold mb-8">About Me</h2>

                    <div className="aspect-video bg-slate-700 rounded-lg mb-8 overflow-hidden">
                        <video className="w-full h-full" controls>
                            <source src="/caption.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <p className="text-lg text-slate-300 leading-relaxed">
                        Full Stack Web Developer with a passion for building scalable and efficient applications.
                        Currently developing comprehensive employee management systems and focusing on MERN stack development.
                    </p>
                </motion.div>
            </section>


            {/* Skills Section */}
            <section className="min-h-screen bg-slate-800/50 py-20 px-4 md:px-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-slate-700/50 border-none h-full hover:bg-slate-600/50 transition-colors">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                            {category.icon} {category.title}
                                        </h3>
                                        <div className="space-y-2">
                                            {category.skills.map((skill) => (
                                                <div key={skill} className="flex items-center gap-2">
                                                    <CheckCircle2 size={16} className="text-green-400" />
                                                    <span>{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Experience Section */}
            <section className="min-h-screen py-20 px-4 md:px-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-12">Professional Journey</h2>
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 border-l-2 border-slate-600"
                            >
                                <div className="absolute -left-3 top-0">
                                    <Briefcase className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                                <p className="text-xl text-blue-400">{exp.company}</p>
                                <p className="text-sm text-slate-400 mb-4">{exp.period}</p>
                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 size={16} className="mt-1 text-green-400 flex-shrink-0" />
                                            <span className="text-slate-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Projects Section */}
            <section className="min-h-screen bg-slate-800/50 py-20 px-4 md:px-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="group"
                            >
                                <Card className="bg-slate-700/50 border-none h-full hover:bg-slate-600/50 transition-all">
                                    <CardContent className="p-6">
                                        <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                                        <p className="text-slate-300 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <Button variant="outline" size="sm" className="group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                            View Project
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Certifications Section */}
            <section className="min-h-screen py-20 px-4 md:px-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-12">Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <Card className="bg-slate-700/50 border-none hover:bg-slate-600/50 transition-colors">
                                    <CardContent className="p-6 text-center">
                                        <div className="mb-4 flex justify-center">
                                            {cert.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                                        <p className="text-sm text-slate-400">{cert.issuer}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Languages Section */}
            <section className="min-h-screen bg-slate-800/50 py-20 px-4 md:px-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-12">Languages</h2>
                    <LanguageSection />
                </motion.div>
            </section>

            {/* Education Section */}
            <section className="min-h-screen py-20 px-4 md:px-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-12">Education</h2>
                    <EducationSection />
                </motion.div>
            </section>

            {/* Achievements Section */}
            <section className="min-h-screen bg-slate-800/50 py-20 px-4 md:px-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-12">Achievements</h2>
                    <AchievementsSection />
                </motion.div>
            </section>

            {/* Testimonials Section */}
            <section className="min-h-screen py-20 px-4 md:px-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-12">What Others Say</h2>
                    <TestimonialsSection />
                </motion.div>
            </section>
            {/* Contact Section */}
            <section className="min-h-screen py-20 px-4 md:px-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
                    <p className="text-xl text-slate-300 mb-8">
                        Let's work together on your next project
                    </p>
                    <Button size="lg" className="flex items-center gap-2">
                        <Mail size={20} /> yashrajjghosalkar@gmail.com
                    </Button>
                </motion.div>
            </section>
        </div>
    );
};

export default Portfolio;