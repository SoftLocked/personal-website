import { useState, useEffect } from 'react';

const useScrollBottom = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledHeight = window.innerHeight + window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      setIsBottom(scrolledHeight >= totalHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position in case content is short

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isBottom;
};

export default useScrollBottom;