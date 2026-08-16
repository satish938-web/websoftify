import { useRef, useState, useCallback } from 'react';

export function use3DTilt(maxTilt = 14, scale = 1.06) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;

      setStyle({
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        '--glow-x': `${glowX}%`,
        '--glow-y': `${glowY}%`,
        '--shadow-x': `${rotateY * 0.8}px`,
        '--shadow-y': `${-rotateX * 0.8}px`,
      });
    },
    [maxTilt, scale]
  );

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setStyle({
      transform: 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      '--glow-x': '50%',
      '--glow-y': '50%',
      '--shadow-x': '0px',
      '--shadow-y': '0px',
    });
  }, []);

  return {
    cardRef,
    style,
    isHovered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
}
