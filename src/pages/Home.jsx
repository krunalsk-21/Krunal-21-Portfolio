import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileImg from '../assets/profile.jpg';
import { CONSTANTS, Strings } from '../common/constants';
import { ROUTES } from '../common/route';

const Home = () => {
  const navigate = useNavigate();

  return (
  <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 flex items-center pt-1">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="slide-up space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Hi, I'm <span className="gradient-text">Krunal Karanjekar</span>
          </h1>
          <p className="text-xl text-slate-600">
            {Strings.HOME_SCREEN_DESC}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate({ pathname: ROUTES.ABOUT })}
              className="px-8 py-3 border-2 border-sky-500 text-sky-500 rounded-lg font-semibold hover:bg-sky-50 transition-smooth"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Krunal Karanjekar"
            className="w-64 h-64 object-cover rounded-full shadow-lg float"
          />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Home;