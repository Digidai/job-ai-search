import { motion } from 'framer-motion';
import { UserGroupIcon, LightBulbIcon, RocketLaunchIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function About() {
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
              <a href="/#how-it-works" className="nav-link">How It Works</a>
              <a href="/about" className="nav-link-active">About</a>
              <button className="btn-primary">
                Get Started
              </button>
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
                href="/#how-it-works"
                className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-900 hover:bg-neutral-100 hover:text-emerald-600 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="/about"
                className="block px-3 py-2 rounded-lg text-base font-medium bg-neutral-100 text-emerald-600 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <div className="mt-4 px-3">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg px-4 py-2 text-base font-medium hover:opacity-90 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <RocketLaunchIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* About Hero Section */}
      <div className="relative overflow-hidden min-h-screen sm:min-h-[80vh] flex items-start sm:items-center pt-24 sm:pt-0">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-neutral-100 via-transparent to-transparent opacity-80"></div>
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(167,243,208,0.15),transparent_50%)]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(134,239,172,0.15),transparent_50%)]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Title with Decorative Elements */}
              <div className="relative inline-block">
                <motion.div
                  className="absolute -inset-x-8 -inset-y-8 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20 rounded-full blur-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.h1 
                  className="relative text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 sm:text-6xl sm:tracking-tight lg:text-7xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  About OpenJobs AI
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p 
                className="mt-8 max-w-2xl mx-auto text-xl text-neutral-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                We're revolutionizing job hunting with AI technology, making it easier than ever to find and apply to your dream job.
              </motion.p>

              {/* Stats */}
              <motion.div
                className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {[
                  { value: '5+', label: 'Years Experience', color: 'from-emerald-400 to-green-400' },
                  { value: '50K+', label: 'Job Seekers', color: 'from-green-400 to-teal-400' },
                  { value: '98%', label: 'Success Rate', color: 'from-teal-400 to-emerald-400' },
                  { value: '500+', label: 'Partner Companies', color: 'from-emerald-400 to-green-400' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-green-400/10 to-teal-400/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-neutral-200/50 group-hover:border-neutral-300/50 transition-all duration-300">
                      <motion.div 
                        className={`text-2xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-neutral-600 mt-1 sm:mt-2 font-medium text-sm sm:text-base">{stat.label}</div>
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Repositioned */}
        <div className="absolute inset-x-0 bottom-12 z-20">
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              document.getElementById('mission').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            <motion.span 
              className="text-neutral-500 text-sm mb-2 relative tracking-wide"
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Scroll to explore
            </motion.span>
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-emerald-400/20 blur-md"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="w-1 h-8 rounded-full bg-gradient-to-b from-emerald-500 to-transparent relative"
                animate={{ 
                  scaleY: [1, 0.5, 1],
                  opacity: [0.7, 0.3, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Gradient */}
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
        />
      </div>

      {/* Mission Section */}
      <div id="mission" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 gap-16 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              {
                icon: UserGroupIcon,
                title: "Our Mission",
                description: "To empower job seekers with AI technology, making the job search process efficient, effective, and stress-free.",
                gradient: "from-emerald-400 to-green-400"
              },
              {
                icon: LightBulbIcon,
                title: "Our Vision",
                description: "To create a world where everyone can find their dream job without the hassle of traditional job hunting.",
                gradient: "from-green-400 to-teal-400"
              },
              {
                icon: RocketLaunchIcon,
                title: "Our Technology",
                description: "Cutting-edge AI that understands your skills, preferences, and career goals to find the perfect job matches.",
                gradient: "from-teal-400 to-emerald-400"
              }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                className="card group hover:shadow-xl transition-all duration-500"
                whileHover={{ scale: 1.02, y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-green-400/5 to-teal-400/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="relative p-8">
                    <div className="flex justify-center">
                      <motion.div 
                        className="icon-box relative"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                        <item.icon className="h-8 w-8 text-neutral-700 relative z-10" />
                      </motion.div>
                    </div>
                    <motion.h3 
                      className={`mt-6 text-xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent text-center`}
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="mt-4 text-neutral-600 text-center leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-gradient-to-br from-white to-neutral-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(167,243,208,0.1),transparent_50%)]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(134,239,172,0.1),transparent_50%)]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <h2 className="text-4xl font-extrabold text-gradient relative">Leadership Team</h2>
            </div>
            <p className="mt-6 text-xl text-neutral-600 max-w-2xl mx-auto">
              Industry experts dedicated to transforming the future of job search
            </p>
            <motion.div 
              className="mt-6 flex justify-center space-x-3"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
              <span className="w-3 h-3 rounded-full bg-teal-400"></span>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Chen",
                role: "CEO & Founder",
                bio: "Former tech executive with a passion for AI and career development.",
                links: {
                  linkedin: "#",
                  twitter: "#"
                },
                skills: ["AI/ML", "Leadership", "Product Strategy"],
                gradient: "from-emerald-400 to-green-400"
              },
              {
                name: "David Kumar",
                role: "CTO",
                bio: "AI researcher with 10+ years experience in machine learning.",
                links: {
                  linkedin: "#",
                  github: "#"
                },
                skills: ["Machine Learning", "System Architecture", "Team Building"],
                gradient: "from-green-400 to-teal-400"
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Product",
                bio: "Product leader focused on creating intuitive user experiences.",
                links: {
                  linkedin: "#",
                  twitter: "#"
                },
                skills: ["UX Design", "Product Management", "Agile"],
                gradient: "from-teal-400 to-emerald-400"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="card relative group-hover:translate-y-[-4px] transition-all duration-300">
                  <div className="relative p-8">
                    <div className="relative w-32 h-32 mx-auto mb-8">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.gradient} blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                      <div className="relative w-full h-full rounded-full bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 p-1">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <motion.span 
                            className={`text-4xl font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.2
                            }}
                          >
                            {member.name[0]}
                          </motion.span>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      initial={false}
                      whileHover={{ scale: 1.02 }}
                      className="text-center"
                    >
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent transition-all duration-300`}>
                        {member.name}
                      </h3>
                      <p className="text-neutral-700 font-medium mt-2 group-hover:text-neutral-900 transition-colors duration-300">
                        {member.role}
                      </p>
                      <p className="mt-4 text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed">
                        {member.bio}
                      </p>
                    </motion.div>
                    
                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${member.gradient} bg-opacity-10 text-neutral-700 border border-neutral-200/50 backdrop-blur-sm`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: skillIndex * 0.1
                          }}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <motion.div 
                      className="mt-8 flex justify-center space-x-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      {member.links.linkedin && (
                        <motion.a
                          href={member.links.linkedin}
                          className="text-neutral-400 hover:text-neutral-900 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                          </svg>
                        </motion.a>
                      )}
                      {member.links.twitter && (
                        <motion.a
                          href={member.links.twitter}
                          className="text-neutral-400 hover:text-neutral-900 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="sr-only">Twitter</span>
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </motion.a>
                      )}
                      {member.links.github && (
                        <motion.a
                          href={member.links.github}
                          className="text-neutral-400 hover:text-neutral-900 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="sr-only">GitHub</span>
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.04),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to revolutionize your job search?</span>
              <span className="block mt-2 text-neutral-300 text-2xl font-normal">Join us in shaping the future of job hunting.</span>
            </h2>
            <div className="mt-12">
              <motion.button
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-neutral-900 bg-white hover:bg-neutral-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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