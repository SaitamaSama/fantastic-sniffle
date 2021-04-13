import * as React from 'react';
import '../scss/footer.scss';

export const Footer: React.FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <footer className="page-footer">
      <div className="bit">Copyrith &copy; 2019</div>
      <div className="bit">HodlInfo.com</div>
      <div className="bit">
        Developed by Gourab Nag for internship application
      </div>
    </footer>
  );
};
