'use client';

import PropTypes from 'prop-types';
import Field from './Field';

const Form = props => {
  const {
    items,
    className,
    parentClassName,
    onSubmitHandler,
    formProps,
    props: extraProps
  } = props;

  const getFields = () => {
    let fields = null;
    if (Array.isArray(items)) {
      fields = items.map((item, idx) => (
        <Field key={`${idx}-field`} {...item} />
      ));
    } else if (typeof items === 'object' && items !== null) {
      fields = <Field {...items} />;
    } else {
      throw new Error('Invalid props: "items" must be a object or array');
    }
    return fields;
  };

  return (
    <div className={`${parentClassName}`} {...extraProps}>
      <form
        onSubmit={onSubmitHandler}
        {...formProps}
        className={`${className} space-y-4`}
      >
        {getFields()}
      </form>
    </div>
  );
};

Form.Field = Field;

Form.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  className: PropTypes.string,
  parentClassName: PropTypes.string,
  onSubmitHandler: PropTypes.func,
  formProps: PropTypes.object,
  props: PropTypes.object
};

Form.defaultProps = {
  className: '',
  parentClassName: '',
  onSubmitHandler: () => {},
  formProps: {},
  props: {}
};
export default Form;
