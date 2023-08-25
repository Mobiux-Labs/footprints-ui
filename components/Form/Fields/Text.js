import PropTypes from 'prop-types';
import { VARIANTS } from '../config';
import Generic from './Generic';

const Text = props => {
  // getting props
  const { inputProps } = props;

  const render = (
    <Generic {...props} inputProps={{ ...inputProps, type: VARIANTS.text }} />
  );

  return render;
};

Text.propTypes = {
  inputProps: PropTypes.object.isRequired,
  className: PropTypes.string,
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

Text.defaultProps = {
  className: '',
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

export default Text;
