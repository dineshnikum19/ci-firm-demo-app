import PropTypes from 'prop-types'

/**
 * StatCard Component
 * Displays statistics with animated counter effect
 */
const StatCard = ({ 
  value, 
  suffix = '', 
  label, 
  icon: Icon,
  variant = 'default' 
}) => {
  const variants = {
    default: 'text-center p-6',
    card: 'bg-white rounded-2xl shadow-soft p-6 text-center hover:shadow-soft-lg transition-all duration-300',
    light: 'text-center p-6',
  }

  return (
    <div className={variants[variant]}>
      {/* Icon (optional) */}
      {Icon && (
        <div className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${
          variant === 'light' 
            ? 'bg-white/10 text-accent-300' 
            : 'bg-primary-100 text-primary-700'
        }`}>
          <Icon size={28} />
        </div>
      )}

      {/* Value */}
      <div className={`font-heading font-bold text-4xl md:text-5xl mb-2 ${
        variant === 'light' ? 'text-white' : 'text-primary-900'
      }`}>
        {value}
        {suffix && (
          <span className={`text-3xl md:text-4xl ${
            variant === 'light' ? 'text-accent-400' : 'text-accent-600'
          }`}>
            {suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <p className={`text-sm font-medium ${
        variant === 'light' ? 'text-primary-200' : 'text-neutral-600'
      }`}>
        {label}
      </p>
    </div>
  )
}

StatCard.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  suffix: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  variant: PropTypes.oneOf(['default', 'card', 'light']),
}

export default StatCard
