import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-20 px-6 scroll-mt-24" id='contact'>
      <motion.div 
        // 1. Initial state (hidden and 20px down)
        initial={{ opacity: 0, y: 20 }}
        // 2. State to animate to
        whileInView={{ opacity: 1, y: 0 }}
        // 3. Viewport settings (trigger only once)
        viewport={{ once: true }}
        // 4. Animation curve
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto rounded-3xl p-10 md:p-16 text-center bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white shadow-2xl relative overflow-hidden"
      >
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p className="text-blue-100 mb-10 max-w-md mx-auto">
          Get the latest news and updates from ACERA Technology delivered straight to your inbox.
        </p>

        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="fellygor@gmail.com" 
            className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
          />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full transition-colors hover:bg-blue-50"
          >
            Subscribe
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;