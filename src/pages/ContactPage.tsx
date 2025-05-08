import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <main className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have a question, need help with an order, or want to learn more about our custom gifts? 
            We're here to help in whatever way works best for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-xl font-medium mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <Mail size={20} className="text-primary-600 flex-shrink-0 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-gray-600 mb-1">
                      For general inquiries:
                    </p>
                    <a 
                      href="mailto:hello@trytrend.com" 
                      className="text-primary-600 hover:text-primary-700"
                    >
                      hello@trytrend.com
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">
                      For order support:
                    </p>
                    <a 
                      href="mailto:support@trytrend.com" 
                      className="text-primary-600 hover:text-primary-700"
                    >
                      support@trytrend.com
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone size={20} className="text-primary-600 flex-shrink-0 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-gray-600 mb-1">
                      Customer Support (Mon-Fri, 9am-6pm EST):
                    </p>
                    <a 
                      href="tel:+12125551234" 
                      className="text-primary-600 hover:text-primary-700"
                    >
                      +1 (212) 555-1234
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <MessageCircle size={20} className="text-primary-600 flex-shrink-0 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium mb-1">Live Chat</h4>
                    <p className="text-gray-600 mb-3">
                      Chat with our team in real-time for quick assistance.
                    </p>
                    <button className="btn btn-primary text-sm px-4 py-2">
                      Start Chat
                    </button>
                  </div>
                </div>
                
                <div className="flex">
                  <MapPin size={20} className="text-primary-600 flex-shrink-0 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium mb-1">Visit Us</h4>
                    <p className="text-gray-600">
                      123 Trend Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
              <h3 className="font-medium text-lg mb-3">Business Hours</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="py-2 font-medium">Monday - Friday</td>
                    <td className="py-2 text-right">9:00 AM - 6:00 PM EST</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Saturday</td>
                    <td className="py-2 text-right">10:00 AM - 4:00 PM EST</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Sunday</td>
                    <td className="py-2 text-right">Closed</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-600 mt-4">
                Online orders and inquiries are accepted 24/7. Our customer service team 
                will respond during business hours.
              </p>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-md p-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343056!2d-74.00425878459382!3d40.74076737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a4119ce269%3A0x9dec0c979b575972!2sMadison%20Square%20Park!5e0!3m2!1sen!2sus!4v1623252352398!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Try-Trend Location"
            ></iframe>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find quick answers to our most commonly asked questions. If you don't see what you're 
              looking for, please contact us directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-medium text-lg mb-2">What is the shipping time?</h4>
              <p className="text-gray-600">
                Standard shipping within the US typically takes 3-5 business days. 
                Express shipping (1-2 business days) is available for an additional fee.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-medium text-lg mb-2">What is your return policy?</h4>
              <p className="text-gray-600">
                Most items can be returned within 30 days of receipt. Custom gifts are 
                non-refundable but may be eligible for store credit in certain circumstances.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-medium text-lg mb-2">How long does a custom gift take?</h4>
              <p className="text-gray-600">
                The timeline for custom gifts varies depending on complexity. After your 
                consultation, we'll provide an estimated completion date, typically 1-3 weeks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-medium text-lg mb-2">Do you ship internationally?</h4>
              <p className="text-gray-600">
                Yes, we ship to most countries worldwide. International shipping typically takes 
                7-14 business days, and customs fees may apply.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/faq" 
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View All FAQs
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;