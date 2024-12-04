'use client';
import anime from 'animejs';
import { useEffect, useRef } from 'react';

const AnimatedCounter = ({
  start = 0,
  end,
  label,
}: {
  start?: number;
  end: number;
  label: string;
}) => {
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    anime({
      targets: counterRef.current,
      innerHTML: [start, end],
      easing: 'easeInOutExpo',
      duration: 700,
      round: 1,
      update: (ani: any) => {
        if (counterRef.current) {
          const currentValue = ani.animations[0].currentValue as number;
          counterRef.current.innerText = `${currentValue}+`;
        }
      },
    });
  }, []);

  return (
    <>
      <div>
        <span className="text-4xl" ref={counterRef}></span>
        <p className="text-sm text-slate-500">{label}</p>
      </div>
    </>
  );
};

export default AnimatedCounter;
