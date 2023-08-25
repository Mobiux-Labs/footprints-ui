import PropTypes from 'prop-types';
import { VARIANTS } from '../config';
import Generic from './Generic';

const Number = props => {
  // getting props
  const { inputProps, className, showSpinner } = props;

  const render = (
    <Generic
      {...props}
      className={`${className} ${showSpinner ? '' : 'no-spinner'}`}
      inputProps={{ ...inputProps, type: VARIANTS.number }}
    />
  );

  return render;
};

Number.propTypes = {
  inputProps: PropTypes.object.isRequired,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  parentClassName: PropTypes.string,
  iconLeftClassName: PropTypes.string,
  iconRightClassName: PropTypes.string,
  label: PropTypes.string,
  hintText: PropTypes.string,
  errorText: PropTypes.string,
  showRequired: PropTypes.bool,
  allowIcons: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  showSpinner: PropTypes.bool
};

Number.defaultProps = {
  className: '',
  style: {},
  parentClassName: '',
  iconLeftClassName: '',
  iconRightClassName: '',
  label: null,
  hintText: null,
  errorText: null,
  showRequired: true,
  allowIcons: true,
  leftIcon: null,
  rightIcon: null,
  showSpinner: false
};

export default Number;
