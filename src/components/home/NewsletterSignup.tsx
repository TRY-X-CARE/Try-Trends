import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Mock form submission
      console.log('Subscribing email:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for updates on new products, upcoming sales, and exclusive offers. 
            Be the first to know when we launch something new!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button
              type="submit"
              className="btn btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-4 text-success-600 animate-fade-in">
              Thank you! You've been subscribed to our newsletter.
            </div>
          )}
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our <a href="/privacy" className="underline hover:text-primary-600">Privacy Policy</a> and 
            consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;