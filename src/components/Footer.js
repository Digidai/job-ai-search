import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-cyber-darker border-t border-neon-purple/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4 animate-glow">OpenJobs AI</h3>
            <p className="text-gray-400 text-sm">
              AI-powered job hunting platform that helps you find and apply to your dream jobs automatically.
            </p>
          </div>

          {/* Product Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#how-it-works" className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">How It Works</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">Features</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">Career Tips</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">Success Stories</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 hover:text-neon-blue transition-colors duration-300">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <a href="mailto:contact@openjobsai.com" className="text-sm">
                  contact@openjobsai.com
                </a>
              </li>
              <li className="flex items-center text-gray-400 hover:text-neon-blue transition-colors duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <a href="tel:+1234567890" className="text-sm">
                  (123) 456-7890
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white text-sm font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-neon-purple/20 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} OpenJobs AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 