import PropTypes from 'prop-types';
import { defaultHelpTextClassName } from './config';

const HintText = props => {
  // getting props
  const { className, text, extraProps } = props;

  const render = (
    <div className={`${className} ${defaultHelpTextClassName}`} {...extraProps}>
      {text}
    </div>
  );

  return render;
};

HintText.propTypes = {
  text: PropTypes.string.isRequired,
  extraProps: PropTypes.object,
  className: PropTypes.string
};

HintText.defaultProps = {
  className: '',
  extraProps: {}
};

export default HintText;
