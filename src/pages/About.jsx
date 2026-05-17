import React from 'react';
import { Strings } from '../common/constants';

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
            {Strings.ABOUT_SCREEN_DESC1}
          </p>
          <p className="text-lg leading-relaxed">
            {Strings.ABOUT_SCREEN_DESC2}
          </p>
          <div className="space-y-3 mt-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💼</span>
              <span>3+ Years of Experience</span>
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
              {['Web Development', 'Mobile Development', 'API Development', 'AI Integrations'].map((item) => (
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

export default About;