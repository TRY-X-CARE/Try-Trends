import React, { useState, useEffect, useRef } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Agent response simulation
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === 'user') {
      const timer = setTimeout(() => {
        // Generate automated response
        const responses = [
          "Thanks for your message! Our gift experts will be with you shortly.",
          "That's a great question about our custom gifts. Let me check some options for you.",
          "I understand what you're looking for. We have several options that might work well.",
          "Thanks for providing those details. It helps us create the perfect custom gift.",
          "We've done similar custom gifts before with great results!",
        ];
        
        // Add agent response
        setMessages(prev => [
          ...prev, 
          {
            id: Date.now().toString(),
            content: responses[Math.floor(Math.random() * responses.length)],
            sender: 'agent',
            timestamp: new Date()
          }
        ]);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [messages]);

  const startChat = (e: React.FormEvent) => {
    e.preventDefault();
    setIsChatStarted(true);
    
    // Welcome message
    setMessages([
      {
        id: Date.now().toString(),
        content: `Hi ${name}! Welcome to Try-Trend. How can our gift experts help you today?`,
        sender: 'agent',
        timestamp: new Date()
      }
    ]);
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message
    setMessages(prev => [
      ...prev, 
      {
        id: Date.now().toString(),
        content: message,
        sender: 'user',
        timestamp: new Date()
      }
    ]);
    
    // Clear input
    setMessage('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors z-30"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chat Window */}
      <div className={`fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full md:w-96 bg-white rounded-t-lg md:rounded-lg shadow-xl z-40 transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : 'translate-y-full md:invisible'}`}>
        {/* Header */}
        <div className="bg-primary-600 text-white p-4 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <MessageCircle size={20} className="mr-2" />
            <h3 className="font-medium">Chat with our Team</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-primary-200"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Chat Content */}
        <div className="h-80 overflow-y-auto p-4 bg-gray-50">
          {!isChatStarted ? (
            <div className="h-full flex flex-col justify-center">
              <p className="text-center text-gray-600 mb-4">
                Chat with our custom gift specialists to discuss your ideas and get personalized assistance.
              </p>
              <form onSubmit={startChat} className="space-y-3">
                <div>
                  <label htmlFor="chat-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="chat-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="chat-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="chat-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Start Chat
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-3">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[75%] rounded-lg p-3 ${
                    msg.sender === 'user' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}>
                    <p>{msg.content}</p>
                    <span className={`text-xs block mt-1 ${
                      msg.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                    }`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
        
        {/* Message Input */}
        {isChatStarted && (
          <form onSubmit={sendMessage} className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow border-gray-300 rounded-l-md focus:ring-primary-500 focus:border-primary-500"
              disabled={!isChatStarted}
            />
            <button
              type="submit"
              className="bg-primary-600 text-white px-4 rounded-r-md hover:bg-primary-700 transition-colors disabled:bg-gray-300"
              disabled={!message.trim() || !isChatStarted}
            >
              <Send size={18} />
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default LiveChat;