import * as React from 'react';
import '../scss/button.scss';

export interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: any;
  icon?: React.ReactElement;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => unknown;
  active?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref): JSX.Element => {
    return (
      <button
        className={`button v-${props.variant} ${props.active && 'is-active'}`}
        onClick={props.onClick}
        ref={ref}
      >
        {props.children}
        {props.icon && React.cloneElement(props.icon, { className: 'icon' })}
      </button>
    );
  },
);
