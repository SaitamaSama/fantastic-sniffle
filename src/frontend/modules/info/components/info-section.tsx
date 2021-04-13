import * as React from 'react';
import { Info } from './info';
import '../scss/info-section.scss';

export interface InfoSectionProps {}

export const InfoSection: React.FC<InfoSectionProps> = (): JSX.Element => {
  return (
    <section className="info-section">
      <Info variant="minor" title="5 mins" value="0.48%" />
      <Info variant="minor" title="1 Hour" value="0.48%" />
      <Info
        variant="major"
        title="Average BTC/INR net price including commission"
        value="₹ 45,42,380"
        majorTitle="Best Price to Trade"
      />
      <Info variant="minor" title="1 Day" value="0.48%" />
      <Info variant="minor" title="7 Days" value="0.48%" />
    </section>
  );
};
