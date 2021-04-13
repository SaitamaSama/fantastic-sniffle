import * as React from 'react';
import { stateContextProvider } from '../../common/state-context';
import { CRYPTO_CURRENCY, REAL_CURRENCY } from '../../common/types';
import { Header } from '../../header/components/header';
import { InfoSection } from '../../info/components/info-section';
import '../scss/root.scss';
import bannerAd from '../../../assets/banner1.png';
import ftxBannerAd from '../../../assets/ftxbanner.png';
import { DataTable } from '../../data-table/components/data-table';
import { Footer } from '../../footer/components/footer';

export const Root: React.FC<Record<string, unknown>> = (): JSX.Element => {
  const [realCurrency, setRealCurrency] = React.useState<REAL_CURRENCY>(
    REAL_CURRENCY.INR,
  );
  const [cryptoCurrency, setCryptoCurrency] = React.useState<CRYPTO_CURRENCY>(
    CRYPTO_CURRENCY.BTC,
  );
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  const { provider: StateContextProvider } = stateContextProvider();
  return (
    <StateContextProvider
      value={{
        theme,
      }}
    >
      <section className={`theme-${theme} container`}>
        <Header
          realCurrency={realCurrency}
          cryptoCurrency={cryptoCurrency}
          setRealCurrency={setRealCurrency}
          setCryptoCurrency={setCryptoCurrency}
          setTheme={setTheme}
          theme={theme}
        />
        <InfoSection />
        <a href="https://finstreet.in/">
          <img className="banner-ad" src={bannerAd} />
        </a>
        <DataTable />
        <a href="https://ftx.com/#a=finstreet">
          <img className="banner-ad" src={ftxBannerAd} />
        </a>
        <Footer />
      </section>
    </StateContextProvider>
  );
};
