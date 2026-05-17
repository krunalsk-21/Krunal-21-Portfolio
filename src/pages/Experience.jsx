import React from 'react';
import { EXPERIENCE } from '../common/constants';

const Experience = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Experience</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-8">
        {EXPERIENCE.map((exp, idx) => (
          <div
            key={idx}
            className="slide-up bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-smooth border-l-4 border-sky-500"
          >
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

export default Experience;