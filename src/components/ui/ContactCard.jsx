import PropTypes from 'prop-types'

/**
 * ContactCard Component
 * Card for displaying contact information with icon
 */
const ContactCard = ({ 
  icon: Icon, 
  title, 
  details, 
  action,
  actionLabel 
}) => {
  return (
    <div className="card text-center group">
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-700 mx-auto mb-5 group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
        <Icon size={28} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="font-heading font-semibold text-lg text-primary-900 mb-3">
        {title}
      </h3>

      {/* Details */}
      <div className="space-y-1 mb-4">
        {details.map((detail, index) => (
          <p key={index} className="text-neutral-600 text-sm">
            {detail}
          </p>
        ))}
      </div>

      {/* Action Link */}
      {action && (
        <a
          href={action}
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-primary-700 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
        >
          {actionLabel}
        </a>
      )}
    </div>
  )
}

ContactCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  action: PropTypes.string,
  actionLabel: PropTypes.string,
}

export default ContactCard
