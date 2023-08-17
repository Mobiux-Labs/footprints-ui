import PropTypes from 'prop-types';
import ErrorText from './../Form/ErrorText';

const Test = props => {
  const { text, className } = props;

  return (
    <div className={`${className}`}>
      {text}
      <ErrorText />
    </div>
  );
};

Test.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

Test.defaultProps = {
  className: ''
};
export default Test;
