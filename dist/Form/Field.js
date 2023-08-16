import PropTypes from 'prop-types';
import ErrorText from './ErrorText';
import Email from './Fields/Email';
import Generic from './Fields/Generic';
import Number from './Fields/Number';
import Password from './Fields/Password';
import Text from './Fields/Text';
import HintText from './HintText';
import Icon from './Icon';
import Label from './Label';
import { VARIANTS } from './config';

const Field = props => {
  // getting props
  const { inputProps } = props;

  const render = () => {
    let element = null;
    switch (inputProps?.type) {
      case VARIANTS.radio:
      case VARIANTS.checkbox:
        element = (
          <Generic
            {...props}
            allowIcons={false}
            className="border-none shadow-none w-auto h-auto"
          />
        );
        break;
      case VARIANTS.number:
        element = <Number {...props} />;
        break;
      case VARIANTS.email:
        element = <Email {...props} />;
        break;
      case VARIANTS.password:
        element = <Password {...props} />;
        break;
      default:
        element = <Generic {...props} />;
    }
    return element;
  };

  return render();
};

Field.Label = Label;
Field.Icon = Icon;
Field.ErrorText = ErrorText;
Field.HintText = HintText;
Field.Text = Text;
Field.Email = Email;
Field.Number = Number;
Field.Password = Password;

Field.propTypes = {
  inputProps: PropTypes.object.isRequired,
  children: PropTypes.element,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
  rightIcon: PropTypes.element,
  showSpinner: PropTypes.bool
};

Field.defaultProps = {
  className: '',
  style: {},
  children: null,
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

export default Field;
