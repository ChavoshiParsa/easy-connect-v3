'use client';

import { useState, useEffect } from 'react';

export function useWindowWidth() {
  const [width, setWidth] = useState(() => window?.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, isXs: width >= 425, isMd: width >= 768, isLg: width >= 1024 };
}
