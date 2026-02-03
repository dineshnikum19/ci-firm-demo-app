import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PropTypes from 'prop-types'

/**
 * ServiceCard Component
 * Card component for displaying services with icon, title, and description
 */
const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  link = '/services',
  variant = 'default' 
}) => {
  const variants = {
    default: 'card group',
    bordered: 'card-bordered group',
    elevated: 'card shadow-soft-lg group',
  }

  return (
    <div className={variants[variant]}>
      {/* Icon */}
      <div className="icon-container mb-5">
        <Icon size={24} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="font-heading font-semibold text-xl text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-neutral-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Link */}
      <Link
        to={link}
        className="inline-flex items-center text-primary-700 font-medium text-sm hover:text-primary-800 transition-colors group/link"
      >
        Learn More
        <ArrowRight 
          size={16} 
          className="ml-1 group-hover/link:translate-x-1 transition-transform" 
        />
      </Link>
    </div>
  )
}

ServiceCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'bordered', 'elevated']),
}

export default ServiceCard
