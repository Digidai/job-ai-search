import { motion } from 'framer-motion';
import { UserGroupIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Navigation */}
      <nav className="bg-cyber-darker border-b border-neon-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-white animate-glow">OpenJobs AI</a>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <a href="/#how-it-works" className="text-gray-300 hover:text-neon-blue hover:animate-glow px-3 py-2 rounded-md transition-all duration-300">How It Works</a>
              <a href="/about" className="text-neon-blue hover:animate-glow px-3 py-2 rounded-md">About</a>
              <button className="px-6 py-2 bg-primary text-white rounded-lg shadow-lg hover:bg-neon-purple transition-all duration-300 animate-cyber-glow">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* About Hero Section */}
      <div className="relative overflow-hidden bg-cyber-darker bg-cyber-grid bg-[size:50px_50px]">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/80 to-cyber-darker/80"></div>
        <div className="relative z-10 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl animate-glow">
                About OpenJobs-AI
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-gray-300">
                We're revolutionizing job hunting with AI technology, making it easier than ever to find and apply to your dream job.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 gap-12 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="text-center bg-cyber-darker p-8 rounded-lg border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-center">
                <UserGroupIcon className="h-12 w-12 text-neon-purple" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Our Mission</h3>
              <p className="mt-4 text-gray-300">
                To empower job seekers with AI technology, making the job search process efficient, effective, and stress-free.
              </p>
            </motion.div>

            <motion.div 
              className="text-center bg-cyber-darker p-8 rounded-lg border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-center">
                <LightBulbIcon className="h-12 w-12 text-neon-purple" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Our Vision</h3>
              <p className="mt-4 text-gray-300">
                To create a world where everyone can find their dream job without the hassle of traditional job hunting.
              </p>
            </motion.div>

            <motion.div 
              className="text-center bg-cyber-darker p-8 rounded-lg border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-center">
                <RocketLaunchIcon className="h-12 w-12 text-neon-purple" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Our Technology</h3>
              <p className="mt-4 text-gray-300">
                Cutting-edge AI that understands your skills, preferences, and career goals to find the perfect job matches.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-cyber-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white animate-glow">Meet Our Team</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
              A passionate team of seasoned professionals with deep expertise in recruitment and job search products, backed by a robust technical foundation—driven to transform the job search experience.
            </p>
          </div>
          
          <motion.div 
            className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* CEO Card */}
            <motion.div 
              className="bg-cyber-darker p-8 rounded-lg border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">Kin Fu</h3>
                <p className="text-neon-purple mt-1">CEO</p>
                <div className="mt-4">
                  <a 
                    href="https://www.linkedin.com/in/kinfu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CTO Card */}
            <motion.div 
              className="bg-cyber-darker p-8 rounded-lg border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">Zhilin Wang</h3>
                <p className="text-neon-purple mt-1">CTO</p>
                <div className="mt-4">
                  <a 
                    href="https://www.linkedin.com/in/zhilin-wang-ph-d-438618140" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CPO Card */}
            <motion.div 
              className="bg-cyber-darker p-8 rounded-lg border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">Gene Dai</h3>
                <p className="text-neon-purple mt-1">CPO</p>
                <div className="mt-4">
                  <a 
                    href="https://www.linkedin.com/in/daijc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-neon-blue transition-colors duration-300"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-cyber-purple">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block animate-glow">Ready to revolutionize your job search?</span>
            <span className="block text-neon-blue">Join us in shaping the future of job hunting.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <motion.button
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-neon-purple hover:bg-neon-pink transition-all duration-300 animate-cyber-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 