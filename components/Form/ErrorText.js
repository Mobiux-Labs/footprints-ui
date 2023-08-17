import PropTypes from 'prop-types';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { defaultErrorTextClassName } from './config';

const ErrorText = props => {
  // getting props
  const { className, text, extraProps } = props;

  const icon = <BsFillInfoCircleFill />;

  const render = (
    <div
      className={`${className} ${defaultErrorTextClassName}`}
      {...extraProps}
    >
      {icon} {text}
    </div>
  );

  return render;
};

ErrorText.propTypes = {
  text: PropTypes.string.isRequired,
  extraProps: PropTypes.object,
  className: PropTypes.string
};

ErrorText.defaultProps = {
  className: '',
  extraProps: {}
};

export default ErrorText;
