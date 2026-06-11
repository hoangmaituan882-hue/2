import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export const ScrambledText = ({ text, className = '' }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    const maxIterations = text.length;
    
    const interval = setInterval(() => {
      setDisplayText((prev) => 
        prev.split('').map((char, index) => {
          if (index < iteration) {
            return text[index];
          }
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        }).join('')
      );
      
      if (iteration >= maxIterations) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
    
    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};
