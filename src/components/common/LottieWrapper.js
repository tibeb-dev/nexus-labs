import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Create a dynamic import for Lottie with SSR disabled
const LottieWrapper = ({ animationData, ...props }) => {
  const container = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    // Only import and initialize lottie on the client side
    import('lottie-web').then((lottie) => {
      if (container.current) {
        animationInstance.current = lottie.default.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData,
          ...props
        });
      }

      // Clean up
      return () => {
        if (animationInstance.current) {
          animationInstance.current.destroy();
        }
      };
    });
  }, [animationData, props]);

  return <div ref={container}></div>;
};

// Export as a dynamic component with SSR disabled
export default dynamic(() => Promise.resolve(LottieWrapper), {
  ssr: false
}); 