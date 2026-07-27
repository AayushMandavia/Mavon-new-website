import { FadeIn } from '../components/FadeIn';

export const ContactSection = () => {
  return (
    <footer>
    <section 
      id="contact" 
      aria-labelledby="contact-heading"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 border-t border-[#D7E2EA]/10 select-none"
    >
      {/* 4 Decorative Corner Assets */}

      {/* 1. Top Left - Moon */}
      <FadeIn 
        x={-80} 
        y={0} 
        delay={0.1} 
        duration={0.9} 
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="Moon 3D icon" 
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* 2. Bottom Left - 3D Object */}
      <FadeIn 
        x={-80} 
        y={0} 
        delay={0.25} 
        duration={0.9} 
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="3D object" 
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* 3. Top Right - Lego */}
      <FadeIn 
        x={80} 
        y={0} 
        delay={0.15} 
        duration={0.9} 
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="Lego 3D icon" 
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* 4. Bottom Right - 3D Group */}
      <FadeIn 
        x={80} 
        y={0} 
        delay={0.3} 
        duration={0.9} 
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="3D group" 
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* Center Content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center text-center gap-12">
        <FadeIn y={30} delay={0}>
          <h2 id="contact-heading" className="hero-heading font-black uppercase tracking-tight text-[10vw] sm:text-[8vw] md:text-[6vw] leading-none">
            Contact Us
          </h2>
        </FadeIn>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 mt-6 max-w-full">
          <FadeIn y={30} delay={0.15} className="flex flex-col items-center justify-center w-[280px] sm:w-[330px] md:w-[360px] max-w-[90vw] h-[135px] sm:h-[150px] px-5 py-4 sm:px-6 sm:py-5 rounded-3xl border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-[#D7E2EA]/40 transition-all duration-300">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light mb-2">
              Email Us
            </span>
            <a 
              href="mailto:mavontechsolutions@gmail.com" 
              className="text-base sm:text-lg md:text-xl font-semibold text-[#D7E2EA] hover:opacity-80 transition-opacity break-all text-center"
            >
              mavontechsolutions@gmail.com
            </a>
          </FadeIn>

          <FadeIn y={30} delay={0.25} className="flex flex-col items-center justify-center w-[280px] sm:w-[330px] md:w-[360px] max-w-[90vw] h-[135px] sm:h-[150px] px-5 py-4 sm:px-6 sm:py-5 rounded-3xl border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-[#D7E2EA]/40 transition-all duration-300">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light mb-2">
              Contact Us
            </span>
            <div className="flex flex-col items-center gap-2">
              <a 
                href="tel:+917678046520" 
                className="text-base sm:text-lg md:text-xl font-semibold text-[#D7E2EA] hover:opacity-80 transition-opacity"
              >
                +91 7678046520
              </a>
              <a 
                href="tel:+917977457097" 
                className="text-base sm:text-lg md:text-xl font-semibold text-[#D7E2EA] hover:opacity-80 transition-opacity"
              >
                +91 7977457097
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn y={20} delay={0.35} className="mt-12 text-xs uppercase tracking-widest text-[#D7E2EA]/40">
          © {new Date().getFullYear()} Mavon Tech Solutions. All rights reserved.
        </FadeIn>
      </div>
    </section>
    </footer>
  );
};
