import * as React from 'react';
import '../scss/menu.scss';

export interface MenuProps {
  children: any;
}

export interface MenuItemProps {
  text: string;
  onClick?: () => unknown;
}

export const Menu: React.FC<MenuProps> = ({ children }): JSX.Element => {
  return <div className="menu">{children}</div>;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  text,
  onClick,
}): JSX.Element => {
  return (
    <div className="menu-item" role="button" onClick={onClick}>
      {text}
    </div>
  );
};
