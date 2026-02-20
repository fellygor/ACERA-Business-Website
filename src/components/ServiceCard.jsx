import { motion } from 'framer-motion';
import { servicesData } from '../data/Service';

const Services = () => {
 
  return (
    <section id="services" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 max-w-xl mx-auto">
            We offer a wide range of technology solutions to help your business grow and succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all duration-300 group shadow-sm hover:shadow-xl">
                    
                    <div className="mb-4 flex justify-center items-center  group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-blue-600"  />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Pricing</span>
                      <span className="text-slate-900 font-bold">{service.price}</span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Services;