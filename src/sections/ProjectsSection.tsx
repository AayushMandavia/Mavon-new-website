import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { RainbowButton } from '@/components/ui/rainbow-button';

const PROJECTS = [
  {
    num: "01",
    name: "Web & Retail",
    category: "Project 1",
    img1: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1280&q=80",
    img2: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1280&q=80",
    img3: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1280&q=80",
    links: [
      "https://estimated-pink-gexrdmzfyd.edgeone.app/",
      "https://excessive-orange-ic9jdzxemw.edgeone.app/"
    ]
  },
  {
    num: "02",
    name: "Mobile & AI",
    category: "Project 2",
    img1: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1280&q=80",
    img2: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1280&q=80",
    img3: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1280&q=80",
    links: [
      "https://misty-magenta-5uchb0osqg.edgeone.app/",
      "https://yelling-silver-gmekct689c.edgeone.app/",
      "https://healthy-silver-1z1wv0edff.edgeone.app/",
      "https://gross-harlequin-b2hvbovbgo.edgeone.app/"
    ]
  },
  {
    num: "03",
    name: "Automation",
    category: "Project 3",
    img1: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1280&q=80",
    img2: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1280&q=80",
    img3: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1280&q=80",
    links: [
      "https://angry-brown-gmnknlbjex.edgeone.app/",
      "https://proposed-fuchsia-92j2abyo6t.edgeone.app/"
    ]
  }
];

const ProjectCard = ({ 
  project, 
  index, 
  totalCards, 
  progress 
}: { 
  project: any; 
  index: number; 
  totalCards: number; 
  progress: MotionValue<number>; 
}) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const range = [index * 0.25, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  const stickyTop = `calc(clamp(2rem, 5vw, 4rem) + ${index * 28}px)`;
  const wrapperHeight = `calc(100vh - (clamp(2rem, 5vw, 4rem) + ${index * 28}px))`;

  return (
    <div 
      style={{
        top: stickyTop,
        height: wrapperHeight,
      }}
      className="sticky flex items-center justify-center w-full max-w-5xl mx-auto origin-top"
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top',
        }}
        className="w-full h-[540px] sm:h-[600px] md:h-[660px] max-h-[calc(100vh-180px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-4 sm:gap-6 overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex justify-between items-center w-full border-b border-[#D7E2EA]/10 pb-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span 
              className="font-black text-[#D7E2EA] select-none"
              style={{ fontSize: 'clamp(2rem, 6vw, 80px)', lineHeight: 1 }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-light">
                {project.category}
              </span>
              <h3 className="text-sm sm:text-lg md:text-xl uppercase font-semibold text-[#D7E2EA] tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3 ml-auto">
            {project.links ? (
              project.links.map((link: string, idx: number) => (
                <RainbowButton
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.links.length > 1 ? `Live ${idx + 1}` : 'Live Project'}
                </RainbowButton>
              ))
            ) : (
              <RainbowButton>Live Project</RainbowButton>
            )}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-6 w-full flex-grow overflow-hidden min-h-0">
          {/* Left Column (40% width / 4 cols) - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex md:col-span-4 flex-col gap-4 sm:gap-6 justify-between h-full min-h-0">
            <img 
              src={project.img1} 
              alt={`${project.name} preview 1`} 
              className="w-full rounded-[25px] sm:rounded-[35px] md:rounded-[40px] object-cover h-[45%] flex-shrink-0" 
              loading="lazy"
            />
            <img 
              src={project.img2} 
              alt={`${project.name} preview 2`} 
              className="w-full rounded-[25px] sm:rounded-[35px] md:rounded-[40px] object-cover h-[50%] flex-grow" 
              loading="lazy"
            />
          </div>

          {/* Right Column (60% width / 6 cols) - Full width on mobile */}
          <div className="col-span-1 md:col-span-6 flex h-full min-h-0">
            <img 
              src={project.img3} 
              alt={`${project.name} main preview`} 
              className="w-full h-full rounded-[25px] sm:rounded-[35px] md:rounded-[40px] object-cover flex-grow min-h-0" 
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      id="projects" 
      aria-labelledby="projects-heading"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pb-32 pt-20 relative z-10 -mt-10 sm:-mt-12 md:-mt-14"
    >
      {/* Heading */}
      <FadeIn y={40} delay={0} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
        <h2 
          id="projects-heading"
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {/* Cards List */}
      <div ref={containerRef} className="relative flex flex-col gap-20">
        {PROJECTS.map((project, i) => (
          <ProjectCard 
            key={i} 
            project={project} 
            index={i} 
            totalCards={PROJECTS.length} 
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};
