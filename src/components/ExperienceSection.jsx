'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Code2, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const learningCards = [
  {
    icon: GraduationCap,
    title: 'Computer Science Student',
    text: 'Currently pursuing a Diploma in Computer Science and building a strong foundation for a career in web development.',
  },
  {
    icon: BookOpen,
    title: 'Learning by Doing',
    text: 'Practicing frontend and full-stack concepts by designing and building personal projects.',
  },
  {
    icon: Code2,
    title: 'Open to Opportunities',
    text: 'I have no formal professional experience yet and am excited to keep learning, grow with a team, and take on my first role.',
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: 'top 90%' },
        y: 30,
        opacity: 0,
        duration: 0.62,
        ease: 'power2.out',
      });

      gsap.from(cardsRef.current?.children ?? [], {
        scrollTrigger: { trigger: cardsRef.current, start: 'top 88%' },
        y: 24,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full border-t border-[#1F1F1F] bg-[#080808] px-6 py-24 text-[#FFFBD4] selection:bg-[#A90E02] selection:text-[#FFFBD4] md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center justify-between border-b border-[#262626] pb-6">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#A90E02]" />
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#A90E02]">
              [ 05 / EXPERIENCE ]
            </span>
          </div>
          <span className="font-mono-code text-xs uppercase tracking-widest text-[#A8A8A8]">
            PROFESSIONAL EXPERIENCE
          </span>
        </div>

        <div ref={headingRef} className="mb-14">
          <p className="mb-4 font-mono-code text-xs uppercase tracking-widest text-[#A8A8A8]">
            {'// HONESTLY, WHERE I AM TODAY'}
          </p>
          <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-tight text-[#FFFBD4] sm:text-7xl md:text-8xl">
            LEARNING &amp;
            <br />
            <span className="text-[#A90E02]">GROWING EVERY DAY</span>
          </h2>
          <p className="mt-4 max-w-2xl font-editorial text-sm text-[#A8A8A8] md:text-base">
            I&apos;m a student at the start of my professional journey, building skills through my Computer Science diploma and hands-on web projects.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {learningCards.map(({ icon: Icon, title, text }) => (
            <article key={title} className="border border-[#262626] bg-[#0D0D0D] p-6 md:p-7">
              <Icon className="mb-5 h-5 w-5 text-[#A90E02]" />
              <h3 className="mb-3 font-display text-2xl uppercase text-[#FFFBD4]">{title}</h3>
              <p className="font-editorial text-sm leading-relaxed text-[#A8A8A8]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
