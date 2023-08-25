'use client';

import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import ErrorText from './../ErrorText';
import HintText from './../HintText';
import Icon from './../Icon';
import Label from './../Label';
import { borderClassName, defaultClassName } from './../config';

const Generic = props => {
  // getting props
  const {
    className,
    style,
    parentClassName,
    iconLeftClassName,
    iconRightClassName,
    label,
    hintText,
    errorText,
    showRequired,
    inputProps,
    allowIcons,
    leftIcon,
    rightIcon
  } = props;

  const ref = useRef();
  const lIconRef = useRef();
  const rIconRef = useRef();

  const _label = label && (
    <Label
      text={label}
      for={inputProps?.name}
      showRequired={inputProps?.required && showRequired}
    />
  );

  const _hintText = hintText && <HintText text={hintText} />;
  const _errorText = errorText && <ErrorText text={errorText} />;

  const getWidth = () => {
    let lIconWidth = lIconRef.current?.offsetWidth
      ? lIconRef.current.offsetWidth + 3
      : 0;
    let rIconWidth = rIconRef.current?.offsetWidth
      ? rIconRef.current.offsetWidth + 3
      : 0;
    let inputWidth = ref.current?.offsetWidth ?? 0;
    let newWidth = inputWidth - (lIconWidth + rIconWidth) + 'px';
    if (ref.current && ref.current.style) ref.current.style.width = newWidth;
  };

  useEffect(() => {
    getWidth();
  }, [rightIcon, leftIcon, inputProps]);

  const _inputWithIcons = (
    <div className={`flex ${borderClassName}`}>
      {leftIcon && (
        <Icon
          ref={lIconRef}
          className={`rounded-l ${iconLeftClassName}`}
          icon={leftIcon}
        />
      )}
      <input
        ref={ref}
        className={`${defaultClassName} ${className} w-full`}
        style={style}
        {...inputProps}
      />
      {rightIcon && (
        <Icon
          ref={rIconRef}
          className={`rounded-r ${iconRightClassName}`}
          icon={rightIcon}
        />
      )}
    </div>
  );

  const _input = (
    <input
      ref={ref}
      className={`${defaultClassName} ${borderClassName} ${className}`}
      style={style}
      {...inputProps}
    />
  );

  const render = (
    <div className={`${parentClassName} space-y-1`}>
      {_label}
      {allowIcons ? _inputWithIcons : _input}
      {_errorText}
      {_hintText}
    </div>
  );

  return render;
};

Generic.propTypes = {
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

Generic.defaultProps = {
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

export default Generic;
