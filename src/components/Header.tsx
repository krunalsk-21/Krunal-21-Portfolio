import React from 'react';
import { NavLink } from 'react-router-dom';
import { CONSTANTS } from '../common/constants';
import { ROUTES } from '../common/route';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const navItems = [
    { id: 'home', label: 'Home', path: { pathname: ROUTES.HOME } },
    { id: 'about', label: 'About', path: { pathname: ROUTES.ABOUT } },
    { id: 'education', label: 'Education', path: { pathname: ROUTES.EDUCATION } },
    { id: 'experience', label: 'Experience', path: { pathname: ROUTES.EXPERIENCE } },
    { id: 'skills', label: 'Skills', path: { pathname: ROUTES.SKILLS } },
    // { id: 'projects', label: 'Projects', path: { pathname: ROUTES.PROJECTS } },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex-shrink-0">
          {activeSection != 'home' && (
            <h1 className="text-2xl md:text-3xl font-bold gradient-text">{CONSTANTS.NAME}</h1>
          )}
        </div>
        <div className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-smooth ${
                  isActive ? 'bg-sky-500 text-white' : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              {item.label}
            </NavLink>
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
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-left px-6 py-3 border-b transition-smooth ${
                      isActive ? 'bg-sky-50 text-sky-600 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;