import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {  Card, CardContent } from '@/components/ui/card';

const PersonalizedDashboard = () => {
  const [projectType, setProjectType] = useState('');
  const [techStack, setTechStack] = useState('');
  const [timeline, setTimeline] = useState('');
  const [actionPlan, setActionPlan] = useState('');

  const handleGeneratePlan = () => {
    // Logic for generating the action plan based on the input
    if (projectType && techStack) {
      const plan = `For a ${projectType} project using ${techStack}, my action plan includes: 
      1. Initial Requirement Gathering
      2. Architecture Design using ${techStack}
      3. Front-end development with React and Redux
      4. Back-end development with Node.js and Express
      5. Testing and Deployment using Docker and Kubernetes.`;
      
      setActionPlan(plan);
      setTimeline('Estimated Timeline: 2-3 weeks depending on scope.');
    }
  };

  return (
    <section className="py-20 px-4 md:px-20 bg-slate-800/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12">Personalized Dashboard</h2>
        
        {/* Form to collect user input */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label className="block text-slate-300 mb-2">Project Type</label>
              <select
                className="w-full p-3 bg-slate-700/50 text-white border-none rounded-lg"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                <option value="">Select Project Type</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Blog Platform">Blog Platform</option>
                <option value="Employee Management">Employee Management</option>
              </select>
            </div>
            
            <div className="w-full">
              <label className="block text-slate-300 mb-2">Technology Stack</label>
              <select
                className="w-full p-3 bg-slate-700/50 text-white border-none rounded-lg"
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
              >
                <option value="">Select Tech Stack</option>
                <option value="MERN Stack">MERN Stack</option>
                <option value="LAMP Stack">LAMP Stack</option>
                <option value="MEAN Stack">MEAN Stack</option>
              </select>
            </div>
          </div>

          <Button onClick={handleGeneratePlan} className="bg-blue-500 text-white px-6 py-3 rounded-lg">
            Generate Action Plan
          </Button>
        </div>

        {/* Display the generated action plan */}
        {actionPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="bg-slate-700/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Action Plan</h3>
                <p className="text-slate-300">{actionPlan}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Timeline</h3>
                <p className="text-slate-300">{timeline}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default PersonalizedDashboard;
