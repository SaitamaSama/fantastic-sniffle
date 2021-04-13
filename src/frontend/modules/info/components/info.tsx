import * as React from 'react';
import '../scss/info.scss';

export interface InfoProps {
  variant: 'minor' | 'major';
  title: string;
  value: any;
  majorTitle?: string;
}

export const Info: React.FC<InfoProps> = (props): JSX.Element => {
  return (
    <section className={`${props.variant} info`}>
      {props.majorTitle && (
        <header className="major-title">{props.majorTitle}</header>
      )}
      <div className="number">{props.value}</div>
      <footer className="subtitle">{props.title}</footer>
    </section>
  );
};
