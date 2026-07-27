import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AnimatedText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");
  const totalChars = text.length;

  let charIndex = 0;

  return (
    <p
      ref={containerRef}
      className="text-center font-medium leading-relaxed max-w-[560px] text-[#D7E2EA] select-none"
      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
    >
      {words.map((word, wordIdx) => {
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split("").map((char, charIdx) => {
              const currentIdx = charIndex++;
              // Calculate range for this character
              const start = currentIdx / totalChars;
              const end = Math.min(1, start + 0.15); // Stagger range with slight overlap
              return (
                <Character key={charIdx} char={char} progress={scrollYProgress} range={[start, end]} />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

const Character = ({ char, progress, range }: { char: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};
