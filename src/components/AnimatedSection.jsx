import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Performance-optimized animated section component
 * Uses Intersection Observer and CSS transforms for smooth animations
 * GPU-accelerated animations using transform and opacity
 */
const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeUp',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = true,
  id
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold, once });

  const animationClass = isVisible 
    ? `animate-${animation} animate-visible` 
    : `animate-${animation}`;

  return (
    <div
      ref={ref}
      id={id}
      className={`${animationClass} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
