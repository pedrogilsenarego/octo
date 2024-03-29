import { useEffect } from "react";

const usePreventScroll = (signal: boolean) => {
  
  useEffect(() => {
    if (signal) {
      const preventDefault = (event: any) => event.preventDefault();

      document.body.addEventListener("wheel", preventDefault, {
        passive: false,
      } as EventListenerOptions);
      document.body.addEventListener("touchmove", preventDefault, {
        passive: false,
      } as EventListenerOptions);
      document.body.addEventListener("mouseWheel", preventDefault, {
        passive: false,
      } as EventListenerOptions);
      document.body.addEventListener("DOMMouseScroll", preventDefault, {
        passive: false,
      } as EventListenerOptions);
      return () => {
        document.body.removeEventListener("wheel", preventDefault, {
          passive: false,
        } as EventListenerOptions);
        document.body.removeEventListener("touchmove", preventDefault, {
          passive: false,
        } as EventListenerOptions);
        document.body.removeEventListener("mouseWheel", preventDefault, {
          passive: false,
        } as EventListenerOptions);
        document.body.removeEventListener("DOMMouseScroll", preventDefault, {
          passive: false,
        } as EventListenerOptions);
      };
    } else return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signal]);
};

export default usePreventScroll;
