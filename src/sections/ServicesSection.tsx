import { FadeIn } from '../components/FadeIn';

const SERVICES = [
  {
    num: "01",
    name: "3D Websites",
    description: "Immersive, high-performance 3D web experiences with modern animations."
  },
  {
    num: "02",
    name: "SaaS",
    description: "Scalable SaaS platforms built for growth, performance, and user experience."
  },
  {
    num: "03",
    name: "AI & Automation",
    description: "Intelligent AI solutions and workflow automation that boost productivity."
  },
  {
    num: "04",
    name: "Ecommerce",
    description: "Conversion-focused online stores designed to maximize sales and engagement."
  },
  {
    num: "05",
    name: "Mobile Apps",
    description: "Fast, intuitive, and cross-platform mobile applications for iOS and Android."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0">
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Heading */}
        <FadeIn y={40} delay={0} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2 
            id="services-heading"
            className="font-black uppercase text-[#0C0C0C] leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col w-full">
          {SERVICES.map((service, i) => (
            <FadeIn key={i} delay={i * 0.1} className="w-full">
              <div className="flex gap-6 sm:gap-10 md:gap-12 items-center border-t border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 first:border-t-0">
                {/* Number */}
                <span 
                  className="font-black text-[#0C0C0C] flex-shrink-0 select-none"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
                >
                  {service.num}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 
                    className="font-medium uppercase text-[#0C0C0C]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p 
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
