import { motion } from 'framer-motion';
import { DocumentTextIcon, ChatBubbleBottomCenterTextIcon, RocketLaunchIcon, SparklesIcon, CheckIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400/5 via-green-400/10 to-teal-400/15">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-gradient">OpenJobs AI</a>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="/about" className="nav-link">About</a>
              <a href="https://openjobs-ai.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Get Started
              </a>
            </div>
            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200"
              >
                <span className="sr-only">Open menu</span>
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
          </div>
        </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden absolute top-16 inset-x-0 z-50 bg-white border-b border-neutral-200">
            <div className="pt-2 pb-4 px-4 space-y-1">
              <a
                href="#how-it-works"
                className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-900 hover:bg-neutral-100 hover:text-emerald-600 transition-all duration-200"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const section = document.getElementById('how-it-works');
                  const navHeight = 64;
                  const offset = section.offsetTop - navHeight;
                  window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                  });
                }}
              >
                How It Works
              </a>
              <a
                href="/about"
                className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-900 hover:bg-neutral-100 hover:text-emerald-600 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <div className="mt-4 px-3">
                <a
                  href="https://openjobs-ai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg px-4 py-2 text-base font-medium hover:opacity-90 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <RocketLaunchIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen sm:min-h-[85vh] flex items-start sm:items-center pt-24 sm:pt-0">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-neutral-100 via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(167,243,208,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(134,239,172,0.1),transparent_50%)]"></div>
          {/* Animated Grid Background */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(167, 243, 208, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(167, 243, 208, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
          }}></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Circles */}
                <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
              rotate: [0, 180, 360]
            }}
                  transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.8, 0.5, 0.8],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <main className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Title with Glow Effect */}
                <div className="relative inline-block">
                  <motion.div
                    className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  <h1 className="relative text-3xl sm:text-4xl tracking-tight font-extrabold md:text-5xl lg:text-6xl mb-6">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 pb-2">
                      AI Job Hunter
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
                      Finds & Applies to your Dream Jobs
                    </span>
                  </h1>
                </div>

                {/* Description with Typing Effect */}
                <motion.p 
                  className="mt-3 text-lg text-neutral-600 sm:mt-5 sm:text-xl max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Let AI revolutionize your job search. Upload your resume, and watch as our AI matches you with your perfect career opportunities.
                </motion.p>

                {/* Interactive CTA Buttons */}
                <motion.div
                  className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.a
                    href="https://openjobs-ai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg flex items-center justify-center space-x-2 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20 transform group-hover:translate-x-full transition-transform duration-500"></div>
                    <span>Get Started Free</span>
                    <RocketLaunchIcon className="h-5 w-5 group-hover:animate-bounce" />
                    </motion.a>
                    <motion.button
                    className="btn-secondary w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg flex items-center justify-center space-x-2 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-teal-400/10 transform group-hover:translate-x-full transition-transform duration-500"></div>
                    <span>Watch Demo</span>
                    <SparklesIcon className="h-5 w-5 group-hover:animate-spin" />
                    </motion.button>
                </motion.div>
                
                {/* Animated Stats Cards */}
                <motion.div
                  className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto px-4 sm:px-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {[
                    { label: 'Job Matches', value: '1M+', icon: DocumentTextIcon },
                    { label: 'Success Rate', value: '89%', icon: SparklesIcon },
                    { label: 'Happy Users', value: '50K+', icon: RocketLaunchIcon }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="relative group cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-teal-400/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                      <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-neutral-200/50 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                        <div className="flex items-center justify-center mb-2 sm:mb-3">
                          <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-500 group-hover:text-emerald-600 transition-colors duration-300" />
                  </div>
                        <div className="text-xl sm:text-2xl font-bold text-gradient text-center">{stat.value}</div>
                        <div className="text-sm sm:text-base text-neutral-600 mt-1 group-hover:text-neutral-700 transition-colors duration-300 text-center">{stat.label}</div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl"></div>
                </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 px-4 sm:px-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  {[
                    { text: 'Trusted by 500+ Companies', delay: 0 },
                    { text: 'AI Powered', delay: 0.2 },
                    { text: '24/7 Support', delay: 0.4 }
                  ].map((badge, index) => (
                    <motion.div
                      key={badge.text}
                      className="flex items-center text-neutral-500 relative group cursor-pointer w-full sm:w-auto justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: badge.delay }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-green-400/5 to-teal-400/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-emerald-500 group-hover:text-emerald-600 transition-colors duration-300" />
                      <span className="relative z-10 text-sm sm:text-base">{badge.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </main>
          </div>
        </div>

        {/* Animated Bottom Gradient */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      {/* How It Works Section */}
      <section id="how-it-works" className="section relative overflow-hidden py-24 scroll-mt-24">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.02),transparent_70%)]"></div>
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(167, 243, 208, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(167, 243, 208, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '3rem 3rem'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '30px 30px', '0px 0px'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
          </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            className="lg:text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-neutral-800 relative inline-block">
              <motion.div
                className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-emerald-400/30 via-green-400/30 to-teal-400/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <span className="relative bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">How It Works</span>
            </h2>
            <motion.div 
              className="mt-4 flex justify-center space-x-2"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="w-3 h-3 rounded-full bg-teal-500"></span>
            </motion.div>
          </motion.div>

          {/* Steps */}
          <div className="space-y-12 relative">
            {/* Connection Line */}
            <motion.div 
              className="absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-green-400 to-teal-400 hidden md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ originY: 0 }}
            ></motion.div>

            {/* Step 1 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card group hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                  <motion.div 
                    className="icon-box relative z-10 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <DocumentTextIcon className="h-8 w-8 text-neutral-700 relative z-10" />
                  </motion.div>
                  <h3 className="ml-4 text-2xl font-bold text-gradient">Step 01: OpenJobs AI Learns about You</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                  <motion.div 
                    className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-100 relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center">
                        <DocumentTextIcon className="h-6 w-6 text-emerald-500 mr-2 group-hover:text-emerald-600 transition-colors duration-300" />
                        <h4 className="text-xl font-semibold text-neutral-800">Upload Resume</h4>
                    </div>
                      <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                        OpenJobs AI scans your resume and learns about your experiences, skills, and achievements.
                      </p>
                      
                      {/* Resume Upload Visualization */}
                      <div className="mt-4 relative">
                        <div className="relative bg-white rounded-lg p-4 border border-neutral-200 shadow-sm">
                          {/* Document Preview */}
                          <motion.div 
                            className="flex items-start space-x-3"
                            animate={{
                              y: [0, -2, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <div className="w-12 h-14 bg-neutral-100 rounded-lg flex items-center justify-center">
                              <DocumentTextIcon className="h-8 w-8 text-emerald-500" />
                    </div>
                            <div className="flex-1 space-y-2">
                              <div className="h-2 w-24 bg-emerald-400/30 rounded-full"></div>
                              <div className="space-y-1">
                                <div className="h-1.5 w-full bg-neutral-200 rounded-full"></div>
                                <div className="h-1.5 w-5/6 bg-neutral-200 rounded-full"></div>
                                <div className="h-1.5 w-4/6 bg-neutral-200 rounded-full"></div>
                  </div>
                </div>
                          </motion.div>

                          {/* Scanning Effect */}
                          <motion.div
                            className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                            animate={{
                              y: [0, 50, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          ></motion.div>

                          {/* Processing Indicators */}
                          <div className="mt-3 flex justify-between items-center">
                            <div className="flex space-x-1">
                              {[1, 2, 3].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                                  animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5],
                                  }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                  }}
                                ></motion.div>
                              ))}
              </div>
                            <motion.div
                              className="text-xs text-emerald-500"
                              animate={{
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            >
                              Processing...
                            </motion.div>
                          </div>
                        </div>

                        {/* Extracted Skills */}
                        <div className="mt-3 flex flex-wrap gap-2">
                          {['React', 'Node.js', 'Python', 'AI/ML'].map((skill, index) => (
                            <motion.span
                              key={skill}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700"
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.1,
                                type: "spring",
                              }}
                            >
                              <motion.span
                                animate={{
                                  opacity: [1, 0.7, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: index * 0.2,
                                }}
                              >
                                {skill}
                              </motion.span>
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-100 relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center">
                        <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-green-500 mr-2 group-hover:text-green-600 transition-colors duration-300" />
                        <h4 className="text-xl font-semibold text-neutral-800">Chat with OpenJobs AI</h4>
                      </div>
                      <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                        Have a friendly chat about your dream job while AI builds your perfect profile.
                      </p>

                      {/* Chat Interface Visualization */}
                      <div className="mt-4 bg-white rounded-lg p-4 border border-neutral-200 shadow-sm">
                        {/* Chat Messages */}
                        <div className="space-y-3">
                          {/* AI Message */}
                          <motion.div
                            className="flex items-start space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                              <SparklesIcon className="h-5 w-5 text-emerald-500" />
                            </div>
                            <div className="flex-1 bg-neutral-100 rounded-lg p-3 text-sm">
                              <p className="text-neutral-700">Tell me about your dream job! What kind of role are you looking for?</p>
                            </div>
                          </motion.div>

                          {/* User Message */}
                          <motion.div
                            className="flex items-start space-x-2 justify-end"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            <div className="flex-1 bg-emerald-100 rounded-lg p-3 text-sm">
                              <p className="text-emerald-700">I'm interested in AI/ML Engineering roles...</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center">
                              <UserIcon className="h-5 w-5 text-neutral-500" />
                            </div>
                          </motion.div>

                          {/* Typing Indicator */}
                          <motion.div
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                          >
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                              <SparklesIcon className="h-5 w-5 text-emerald-500" />
                            </div>
                            <div className="flex space-x-1">
                              {[1, 2, 3].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-2 h-2 rounded-full bg-neutral-300"
                                  animate={{
                                    y: [0, -3, 0],
                                  }}
                                  transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                  }}
                                ></motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>

                        {/* Profile Building Progress */}
                        <div className="mt-4 pt-3 border-t border-neutral-200">
                          <div className="flex justify-between text-xs text-neutral-500 mb-1">
                            <span>Profile Completion</span>
                            <span>75%</span>
                          </div>
                          <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"
                              initial={{ width: "0%" }}
                              animate={{ width: "75%" }}
                              transition={{
                                duration: 1,
                                ease: "easeOut",
                              }}
                            ></motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card group hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                  <motion.div 
                    className="icon-box relative z-10 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <RocketLaunchIcon className="h-8 w-8 text-neutral-700 relative z-10" />
                  </motion.div>
                  <h3 className="ml-4 text-2xl font-bold text-gradient">Step 02: Your Personal Job Hunter</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                  <motion.div 
                    className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-100 relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center">
                        <SparklesIcon className="h-6 w-6 text-emerald-500 mr-2 group-hover:text-emerald-600 transition-colors duration-300" />
                        <h4 className="text-xl font-semibold text-neutral-800">24/7 Job Search</h4>
                    </div>
                      <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                        Your tireless AI assistant searches hundreds of job platforms every minute.
                      </p>

                      {/* Job Search Visualization */}
                      <div className="mt-4 bg-white rounded-lg p-4 border border-neutral-200 shadow-sm">
                        {/* Search Animation */}
                        <div className="relative">
                          {/* Search Platforms */}
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {['LinkedIn', 'Indeed', 'Glassdoor'].map((platform, index) => (
                              <motion.div
                                key={platform}
                                className="px-2 py-1.5 bg-neutral-100 rounded text-xs text-center text-neutral-600"
                                animate={{
                                  scale: [1, 1.05, 1],
                                  opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: index * 0.3,
                                }}
                              >
                                {platform}
                              </motion.div>
                            ))}
                    </div>

                          {/* Search Radar Effect */}
                          <div className="relative h-24 mb-3">
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-transparent rounded-full"
                              animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              style={{
                                transformOrigin: "center",
                              }}
                            />
                            <motion.div
                              className="absolute inset-0 border-2 border-emerald-400/20 rounded-full"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut",
                              }}
                            />
                            {/* Job Dots */}
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-emerald-400 rounded-full"
                                style={{
                                  left: `${30 + Math.random() * 40}%`,
                                  top: `${30 + Math.random() * 40}%`,
                                }}
                                animate={{
                                  scale: [0, 1, 0],
                                  opacity: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.3,
                                }}
                              />
                            ))}
                          </div>

                          {/* Real-time Stats */}
                          <div className="flex justify-between text-xs text-neutral-500">
                            <motion.div
                              animate={{
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            >
                              Scanning: 247 jobs/min
                            </motion.div>
                            <motion.div
                              className="text-emerald-500"
                              animate={{
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.5,
                              }}
                            >
                              Live Search Active
                            </motion.div>
                    </div>
                  </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-100 relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center">
                        <SparklesIcon className="h-6 w-6 text-green-500 mr-2 group-hover:text-green-600 transition-colors duration-300" />
                        <h4 className="text-xl font-semibold text-neutral-800">Hidden Gems</h4>
                      </div>
                      <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                        Discovers opportunities you might have missed on specialized platforms.
                      </p>

                      {/* Hidden Gems Visualization */}
                      <div className="mt-4 bg-white rounded-lg p-4 border border-neutral-200 shadow-sm">
                        {/* Job Cards */}
                        <div className="space-y-3">
                          {[
                            { title: 'AI Research Engineer', company: 'Tech Startup', match: '98%' },
                            { title: 'ML Platform Engineer', company: 'Scale AI', match: '95%' },
                            { title: 'AI Solutions Architect', company: 'Innovation Labs', match: '92%' }
                          ].map((job, index) => (
                            <motion.div
                              key={job.title}
                              className="p-3 rounded-lg border border-neutral-200 bg-neutral-50 relative overflow-hidden group"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-green-400/5 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                              <div className="relative z-10">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="font-medium text-neutral-800">{job.title}</div>
                                    <div className="text-sm text-neutral-500">{job.company}</div>
                                  </div>
                                  <motion.div
                                    className="text-sm font-medium text-emerald-500"
                                    animate={{
                                      scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: index * 0.3,
                                    }}
                                  >
                                    {job.match}
                                  </motion.div>
                                </div>
                                <div className="mt-2 h-1 bg-neutral-200 rounded-full overflow-hidden">
                                  <motion.div
                                    className="h-full bg-gradient-to-r from-emerald-400 to-green-400"
                                    initial={{ width: "0%" }}
                                    animate={{ width: job.match }}
                                    transition={{
                                      duration: 1,
                                      delay: index * 0.2,
                                    }}
                                  ></motion.div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Discovery Stats */}
                        <div className="mt-3 pt-3 border-t border-neutral-200 flex justify-between items-center text-xs text-neutral-500">
                          <div className="flex items-center">
                            <motion.div
                              className="w-2 h-2 rounded-full bg-emerald-400 mr-2"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            ></motion.div>
                            Discovering new opportunities
                          </div>
                          <motion.div
                            animate={{
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          >
                            Last updated: 2m ago
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-100 relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center">
                        <SparklesIcon className="h-6 w-6 text-teal-500 mr-2 group-hover:text-teal-600 transition-colors duration-300" />
                        <h4 className="text-xl font-semibold text-neutral-800">Auto-Apply</h4>
                      </div>
                      <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                        Coming Soon: Automatically applies to matching positions.
                      </p>

                      {/* Auto-Apply Visualization */}
                      <div className="mt-4 bg-white rounded-lg p-4 border border-neutral-200 shadow-sm">
                        {/* Application Process Steps */}
                        <div className="relative">
                          <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200"></div>
                          
                          {/* Process Steps */}
                          {[
                            { step: 'Resume Tailoring', status: 'done' },
                            { step: 'Cover Letter Generation', status: 'done' },
                            { step: 'Application Submission', status: 'pending' }
                          ].map((item, index) => (
                            <div key={item.step} className="relative flex items-center mb-3 last:mb-0">
                              <motion.div
                                className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 ${
                                  item.status === 'done' ? 'bg-emerald-100' : 'bg-neutral-100'
                                }`}
                                animate={
                                  item.status === 'done'
                                    ? {
                                        scale: [1, 1.2, 1],
                                        opacity: [0.7, 1, 0.7],
                                      }
                                    : {}
                                }
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                }}
                              >
                                <SparklesIcon
                                  className={`h-4 w-4 ${
                                    item.status === 'done' ? 'text-emerald-500' : 'text-neutral-400'
                                  }`}
                                />
                              </motion.div>
                              
                              <div className="ml-3 flex-1">
                                <div className="text-sm font-medium text-neutral-800">{item.step}</div>
                                <div className="text-xs text-neutral-500">
                                  {item.status === 'done' ? 'Completed' : 'Waiting...'}
                                </div>
                              </div>
                              {item.status === 'done' && (
                                <motion.div
                                  className="w-4 h-4 text-emerald-500"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{
                                    type: "spring",
                                    delay: index * 0.2,
                                  }}
                                >
                                  <CheckIcon className="w-full h-full" />
                                </motion.div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Coming Soon Badge */}
                        <motion.div
                          className="mt-4 pt-3 border-t border-neutral-200 flex justify-center"
                          animate={{
                            y: [0, -2, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                            <SparklesIcon className="h-3 w-3 mr-1" />
                            Coming Soon
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card group hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                  <motion.div 
                    className="icon-box relative z-10 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <SparklesIcon className="h-8 w-8 text-neutral-700 relative z-10" />
                  </motion.div>
                  <h3 className="ml-4 text-2xl font-bold text-gradient">Step 03: Smart Matching</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                  <motion.div 
                    className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-100 relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center">
                        <SparklesIcon className="h-6 w-6 text-emerald-500 mr-2 group-hover:text-emerald-600 transition-colors duration-300" />
                        <h4 className="text-xl font-semibold text-neutral-800">Perfect Match Score</h4>
                    </div>
                      <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                        Each job gets a compatibility score from 1-10, just like a dating app!
                      </p>
                      
                      {/* Perfect Match Visualization */}
                      <div className="mt-4 bg-white rounded-lg p-4 border border-neutral-200 shadow-sm">
                        {/* Job Match Card */}
                        <div className="relative">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-transparent rounded-lg"
                            animate={{
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <div className="relative p-3">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <div className="font-medium text-neutral-800">Senior AI Engineer</div>
                                <div className="text-sm text-neutral-500">TechCorp Inc.</div>
                    </div>
                              <motion.div
                                className="flex items-center"
                                animate={{
                                  scale: [1, 1.1, 1],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                <span className="text-lg font-bold text-emerald-500">9.5</span>
                                <span className="text-sm text-neutral-400 ml-1">/10</span>
                              </motion.div>
                    </div>

                            {/* Match Indicators */}
                            <div className="space-y-2">
                              {[
                                { label: 'Skills Match', score: 95 },
                                { label: 'Experience Match', score: 90 },
                                { label: 'Culture Fit', score: 85 }
                              ].map((item, index) => (
                                <div key={item.label} className="relative">
                                  <div className="flex justify-between text-sm mb-1">
                                    <span className="text-neutral-600">{item.label}</span>
                                    <span className="text-emerald-500">{item.score}%</span>
                                  </div>
                                  <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                                    <motion.div
                                      className="h-full bg-gradient-to-r from-emerald-400 to-green-400"
                                      initial={{ width: "0%" }}
                                      animate={{ width: `${item.score}%` }}
                                      transition={{
                                        duration: 1,
                                        delay: index * 0.2,
                                        ease: "easeOut"
                                      }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Match Badges */}
                            <div className="flex flex-wrap gap-2 mt-3">
                              {['Perfect Role', 'Salary Match', 'Growth Potential'].map((badge, index) => (
                                <motion.span
                                  key={badge}
                                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700"
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                  }}
                                >
                                  <SparklesIcon className="h-3 w-3 mr-1" />
                                  {badge}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                  </div>
                </div>
              </div>
            </motion.div>

                  <motion.div 
                    className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-100 relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center">
                        <SparklesIcon className="h-6 w-6 text-green-500 mr-2 group-hover:text-green-600 transition-colors duration-300" />
                        <h4 className="text-xl font-semibold text-neutral-800">Custom Cover Letters</h4>
          </div>
                      <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                        AI writes personalized cover letters that make you stand out.
                      </p>

                      {/* Cover Letter Generation Visualization */}
                      <div className="mt-4 bg-white rounded-lg p-4 border border-neutral-200 shadow-sm">
                        <div className="relative">
                          {/* Document Preview */}
                          <div className="bg-neutral-50 rounded-lg p-3 relative">
                            <motion.div
                              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-400/10 to-transparent"
                              animate={{
                                x: ['-100%', '100%'],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            
                            {/* Content Lines */}
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <motion.div 
                                  className="h-2 w-12 bg-emerald-400/30 rounded-full"
                                  animate={{
                                    opacity: [0.5, 1, 0.5],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                  }}
                                />
                                <motion.div 
                                  className="h-2 w-20 bg-emerald-400/30 rounded-full"
                                  animate={{
                                    opacity: [0.5, 1, 0.5],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: 0.2,
                                  }}
                                />
        </div>
                              
                              {[40, 35, 45, 30].map((width, index) => (
                                <motion.div
                                  key={index}
                                  className="h-1.5 bg-neutral-200 rounded-full"
                                  style={{ width: `${width}%` }}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${width}%` }}
                                  transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                  }}
                                />
                              ))}
      </div>

                            {/* AI Writing Indicators */}
                            <div className="mt-3 flex items-center justify-between text-xs">
                              <div className="flex items-center text-emerald-500">
                                <motion.div
                                  animate={{
                                    scale: [1, 1.2, 1],
                                  }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                  }}
                                >
                                  <SparklesIcon className="h-3 w-3 mr-1" />
                                </motion.div>
                                <span>AI Writing...</span>
                              </div>
                              <motion.div
                                className="text-neutral-400"
                                animate={{
                                  opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                }}
                              >
                                Personalizing Content
                              </motion.div>
                            </div>
                          </div>

                          {/* Feature Tags */}
                          <div className="mt-3 flex flex-wrap gap-2">
                            {[
                              'Highlights Experience',
                              'Matches Job Requirements',
                              'Professional Tone'
                            ].map((feature, index) => (
                              <motion.div
                                key={feature}
                                className="px-2 py-1 bg-neutral-100 rounded text-xs text-neutral-600"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  delay: index * 0.2,
                                }}
                              >
                                {feature}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-100 relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex items-center">
                        <SparklesIcon className="h-6 w-6 text-teal-500 mr-2 group-hover:text-teal-600 transition-colors duration-300" />
                        <h4 className="text-xl font-semibold text-neutral-800">Smart Apply</h4>
                      </div>
                      <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                        Coming Soon: AI handles the entire application process for you.
                      </p>

                      {/* Smart Apply Visualization */}
                      <div className="mt-4 bg-white rounded-lg p-4 border border-neutral-200 shadow-sm">
                        {/* Application Process Flow */}
                        <div className="relative">
                          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-200"></div>
                          
                          {/* Process Steps */}
                          {[
                            { step: 'Resume Optimization', status: 'done', time: '2s' },
                            { step: 'Cover Letter Generation', status: 'done', time: '5s' },
                            { step: 'Application Form Fill', status: 'progress', time: '3s' },
                            { step: 'Document Upload', status: 'waiting', time: '--' }
                          ].map((item, index) => (
                            <div key={item.step} className="relative flex items-center mb-3 last:mb-0">
                              <motion.div
                                className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 ${
                                  item.status === 'done' ? 'bg-emerald-100' :
                                  item.status === 'progress' ? 'bg-blue-100' :
                                  'bg-neutral-100'
                                }`}
                                animate={
                                  item.status === 'progress' 
                                    ? {
                                        scale: [1, 1.2, 1],
                                        opacity: [0.7, 1, 0.7],
                                      }
                                    : {}
                                }
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                }}
                              >
                                <SparklesIcon
                                  className={`h-4 w-4 ${
                                    item.status === 'done' ? 'text-emerald-500' :
                                    item.status === 'progress' ? 'text-blue-500' :
                                    'text-neutral-400'
                                  }`}
                                />
                              </motion.div>
                              
                              <div className="ml-3 flex-1">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm font-medium text-neutral-800">{item.step}</span>
                                  <span className="text-xs text-neutral-500">{item.time}</span>
                                </div>
                                <div className="text-xs text-neutral-500">
                                  {item.status === 'done' && 'Completed'}
                                  {item.status === 'progress' && (
                                    <motion.span
                                      className="text-blue-500"
                                      animate={{
                                        opacity: [0.5, 1, 0.5],
                                      }}
                                      transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                      }}
                                    >
                                      Processing...
                                    </motion.span>
                                  )}
                                  {item.status === 'waiting' && 'Waiting'}
                                </div>
                              </div>
                              {item.status === 'done' && (
                                <motion.div
                                  className="w-4 h-4 text-emerald-500"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{
                                    type: "spring",
                                    delay: index * 0.2,
                                  }}
                                >
                                  <CheckIcon className="w-full h-full" />
                                </motion.div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Coming Soon Badge */}
                        <motion.div
                          className="mt-4 pt-3 border-t border-neutral-200 flex justify-center"
                          animate={{
                            y: [0, -2, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                            <SparklesIcon className="h-3 w-3 mr-1" />
                            Coming Soon
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.04),transparent_60%)]"></div>
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '2rem 2rem'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '20px 20px', '0px 0px'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/5 to-green-400/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400/5 to-teal-400/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white md:text-4xl relative inline-block">
              <motion.div
                className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-teal-400/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <span className="relative">Ready to find your dream job?</span>
              <span className="block mt-2 text-neutral-300 text-xl sm:text-2xl font-normal">Let AI do the hard work for you!</span>
          </h2>
            <motion.div 
              className="mt-8 sm:mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.button
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base font-medium rounded-lg text-neutral-900 bg-white hover:bg-neutral-50 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20 transform group-hover:translate-x-full transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center">
                Get Started Now
                  <motion.div
                    className="ml-2"
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <RocketLaunchIcon className="h-5 w-5" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { text: 'Trusted by 500+ Companies', icon: DocumentTextIcon },
                { text: 'AI Powered', icon: SparklesIcon },
                { text: '24/7 Support', icon: RocketLaunchIcon }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center text-neutral-400 relative group cursor-pointer w-full sm:w-auto justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-green-400/5 to-teal-400/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                  <span className="relative z-10 text-sm sm:text-base group-hover:text-neutral-300 transition-colors duration-300">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
            </div>

        {/* Animated Border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      <Footer />
    </div>
  );
} 