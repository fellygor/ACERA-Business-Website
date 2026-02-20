import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="ACERA Team Working" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-2xl -z-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Our Story
            </h3>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              We provide great services and <br /> 
              <span className="text-blue-600">customer experience.</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Acera Technology is a leading web design agency serving customers worldwide. 
              We believe that growth stems from great work that keeps clients coming back. 
              Our business is built on relationships and measurable results.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-2xl font-bold text-slate-900">99%</h4>
                <p className="text-slate-500 text-sm">Client Satisfaction</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900">24/7</h4>
                <p className="text-slate-500 text-sm">Expert Support</p>
              </div>
            </div>

            <button className="mt-8 px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all">
              Learn More About Us
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;