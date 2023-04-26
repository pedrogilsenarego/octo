import { useEffect, useRef, useState } from 'react';

const useScrollLock = () => {
  const [locked, setLocked] = useState(false);
  const touchStartYRef = useRef<number | null>(null);

  const handleTouchStart = (event: TouchEvent) => {
    const touchStartY = event.touches[0].clientY;
    touchStartYRef.current = touchStartY;
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (locked) {
      event.preventDefault();
      return;
    }

    const touchCurrentY = event.touches[0].clientY;
    const touchDeltaY = touchCurrentY - (touchStartYRef.current ?? touchCurrentY);
    const isScrollingUp = touchDeltaY < 0;
    const isScrollingDown = touchDeltaY > 0;
    const canScrollUp = window.scrollY === 0;
    const canScrollDown = window.scrollY + window.innerHeight >= document.body.scrollHeight;

    if ((isScrollingUp && canScrollUp) || (isScrollingDown && canScrollDown)) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    const handleScroll = () => setLocked(true);
    const handleTouchEnd = () => setLocked(false);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const enableScroll = () => setLocked(false);
  const disableScroll = () => setLocked(true);

  return { locked, enableScroll, disableScroll };
};

export default useScrollLock;
