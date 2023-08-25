import PropTypes from 'prop-types';
import { defaultLabelClassName } from './config';

const Label = props => {
  // getting props
  const { className, text, for: forField, extraProps, showRequired } = props;

  const requiredSymbol = showRequired ? '*' : '';
  const render = (
    <label
      for={forField}
      className={`${className} ${defaultLabelClassName}`}
      {...extraProps}
    >
      {text} {requiredSymbol}
    </label>
  );

  return render;
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  for: PropTypes.string,
  extraProps: PropTypes.object,
  showRequired: PropTypes.bool,
  className: PropTypes.string
};

Label.defaultProps = {
  className: '',
  for: null,
  extraProps: {},
  showRequired: true
};

export default Label;
