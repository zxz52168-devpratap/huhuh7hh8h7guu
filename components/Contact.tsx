import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-darker relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-card rounded-lg border border-gray-800 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Email Me</h3>
                <p className="text-gray-400 text-sm">contact@alexdev.com</p>
                <p className="text-gray-400 text-sm">support@alexdev.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-card rounded-lg border border-gray-800 text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Location</h3>
                <p className="text-gray-400 text-sm">San Francisco, CA</p>
                <p className="text-gray-400 text-sm">Remote Available</p>
              </div>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-gray-800 mt-8">
              <h3 className="text-white font-medium mb-2">Working Hours</h3>
              <p className="text-gray-400 text-sm mb-1">Mon - Fri: 9am - 6pm PST</p>
              <p className="text-gray-400 text-sm">Weekend: By Appointment</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-card border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-card border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-card border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className={`w-full py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${
                status === 'success'
                  ? 'bg-green-600 text-white'
                  : 'bg-primary hover:bg-blue-600 text-white'
              }`}
            >
              {status === 'idle' && (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
              {status === 'sending' && <span>Sending...</span>}
              {status === 'success' && <span>Message Sent!</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;