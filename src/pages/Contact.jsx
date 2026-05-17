import React from 'react';
import emailjs from '@emailjs/browser';
import { CONSTANTS, EMAIL_PUBLIC_KEY, EMAIL_SEVICE_ID, EMAIL_TEMPLATE_ID, SOCIALS } from '../common/constants';
import Krunal_Karanjekar_Resume from '../documents/Krunal_Karanjekar_Resume.pdf';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(EMAIL_SEVICE_ID, EMAIL_TEMPLATE_ID, e.target, EMAIL_PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message');
        }
      );

    e.target.reset();
  };

  return (
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
                  <p className="text-slate-600">{CONSTANTS.EMAIL_ADDRESS}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <p className="text-slate-600">{CONSTANTS.PHONE_NUMBER}</p>
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
                  <a
                    href={Krunal_Karanjekar_Resume}
                    download
                    className="text-sky-600 hover:text-sky-700 font-semibold"
                  >
                    Download CV →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={sendEmail} className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <input type="hidden" name="time" value={new Date().toLocaleString()} />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition-smooth"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center">
          <p className="text-slate-600 mb-6">Follow me on social media</p>
          <div className="flex justify-center gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={CONSTANTS[social.key]}
                target="_blank"
                rel="noopener noreferrer"
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
};

export default Contact;