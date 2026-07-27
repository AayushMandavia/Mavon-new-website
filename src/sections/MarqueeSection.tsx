import { useState, useEffect, useRef } from 'react';

const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

// Row 1: first 11, tripled
const ROW_1_IMAGES = [...IMAGES.slice(0, 11), ...IMAGES.slice(0, 11), ...IMAGES.slice(0, 11)];
// Row 2: remaining 10, tripled
const ROW_2_IMAGES = [...IMAGES.slice(11), ...IMAGES.slice(11), ...IMAGES.slice(11)];

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Calculate sectionTop relative to the page
      const sectionTop = rect.top + window.scrollY;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0C0C0C] pt-2 sm:pt-4 md:pt-6 pb-8 sm:pb-10 overflow-hidden flex flex-col gap-2 sm:gap-3 md:gap-4"
    >
      {/* Row 1 - Moves RIGHT */}
      <div 
        className="flex gap-2 sm:gap-3 md:gap-4 whitespace-nowrap"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: 'transform'
        }}
      >
        {ROW_1_IMAGES.map((src, idx) => (
          <img 
            key={`row1-${idx}`} 
            src={src} 
            alt={`Mavon portfolio work ${idx + 1}`} 
            loading="lazy" 
            className="w-[240px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[150px] sm:h-[200px] md:h-[240px] lg:h-[270px] rounded-xl sm:rounded-2xl object-cover flex-shrink-0 transition-all duration-300"
          />
        ))}
      </div>

      {/* Row 2 - Moves LEFT */}
      <div 
        className="flex gap-2 sm:gap-3 md:gap-4 whitespace-nowrap"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: 'transform'
        }}
      >
        {ROW_2_IMAGES.map((src, idx) => (
          <img 
            key={`row2-${idx}`} 
            src={src} 
            alt={`Mavon portfolio work ${idx + 12}`} 
            loading="lazy" 
            className="w-[240px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[150px] sm:h-[200px] md:h-[240px] lg:h-[270px] rounded-xl sm:rounded-2xl object-cover flex-shrink-0 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
};
