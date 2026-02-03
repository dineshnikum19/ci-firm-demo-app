import PropTypes from 'prop-types'

/**
 * FeatureCard Component
 * Card for displaying features/benefits with icon
 */
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  variant = 'default' 
}) => {
  const variants = {
    default: 'flex gap-4 p-5 rounded-xl hover:bg-neutral-50 transition-all duration-300 group',
    card: 'card text-center group',
    minimal: 'flex gap-4 group',
  }

  const iconContainerVariants = {
    default: 'w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700 flex-shrink-0 group-hover:bg-primary-700 group-hover:text-white transition-all duration-300',
    card: 'w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700 mx-auto mb-4 group-hover:bg-primary-700 group-hover:text-white transition-all duration-300',
    minimal: 'w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center text-accent-700 flex-shrink-0',
  }

  if (variant === 'card') {
    return (
      <div className={variants[variant]}>
        <div className={iconContainerVariants[variant]}>
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <h3 className="font-heading font-semibold text-lg text-primary-900 mb-2">
          {title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    )
  }

  return (
    <div className={variants[variant]}>
      <div className={iconContainerVariants[variant]}>
        <Icon size={variant === 'minimal' ? 20 : 22} strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-heading font-semibold text-lg text-primary-900 mb-1">
          {title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'card', 'minimal']),
}

export default FeatureCard
