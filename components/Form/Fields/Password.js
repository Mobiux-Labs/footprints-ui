'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { VARIANTS } from '../config';
import Generic from './Generic';

const Password = props => {
  // getting props
  const { inputProps } = props;
  const [showPassword, setShowPassword] = useState(false);

  const eyeIcon = (
    <div
      className={inputProps?.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      onClick={() => {
        inputProps?.disabled
          ? setShowPassword(false)
          : setShowPassword(val => !val);
      }}
    >
      {showPassword ? (
        <BsEyeFill size={16} className="text-black" />
      ) : (
        <BsEyeSlashFill size={16} className="text-black" />
      )}
    </div>
  );

  const render = (
    <Generic
      {...props}
      inputProps={{
        ...inputProps,
        type: showPassword ? VARIANTS.text : VARIANTS.password
      }}
      rightIcon={eyeIcon}
    />
  );

  return render;
};

Password.propTypes = {
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

Password.defaultProps = {
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

export default Password;
