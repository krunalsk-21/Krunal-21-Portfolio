import React, { useState } from 'react';
import './index.css';

// Components
const Header = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    // { id: 'blogs', label: 'Blogs' },
    { id: 'contact', label: 'Contact' },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex-shrink-0">
          <h1 className="text-2xl md:text-3xl font-bold gradient-text">Krunal Karanjekar</h1>
        </div>

        <div className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-4 py-2 rounded-lg transition-smooth ${
                activeSection === item.id
                  ? 'bg-sky-500 text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white border-b md:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`text-left px-6 py-3 border-b transition-smooth ${
                    activeSection === item.id
                      ? 'bg-sky-50 text-sky-600 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white py-12">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Krunal Karanjekar</h3>
          <p className="text-slate-400">Building modern web experiences with React & cutting-edge technologies.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#" className="hover:text-white transition-smooth">GitHub</a></li>
            <li><a href="#" className="hover:text-white transition-smooth">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-smooth">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-slate-400">Email: krunalsk2000@gmail.com</p>
          <p className="text-slate-400">Location: India</p>
        </div>
      </div>
      <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
        <p>&copy; 2025 Krunal Karanjekar. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Pages
const Home = ({ setActiveSection }) => (
  <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 flex items-center pt-1">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="slide-up space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Hi, I'm <span className="gradient-text">Krunal Karanjekar</span>
          </h1>
          <p className="text-xl text-slate-600">
            A passionate full-stack developer crafting beautiful, functional web experiences with React, Node.js, and modern technologies.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveSection('projects')}
              className="px-8 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-smooth"
            >
              View My Work
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className="px-8 py-3 border-2 border-sky-500 text-sky-500 rounded-lg font-semibold hover:bg-sky-50 transition-smooth"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full shadow-lg float"></div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="slide-up space-y-4 text-slate-700">
          <p className="text-lg leading-relaxed">
            I'm a full-stack developer with a passion for creating intuitive and engaging user experiences. With expertise in modern web technologies, I build scalable applications that solve real-world problems.
          </p>
          <p className="text-lg leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>
          <div className="space-y-3 mt-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              <span>Bachelor's Degree in Computer Science</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">💼</span>
              <span>5+ Years of Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌍</span>
              <span>Based in India</span>
            </div>
          </div>
        </div>
        <div className="slide-up">
          <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg p-8 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Interests</h3>
            <div className="space-y-3">
              {['Web Development', 'UI/UX Design', 'Open Source', 'Tech Blogging'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-sky-500 rounded-full"></span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Experience</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-8">
        {[
          {
            title: 'Senior Full Stack Developer',
            company: 'Tech Startup Inc',
            period: '2022 - Present',
            description: 'Led development of multiple React applications and Node.js backends, mentored junior developers.'
          },
          {
            title: 'Full Stack Developer',
            company: 'Digital Solutions Ltd',
            period: '2020 - 2022',
            description: 'Built scalable web applications using React, Express, and MongoDB for diverse clients.'
          },
          {
            title: 'Junior Developer',
            company: 'Web Design Studio',
            period: '2018 - 2020',
            description: 'Started career building responsive websites and learning modern development practices.'
          }
        ].map((exp, idx) => (
          <div key={idx} className="slide-up bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-smooth border-l-4 border-sky-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
            <p className="text-sky-600 font-semibold mb-1">{exp.company}</p>
            <p className="text-slate-500 text-sm mb-4">{exp.period}</p>
            <p className="text-slate-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { category: 'Frontend', skills: ['React', 'JavaScript', 'Tailwind CSS', 'Next.js'] },
          { category: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
          { category: 'Tools & Others', skills: ['Git', 'Docker', 'AWS', 'REST APIs'] }
        ].map((skillGroup, idx) => (
          <div key={idx} className="slide-up bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-smooth">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{skillGroup.category}</h3>
            <div className="space-y-4">
              {skillGroup.skills.map((skill) => (
                <div key={skill} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">{skill}</span>
                    <span className="text-sm text-slate-500">90%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-sky-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
          },
          {
            title: 'Project Management Tool',
            description: 'Collaborative project management app with real-time updates',
            tech: ['React', 'Firebase', 'Tailwind CSS']
          },
          {
            title: 'Social Media App',
            description: 'Social networking platform with messaging and notifications',
            tech: ['React', 'Express', 'PostgreSQL', 'Socket.io']
          },
          {
            title: 'Analytics Dashboard',
            description: 'Real-time analytics dashboard with interactive visualizations',
            tech: ['React', 'D3.js', 'API Integration']
          }
        ].map((project, idx) => (
          <div key={idx} className="slide-up bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-smooth group">
            <div className="h-48 bg-gradient-to-br from-sky-400 to-blue-600 group-hover:from-sky-500 group-hover:to-blue-700 transition-smooth flex items-center justify-center">
              <span className="text-white text-4xl">💻</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold">
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

const Blogs = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Latest Blog Posts</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'React Hooks Explained',
            date: 'Mar 15, 2024',
            category: 'React',
            excerpt: 'Deep dive into React Hooks and how to use them effectively in your applications.'
          },
          {
            title: 'Building APIs with Express',
            date: 'Mar 10, 2024',
            category: 'Backend',
            excerpt: 'Complete guide to building RESTful APIs with Express.js and best practices.'
          },
          {
            title: 'Tailwind CSS Tips & Tricks',
            date: 'Mar 5, 2024',
            category: 'CSS',
            excerpt: 'Advanced Tailwind CSS techniques to speed up your development workflow.'
          }
        ].map((blog, idx) => (
          <div key={idx} className="slide-up bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-smooth">
            <span className="text-sm font-semibold text-sky-600 bg-sky-100 px-3 py-1 rounded-full">{blog.category}</span>
            <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">{blog.title}</h3>
            <p className="text-slate-600 text-sm mb-4">{blog.date}</p>
            <p className="text-slate-700 mb-4">{blog.excerpt}</p>
            <a href="#" className="text-sky-600 font-semibold hover:text-sky-700">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
        <p className="text-slate-600 text-lg mt-4">Let's connect and create something amazing together</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p className="text-slate-600">contact@krunal.dev</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">📱</span>
              <div>
                <p className="font-semibold text-slate-900">Phone</p>
                <p className="text-slate-600">+91-XXXX-XXXX-XX</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-slate-900">Location</p>
                <p className="text-slate-600">India</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">📄</span>
              <div>
                <p className="font-semibold text-slate-900">Resume</p>
                <a href="#" className="text-sky-600 hover:text-sky-700 font-semibold">Download CV →</a>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
            <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
            <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
            <textarea rows="4" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500"></textarea>
          </div>
          <button type="submit" className="w-full px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-smooth">
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center">
        <p className="text-slate-600 mb-6">Follow me on social media</p>
        <div className="flex justify-center gap-4">
          {[{ name: 'GitHub', icon: '🐙' }, { name: 'LinkedIn', icon: '💼' }, { name: 'Twitter', icon: '🐦' }].map((social) => (
            <a
              key={social.name}
              href="#"
              className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-sky-50 flex items-center justify-center text-xl transition-smooth"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home setActiveSection={setActiveSection} />;
      case 'about': return <About />;
      case 'experience': return <Experience />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'blogs': return <Blogs />;
      case 'contact': return <Contact />;
      default: return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-20">{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
