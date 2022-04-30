import { useState, useCallback } from "react";
import useIsomorphicLayoutEffect from 'utils/useIsomorphicLayoutEffect'

const getDimensions = (element: HTMLElement) => element.getBoundingClientRect();

export function useDimensions(responsive = true) {
  const [dimensions, setDimensions] = useState(null);
  const [element, setElement] = useState(null);

  const hook = useCallback((e) => setElement(e), []);

  useIsomorphicLayoutEffect(() => {
    if (element) {
      const updateDimensions = () => {
        window.requestAnimationFrame(() => {
          setDimensions(getDimensions(element));
        });
      };
      updateDimensions()
      
      if (responsive) {
        window.addEventListener('resize', updateDimensions)
        return () => {
          window.removeEventListener('resize', updateDimensions)
        }
      } 
    }
  }, [element, hook, responsive]);

  return [hook, dimensions, element]
}
