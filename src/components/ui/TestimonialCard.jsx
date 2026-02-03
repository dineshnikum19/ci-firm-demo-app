import { Star, Quote } from 'lucide-react'
import PropTypes from 'prop-types'

/**
 * TestimonialCard Component
 * Modern testimonial card with quote, rating, and author info
 */
const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  company, 
  rating = 5,
  variant = 'default' 
}) => {
  const variants = {
    default: 'bg-white rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300',
    light: 'bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/20 transition-all duration-300',
  }

  return (
    <div className={variants[variant]}>
      {/* Quote Icon */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
        variant === 'light' 
          ? 'bg-white/10 text-accent-300' 
          : 'bg-primary-100 text-primary-600'
      }`}>
        <Quote size={24} />
      </div>

      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating 
              ? 'text-yellow-400 fill-yellow-400' 
              : 'text-neutral-300'
            }
          />
        ))}
      </div>

      {/* Quote Text */}
      <p className={`text-base leading-relaxed mb-6 ${
        variant === 'light' ? 'text-white/90' : 'text-neutral-700'
      }`}>
        "{quote}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {/* Avatar Placeholder */}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg ${
          variant === 'light'
            ? 'bg-accent-500 text-white'
            : 'bg-primary-100 text-primary-700'
        }`}>
          {author.charAt(0)}
        </div>
        <div>
          <p className={`font-semibold ${
            variant === 'light' ? 'text-white' : 'text-primary-900'
          }`}>
            {author}
          </p>
          <p className={`text-sm ${
            variant === 'light' ? 'text-primary-200' : 'text-neutral-500'
          }`}>
            {role}{company && `, ${company}`}
          </p>
        </div>
      </div>
    </div>
  )
}

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string,
  rating: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'light']),
}

export default TestimonialCard
