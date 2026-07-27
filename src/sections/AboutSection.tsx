import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/Buttons';

export const AboutSection = () => {
  const text = "With experience in design, we focus on automations, web design, and user experience. We truly enjoy working with businesses that aim to stand out and present their best. Let's build something incredible together!";

  return (
    <section id="about" aria-labelledby="about-heading" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 select-none">
      
      {/* Corner Decorative Assets */}
      
      {/* Top Left - Moon */}
      <FadeIn 
        x={-80} 
        y={0} 
        delay={0.1} 
        duration={0.9} 
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="Moon 3D icon" 
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* Bottom Left - 3D Object */}
      <FadeIn 
        x={-80} 
        y={0} 
        delay={0.25} 
        duration={0.9} 
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="3D object" 
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* Top Right - Lego */}
      <FadeIn 
        x={80} 
        y={0} 
        delay={0.15} 
        duration={0.9} 
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="Lego 3D icon" 
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* Bottom Right - 3D Group */}
      <FadeIn 
        x={80} 
        y={0} 
        delay={0.3} 
        duration={0.9} 
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none"
      >
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="3D group" 
          className="w-full h-auto object-contain"
        />
      </FadeIn>

      {/* Content Wrapper */}
      <div className="flex flex-col items-center z-20 w-full max-w-2xl text-center">
        
        {/* Heading */}
        <FadeIn y={40} delay={0} duration={0.7}>
          <h2 
            id="about-heading"
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About
          </h2>
        </FadeIn>

        {/* Spacer between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Paragraph */}
        <AnimatedText text={text} />

        {/* Spacer between text and button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn y={20} delay={0.1}>
          <ContactButton />
        </FadeIn>
        
      </div>
    </section>
  );
};
