import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'How do you ensure the quality of writing?',
          answer: 'All our writers hold advanced degrees in their respective fields and undergo rigorous training. Each project goes through multiple quality checks including plagiarism scanning, proofreading, and content review.'
        },
        {
          question: 'What is your revision policy?',
          answer: 'We offer unlimited revisions until you are completely satisfied with the work. Our goal is your complete satisfaction with the final deliverable.'
        },
        {
          question: 'How do you handle confidentiality?',
          answer: 'We take confidentiality seriously. All client information and projects are protected with encryption and strict privacy protocols. We never share your details or work with third parties.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What formats do you support?',
          answer: 'We support all major formatting styles including APA, MLA, Chicago, Harvard, and IEEE. We can also work with specific institutional requirements.'
        },
        {
          question: 'How long does a typical project take?',
          answer: 'Delivery time depends on project complexity and length. Standard academic papers take 3-5 days, while complex dissertations may take 2-3 weeks. We also offer expedited services for urgent projects.'
        },
        {
          question: 'Do you provide plagiarism reports?',
          answer: 'Yes, we provide comprehensive plagiarism reports with every project using industry-standard tools like Turnitin and Copyscape.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, bank transfers, and cryptocurrency. All payments are processed through secure, encrypted channels.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No, our pricing is completely transparent. The quote you receive includes all services, and we never charge hidden fees.'
        },
        {
          question: 'Can I get a refund?',
          answer: 'We offer a money-back guarantee if we fail to meet the agreed requirements. However, we work closely with you to ensure complete satisfaction before delivery.'
        }
      ]
    },
    {
      category: 'Support',
      questions: [
        {
          question: 'How can I track my project progress?',
          answer: 'You get a dedicated project manager and 24/7 access to our project portal where you can track progress, communicate with your writer, and review drafts.'
        },
        {
          question: 'What if I need urgent assistance?',
          answer: 'We offer 24/7 premium support for all clients. Urgent queries are prioritized and typically answered within 15 minutes.'
        },
        {
          question: 'Can I communicate directly with my writer?',
          answer: 'Yes, we encourage direct communication with your assigned writer through our secure messaging system to ensure your vision is perfectly captured.'
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <section id="faq" className="py-16 md:py-20 px-4">
      <div className="max-w-3xl mx-auto"> {/* Reduced from max-w-7xl to max-w-3xl */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <HelpCircle size={16} className="text-purple-400" />
            <span className="text-purple-400 text-sm font-semibold">FAQ</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-6">
            Find quick answers to common questions about our writing services and processes
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all text-sm"
            />
          </div>
        </div>

        {/* Single column layout for all screens */}
        <div className="space-y-8">
          {filteredFaqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="space-y-3">
                {category.questions.map((faq, i) => {
                  const globalIndex = faqs.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.questions.length, 0) + i;
                  
                  return (
                    <div
                      key={i}
                      className="border border-slate-700/50 rounded-xl bg-slate-800/30 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300 overflow-hidden"
                    >
                      <button
                        className="w-full px-4 py-3 text-left flex items-center justify-between"
                        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                      >
                        <span className="text-base font-semibold text-white pr-4 text-left">
                          {faq.question}
                        </span>
                        <div className="flex-shrink-0">
                          {openIndex === globalIndex ? (
                            <ChevronUp className="text-purple-400" size={18} />
                          ) : (
                            <ChevronDown className="text-purple-400" size={18} />
                          )}
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {openIndex === globalIndex && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 pb-4"
                          >
                            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-3" />
                            <p className="text-gray-300 leading-relaxed text-sm">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};