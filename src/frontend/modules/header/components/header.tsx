import * as React from 'react';
import logo from '../../../assets/HODLINFO.png';
import { CRYPTO_CURRENCY, REAL_CURRENCY } from '../../common/types';
import { Popover } from 'react-tiny-popover';
import '../scss/header.scss';
import { Menu, MenuItem } from './menu';
import { Button } from '../../common/components/button';
import { HiChevronDown } from 'react-icons/hi';
import { Timer } from './timer';
import { FaTelegram } from 'react-icons/fa';
import Switch from 'react-switch';
import { stateContextProvider } from '../../common/state-context';

export interface HeaderProps {
  realCurrency: REAL_CURRENCY;
  cryptoCurrency: CRYPTO_CURRENCY;
  setRealCurrency: (realCurrency: REAL_CURRENCY) => unknown;
  setCryptoCurrency: (cryptoCurrency: CRYPTO_CURRENCY) => unknown;
  setTheme: (theme: 'light' | 'dark') => unknown;
  theme: 'light' | 'dark';
}

export const Header: React.FC<HeaderProps> = (props): JSX.Element => {
  const [isRealMenuOpen, setIsRealMenuOpen] = React.useState<boolean>(false);
  const [isCryptoMenuOpen, setIsCryptoMenuOpen] = React.useState<boolean>(
    false,
  );

  const context = React.useContext(stateContextProvider().context);

  return (
    <header className="app-header">
      <section className="brand">
        <img src={logo} className="brand-logo" />
        <div className="subtitle">
          Powered by{' '}
          <a className="emphasis" href="https://www.finstreet.in/">
            Finstreet
          </a>
        </div>
      </section>
      {/* <div className="gap" /> */}
      <section className="buttons-container">
        <Popover
          isOpen={isRealMenuOpen}
          positions={['bottom']}
          onClickOutside={() => setIsRealMenuOpen(!isRealMenuOpen)}
          align="start"
          content={
            <Menu>
              {Object.values(REAL_CURRENCY).map(currency => (
                <MenuItem
                  text={currency}
                  onClick={() => {
                    setIsRealMenuOpen(!isRealMenuOpen);
                    props.setRealCurrency(currency);
                  }}
                />
              ))}
            </Menu>
          }
        >
          <Button
            variant="secondary"
            icon={<HiChevronDown />}
            onClick={() => setIsRealMenuOpen(!isRealMenuOpen)}
            active={isRealMenuOpen}
          >
            {props.realCurrency}
          </Button>
        </Popover>
        <Popover
          isOpen={isCryptoMenuOpen}
          positions={['bottom']}
          onClickOutside={() => setIsCryptoMenuOpen(!isCryptoMenuOpen)}
          align="start"
          content={
            <Menu>
              {Object.values(CRYPTO_CURRENCY).map(currency => (
                <MenuItem
                  text={currency}
                  onClick={() => {
                    setIsCryptoMenuOpen(!isRealMenuOpen);
                    props.setCryptoCurrency(currency);
                  }}
                />
              ))}
            </Menu>
          }
        >
          <Button
            variant="secondary"
            icon={<HiChevronDown />}
            onClick={() => setIsCryptoMenuOpen(!isCryptoMenuOpen)}
            active={isCryptoMenuOpen}
          >
            {props.cryptoCurrency}
          </Button>
        </Popover>
        <Button variant="secondary">Buy BTC</Button>
      </section>
      {/* <div className="gap" /> */}
      <section className="misc">
        <Timer />
        <Button variant="primary">
          <FaTelegram style={{ fontSize: 24, marginRight: 10 }} /> Connect
          Telegram
        </Button>
        <Switch
          onChange={checked => {
            if (checked) {
              props.setTheme('dark');
            } else {
              props.setTheme('light');
            }
          }}
          checked={props.theme === 'dark'}
          onColor="#2E3241"
          offColor="#F8F9FA"
          onHandleColor="#3DC6C1"
          offHandleColor="#3DC6C1"
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </section>
    </header>
  );
};
