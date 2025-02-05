import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Languages, 
  GraduationCap, 
  Award,
  BookOpen,
  Users
} from 'lucide-react';

const LanguageSection = () => {
  const languages = [
    {
      name: "English",
      nativeName: "English",
      level: "Professional Working",
      text: "Hello, I'm Yashraj"
    },
    {
      name: "Hindi",
      nativeName: "हिंदी",
      level: "Full Professional",
      text: "नमस्ते, मैं यशराज हूं"
    },
    {
      name: "Marathi",
      nativeName: "मराठी",
      level: "Native",
      text: "नमस्कार, मी यशराज आहे"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {languages.map((lang, index) => (
        <motion.div
          key={lang.name}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Card className="bg-gradient-to-br from-slate-700/50 to-slate-600/30 border-none overflow-hidden">
            <CardContent className="p-6">
              <Languages className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-2">{lang.nativeName}</h3>
              <p className="text-slate-300 mb-4">{lang.text}</p>
              <div className="text-sm text-blue-300">{lang.level}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Manipal University Jaipur",
      period: "2021 - 2024",
      description: "Focused on advanced computing concepts and modern software development"
    },
    {
      degree: "Diploma",
      field: "Information Technology",
      institution: "Government Polytechnic Kolhapur",
      period: "2018 - 2021",
      description: "Built strong foundation in IT fundamentals and practical programming"
    }
  ];

  return (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <motion.div
          key={edu.degree}
          initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-slate-700/50 to-slate-600/30 border-none">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-blue-400 text-lg mb-2">{edu.field}</p>
                  <p className="text-slate-300">{edu.institution}</p>
                  <p className="text-sm text-slate-400 mb-4">{edu.period}</p>
                  <p className="text-slate-300">{edu.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Head of Events",
      organization: "Qureka - The Quizzing Club",
      period: "2021 - 2022",
      highlights: [
        "Led team of 10+ members",
        "Organized 5+ major quizzing events",
        "Increased club participation by 40%"
      ]
    },
    {
      title: "Web Development",
      organization: "CodeClause Internship",
      period: "Jan 2023 - Feb 2023",
      highlights: [
        "Developed responsive web applications",
        "Implemented modern UI/UX practices",
        "Collaborated with senior developers"
      ]
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-8">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.title}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-slate-700/50 to-slate-600/30 border-none hover:shadow-lg hover:shadow-blue-500/10 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-blue-400 mb-2">{achievement.organization}</p>
                  <p className="text-sm text-slate-400 mb-4">{achievement.period}</p>
                  <ul className="space-y-2">
                    {achievement.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Project Manager",
      company: "Maximize Market Research",
      text: "Yashraj's technical expertise and problem-solving abilities have been instrumental in improving our web performance and user experience."
    },
    {
      name: "Team Lead",
      company: "Zeetron Networks",
      text: "Outstanding ability to learn quickly and implement complex solutions. His work on data visualization tools was exceptional."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -5 }}
        >
          <Card className="bg-gradient-to-br from-slate-700/50 to-slate-600/30 border-none">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-blue-400">{testimonial.company}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

// Export these sections to be used in the main Portfolio component
export { LanguageSection, EducationSection, AchievementsSection, TestimonialsSection };