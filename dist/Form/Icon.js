import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { defaultIconClassName } from './config';

const Icon = forwardRef((props, ref) => {
  // getting props
  const { className, icon, extraProps } = props;

  const render = (
    <div
      ref={ref}
      className={`${defaultIconClassName} ${className}`}
      {...extraProps}
    >
      {icon}
    </div>
  );

  return render;
});

Icon.displayName = 'Icon';

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  ref: PropTypes.object.isRequired,
  extraProps: PropTypes.object,
  className: PropTypes.string
};

Icon.defaultProps = {
  className: '',
  extraProps: {}
};

export default Icon;
