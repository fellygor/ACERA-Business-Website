
const Hero = () => {
  return (
    <section id="/" className="relative w-full mt-10 h-[80vh] flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Background Decoration (Optional "Glow" effect) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          ACERA <span className="text-blue-500">TECHNOLOGY</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          We provide great services and customer experience. 
          Specializing in affordable, professional websites that give your brand a competitive edge online.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
            Get Started
          </button>
          <button className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-white font-bold rounded-full transition-all">
            <a href="#services">View Services</a> 
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero