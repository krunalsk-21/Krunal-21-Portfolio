import React from 'react';
import { SKILLS } from '../common/constants';

const Skills = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup, idx) => (
          <div
            key={idx}
            className="slide-up bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-smooth"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{skillGroup.category}</h3>
            <div className="space-y-4">
              {skillGroup.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-sky-100 rounded-full">
                    ⚡
                  </div>
                  <span className="font-medium text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;