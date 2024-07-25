import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-QRXSD6YY62');
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};
