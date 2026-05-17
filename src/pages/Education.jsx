import React from 'react';
import { EDUCATION } from '../common/constants';

const Education = () => (
  <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION.map((edu, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-sky-100 shadow-md hover:shadow-xl transition"
          >
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-2xl font-bold text-slate-900">
              {edu.degree}
            </h3>
            <p className="text-sky-600 font-semibold">{edu.institution}</p>
            <p className="text-slate-500 text-sm">{edu.period}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;