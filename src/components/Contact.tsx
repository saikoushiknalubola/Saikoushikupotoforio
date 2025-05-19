
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-anime-midnight to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Contact Me</h2>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="anime-card">
              <h3 className="text-xl font-semibold mb-6 text-anime-amber">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-anime-midnight/80 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-anime-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Phone</h4>
                    <p className="text-anime-text">+91 7671030069</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-anime-midnight/80 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-anime-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Email</h4>
                    <p className="text-anime-text">saikoushiknalubola@yahoo.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-anime-midnight/80 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-anime-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Location</h4>
                    <p className="text-anime-text">Warangal, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-anime-midnight rounded-full hover:bg-anime-teal/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-anime-teal" />
                </a>
                
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-anime-midnight rounded-full hover:bg-anime-teal/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-anime-teal" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="anime-card relative overflow-hidden">
            <h3 className="text-xl font-semibold mb-6 text-anime-amber">Send Message</h3>
            
            {/* Success message */}
            {submitSuccess && (
              <div className="absolute inset-0 flex items-center justify-center bg-anime-midnight/90 backdrop-blur-sm animate-fade-in z-10">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto bg-anime-teal/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-anime-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-anime-amber mb-2">Message Sent!</h4>
                  <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2.5 text-gray-300 focus:outline-none focus:border-anime-teal transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2.5 text-gray-300 focus:outline-none focus:border-anime-teal transition-colors"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2.5 text-gray-300 focus:outline-none focus:border-anime-teal transition-colors resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-md font-bold flex items-center justify-center ${
                  isSubmitting 
                    ? 'bg-gray-700 text-gray-300 cursor-not-allowed' 
                    : 'bg-anime-teal text-gray-900 hover:bg-anime-amber transition-colors'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
