import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFormSubmission();
  };

  const handleFormSubmission = async () => {
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd6-tkzWpe2ddojO-z11jTO9At1_PgE5QZ18Abp7VNjwECN8g/formResponse";

    const formDataToSend = new FormData();
    formDataToSend.append("entry.862216653", formData.name);     // Full Name
    formDataToSend.append("entry.115695360", formData.email);    // Email
    formDataToSend.append("entry.1540692957", formData.phone);   // Phone
    formDataToSend.append("entry.1288763849", formData.subject); // Subject
    formDataToSend.append("entry.1600785985", formData.message); // Message

    try {
      await fetch(formUrl, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors", // prevents CORS issues
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error("Error submitting form!", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
};


  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Get in
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              {' '}Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about unlocking your dream career? Need help finding the right key to your professional future? We're here to guide you in our virtual learning space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 h-full">
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-300">
                      123 Learning Street<br />
                      Education City, EC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-400">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@futurekey.com</p>
                    <p className="text-sm text-gray-400">We reply within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-gray-700 rounded-xl hover:bg-emerald-600 transition-colors duration-300"
                  >
                    <Linkedin className="h-6 w-6 text-gray-300 hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-700 rounded-xl hover:bg-emerald-600 transition-colors duration-300"
                  >
                    <Instagram className="h-6 w-6 text-gray-300 hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-700 rounded-xl hover:bg-emerald-600 transition-colors duration-300"
                  >
                    <Youtube className="h-6 w-6 text-gray-300 hover:text-white" />
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-white font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="course-inquiry">Course Inquiry</option>
                          <option value="technical-support">Technical Support</option>
                          <option value="billing">Billing Question</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-green-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full">
                      <CheckCircle className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h2>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-full font-medium hover:from-emerald-600 hover:to-green-500 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Find Us Here</h2>
            <div className="bg-gray-700 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                <p className="text-white font-semibold">Interactive Map</p>
                <p className="text-gray-400 text-sm">123 Learning Street, Education City</p>
                <p className="text-emerald-400 text-sm mt-2">Map integration would go here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;