import React from 'react';

const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Project Management Tool',
    description: 'Collaborative project management app with real-time updates',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
  },
  {
    title: 'Social Media App',
    description: 'Social networking platform with messaging and notifications',
    tech: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive visualizations',
    tech: ['React', 'D3.js', 'API Integration'],
  },
];

const Projects = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="slide-up bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-smooth group"
          >
            <div className="h-48 bg-gradient-to-br from-sky-400 to-blue-600 group-hover:from-sky-500 group-hover:to-blue-700 transition-smooth flex items-center justify-center">
              <span className="text-white text-4xl">💻</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;