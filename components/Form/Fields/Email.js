import PropTypes from 'prop-types';
import { VARIANTS } from '../config';
import Generic from './Generic';

const Email = props => {
  // getting props
  const { inputProps } = props;

  const render = (
    <Generic {...props} inputProps={{ ...inputProps, type: VARIANTS.email }} />
  );

  return render;
};

Email.propTypes = {
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
  rightIcon: PropTypes.element
};

Email.defaultProps = {
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
  rightIcon: null
};

export default Email;
