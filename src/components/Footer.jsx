import { Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">ACERA</h2>
            <p className="text-sm leading-relaxed">
              Leading web design agency focused on identity, development, and digital growth.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-blue-500 cursor-pointer transition">Web Design</li>
              <li className="hover:text-blue-500 cursor-pointer transition">Maintenance</li>
              <li className="hover:text-blue-500 cursor-pointer transition">Hosting</li>
              <li className="hover:text-blue-500 cursor-pointer transition">Development</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>Email: fellygor@gmail.com</li>
              <li>Phone: +254-715-709-429</li>
             
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 text-center text-xs">
          <p>ACERA TECHNOLOGY © {currentYear}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
