import { motion } from 'framer-motion';
import { DocumentTextIcon, ChatBubbleBottomCenterTextIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

export default function Home() {
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
              <a href="#how-it-works" className="text-gray-300 hover:text-neon-blue hover:animate-glow px-3 py-2 rounded-md transition-all duration-300">How It Works</a>
              <a href="/about" className="text-gray-300 hover:text-neon-blue hover:animate-glow px-3 py-2 rounded-md transition-all duration-300">About</a>
              <button className="px-6 py-2 bg-primary text-white rounded-lg shadow-lg hover:bg-neon-purple transition-all duration-300 animate-cyber-glow">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-cyber-darker bg-cyber-grid bg-[size:50px_50px]">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/80 to-cyber-darker/80"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                >
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block animate-glow">AI Job Hunter</span>
                    <span className="block text-neon-purple animate-pulse">Finds & Applies to your Dream Jobs</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                    5 minute read about how OpenJobs AI Searches and Applies to Your Dream Jobs
                  </p>
                </motion.div>
                
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                  <div className="rounded-md shadow">
                    <motion.button
                      className="w-full flex items-center justify-center px-8 py-3 border-0 text-base font-medium rounded-md text-white bg-primary hover:bg-neon-purple md:py-4 md:text-lg md:px-10 transition-all duration-300 animate-cyber-glow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start Your Journey
                    </motion.button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <motion.button
                      className="w-full flex items-center justify-center px-8 py-3 border border-neon-blue text-base font-medium rounded-md text-neon-blue bg-transparent hover:bg-neon-blue/10 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-16 bg-cyber-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white animate-glow">How It Works</h2>
          </div>

          {/* Steps */}
          <div className="space-y-20">
            {/* Step 1 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-cyber-darker border border-neon-purple/20 rounded-lg shadow-lg overflow-hidden hover:border-neon-purple/40 transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 rounded-full p-3">
                      <DocumentTextIcon className="h-8 w-8 text-neon-purple" />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-white">Step 01: OpenJobs AI Learns about You and Your Dream Job</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-neon-blue">Upload Resume</h4>
                      <p className="text-gray-300">OpenJobs AI scans your resume and learns about your experiences, skills, and achievements, to identify your unique strengths and areas</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-neon-blue">Chat with OpenJobs AI</h4>
                      <p className="text-gray-300">Talk with OpenJobs AI about what you want in your next job. While you chat, it will pick up on your skills and what you're looking for, and build your profile without you even noticing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-cyber-darker border border-neon-purple/20 rounded-lg shadow-lg overflow-hidden hover:border-neon-purple/40 transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 rounded-full p-3">
                      <RocketLaunchIcon className="h-8 w-8 text-neon-purple" />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-white">Step 02: Now It's on AutoPilot! OpenJobs AI Scrapes the Web</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-neon-blue">Your Personal Job Hunter</h4>
                      <p className="text-gray-300">OpenJobs AI is your own dedicated job-finding ally, tirelessly searching through hundreds of platforms every minute for opportunities that fit you perfectly.</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-neon-blue">Finding Hidden Diamonds</h4>
                      <p className="text-gray-300">OpenJobs AI's search isn't limited; it covers a wide range of sources, from large job boards to specialized industry platforms, ensuring no stone is left unturned.</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-neon-blue">Searches & Applies Jobs 24/7</h4>
                      <p className="text-gray-300">Coming Soon: Making sure you get applied to all new job listings that align with your profile.</p>
                      <span className="inline-block bg-neon-purple/20 text-neon-purple text-xs font-semibold px-2.5 py-0.5 rounded animate-pulse">Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-cyber-darker border border-neon-purple/20 rounded-lg shadow-lg overflow-hidden hover:border-neon-purple/40 transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 rounded-full p-3">
                      <SparklesIcon className="h-8 w-8 text-neon-purple" />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-white">Step 03: Picks Your Dream Jobs while sleeping</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-neon-blue">Finding the Perfect Matches</h4>
                      <p className="text-gray-300">OpenJobs AI compares your profile and resume with job listings, giving each job a score from 1 to 10 – like a compatibility rating for your career!</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-neon-blue">Custom Cover Letters</h4>
                      <p className="text-gray-300">For every job, OpenJobs AI crafts a cover letter that speaks directly to what each employer is looking for, making your application stand out.</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-neon-blue">Smart Application Process</h4>
                      <p className="text-gray-300">Coming Soon: OpenJobs AI does the heavy lifting – visiting company websites, filling out application forms, and making sure your application shines as the top pick.</p>
                      <span className="inline-block bg-neon-purple/20 text-neon-purple text-xs font-semibold px-2.5 py-0.5 rounded animate-pulse">Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-cyber-purple">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block animate-glow">Ready to find your dream job?</span>
            <span className="block text-neon-blue">Let AI do the hard work for you.</span>
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