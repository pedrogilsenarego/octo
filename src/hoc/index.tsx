import React, { useEffect } from 'react';

const ScrollLock = ({ children }: any) => {
  useEffect(() => {
    const handleScroll = (event: Event) => {
      const { scrollSnapType } = document.documentElement.style;

      if (scrollSnapType === 'y mandatory') {
        event.preventDefault();
      }
    };

    document.addEventListener('touchmove', handleScroll, { passive: false });
    document.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      document.removeEventListener('touchmove', handleScroll);
      document.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return <>{children}</>;
};

export default ScrollLock;
