import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { CONSTANTS, SOCIALS, Strings } from '../common/constants';

const Footer = () => (
  <footer className="bg-slate-900 text-white py-12">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4">{CONSTANTS.NAME}</h3>
          <p className="text-slate-400">{Strings.FOOTER_JOB_DESC}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-slate-400">
            {SOCIALS.map((social) => (
              <li key={social.name}>
                <a
                  href={CONSTANTS[social.key as keyof typeof CONSTANTS]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-smooth"
                >
                  <span className="text-lg">{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-slate-400">
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>{CONSTANTS.EMAIL_ADDRESS}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <span>India</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
        <p>&copy; 2025 Krunal Karanjekar. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;