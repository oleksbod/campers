import PropTypes from 'prop-types';

const Icon = ({
  width = 32,
  height = 32,
  color = 'currentColor',
  iconName,
  className = '',
  strokeColor = 'var(--color-main)'
}) => {
  const isSpecialIcon = ['water', 'gas', 'microwave'].includes(iconName);

  return (
    <svg
      width={width}
      height={height}
      fill={isSpecialIcon ? 'none' : color}
      stroke={isSpecialIcon && strokeColor ? strokeColor : 'none'}
      className={className}
      aria-hidden="true">
      <use href={`/images/svgs.svg#icon-${iconName}`} />
    </svg>
  );
};

Icon.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
  strokeColor: PropTypes.string
};

export default Icon;
