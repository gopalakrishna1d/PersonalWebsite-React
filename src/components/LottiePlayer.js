// components/LottiePlayer.js
import React, { useRef, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react').then(mod => mod.default), {
  ssr: false,
  loading: () => <div style={{ height: 200 }}></div>,
});

function LottiePlayer({ animationData, style }) {
  const lottieRef = useRef(null);
  const animation = useMemo(() => animationData, [animationData]);

  useEffect(() => {
    return () => {
      if (lottieRef.current) {
        try {
          lottieRef.current.destroy();
        } catch (err) {
          console.error("Lottie destroy failed", err);
        }
      }
    };
  }, []);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animation}
      loop
      autoplay
      style={style}
    />
  );
}

export default React.memo(LottiePlayer);