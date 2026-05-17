import React from 'react';
import { CONSTANTS } from '../common/constants';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    // { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
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

export default Header;