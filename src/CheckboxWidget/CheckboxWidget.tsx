import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { WidgetProps } from 'react-jsonschema-form';

type Color = 'primary' | 'secondary' | 'default';
type Size = 'small' | 'medium';

const CheckboxWidget = (props: WidgetProps) => {
  const {
    schema,
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    autofocus,
    onChange,
    onBlur,
    onFocus,
    options = {},
  } = props;

  const {
    classes,
    color = 'secondary',
    disableRipple = false,
    indeterminate = false,
    inputProps,
    size = 'medium',
  } = options as {
    classes: any;
    color: Color;
    disableRipple: boolean;
    indeterminate: boolean;
    inputProps: any;
    size: Size;
  };

  const _onChange = ({}, checked: boolean) => onChange(checked);
  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLButtonElement>) => onFocus(id, value);
  const newLabel = label !== null || label !== undefined ? label : schema.title;

  return (
    <FormControl fullWidth={true} required={required}>
      <FormControlLabel
        control={
          <Checkbox
            id={id}
            checked={typeof value === 'undefined' ? false : value}
            required={required}
            disabled={disabled || readonly}
            autoFocus={autofocus}
            onChange={_onChange}
            onBlur={_onBlur}
            onFocus={_onFocus}
            classes={classes}
            color={color}
            disableRipple={disableRipple}
            indeterminate={indeterminate}
            inputProps={inputProps}
            size={size}
          />
        }
        label={newLabel}
      />
    </FormControl>
  );
};

export default CheckboxWidget;
