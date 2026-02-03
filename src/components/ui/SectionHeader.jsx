import PropTypes from 'prop-types'

/**
 * SectionHeader Component
 * Reusable section title and subtitle with optional centering
 */
const SectionHeader = ({ 
  label, 
  title, 
  subtitle, 
  centered = true,
  light = false,
  className = '' 
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 ${className}`}>
      {/* Label/Badge */}
      {label && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
          light 
            ? 'bg-white/10 text-white/90' 
            : 'bg-primary-100 text-primary-700'
        }`}>
          {label}
        </span>
      )}
      
      {/* Title */}
      <h2 className={`section-title ${light ? '!text-white' : ''} ${
        centered ? 'mx-auto' : ''
      }`}>
        {title}
      </h2>
      
      {/* Subtitle */}
      {subtitle && (
        <p className={`section-subtitle ${light ? '!text-primary-100' : ''} ${
          centered ? 'mx-auto' : ''
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

SectionHeader.propTypes = {
  label: PropTypes.string,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  centered: PropTypes.bool,
  light: PropTypes.bool,
  className: PropTypes.string,
}

export default SectionHeader
