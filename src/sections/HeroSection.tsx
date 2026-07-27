import { FadeIn } from '../components/FadeIn';

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-start overflow-hidden bg-[#0C0C0C] pb-2 sm:pb-4 md:pb-6">
      {/* Navbar */}
      <header>
        <FadeIn y={-20} delay={0} className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-20">
          <nav aria-label="Main navigation" className="w-full flex justify-between items-center">
            <a href="#about" aria-label="Navigate to About section" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">About</a>
            <a href="#services" aria-label="Navigate to Services section" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Services</a>
            <a href="#projects" aria-label="Navigate to Projects section" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Projects</a>
            <a href="#contact" aria-label="Navigate to Contact section" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Contact</a>
          </nav>
        </FadeIn>
      </header>

      {/* Hero Heading with Looping Background Animation */}
      <div className="relative w-full overflow-visible text-center select-none z-0 mt-6 sm:mt-10 md:mt-12 mb-2 sm:mb-4 flex flex-col items-center justify-center px-4 sm:px-8">
        <div className="relative w-full max-w-[96vw] h-[320px] sm:h-[450px] md:h-[550px] lg:h-[650px] mx-auto rounded-3xl overflow-hidden flex items-center justify-center my-4">
          {/* Video Animation - 100% opacity & brightened to make background icon clearly visible */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Hero background animation"
            className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-110 contrast-110"
          />
          {/* Subtle edge fade only so the center icon is unobstructed and bright */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/30 via-transparent to-[#0C0C0C]/30 pointer-events-none" />

          {/* Text: Mavon + Justified Tagline */}
          <FadeIn y={40} delay={0.15} duration={0.8} className="relative z-10 w-full px-4 flex flex-col items-center justify-center">
            <div className="w-fit flex flex-col items-stretch text-center select-none">
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[15vw] sm:text-[16vw] md:text-[17.5vw] lg:text-[19vw] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
                mavon
              </h1>
              <div 
                className="w-full flex justify-between uppercase text-[#D7E2EA] font-semibold text-[1.4vw] sm:text-[1.6vw] md:text-[1.8vw] lg:text-[2vw] leading-none mt-3 sm:mt-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              >
                {"Get your Custom tailored designs".split("").map((char, index) => (
                  <span key={index} className={char === " " ? "w-[1.2vw] sm:w-[1.4vw] md:w-[1.6vw]" : ""}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

