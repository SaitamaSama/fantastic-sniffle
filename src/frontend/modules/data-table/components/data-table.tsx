import * as React from 'react';
import wazirXImg from '../../../assets/wazirx.png';
import bitbnsImg from '../../../assets/bitbns.png';
import giotusImg from '../../../assets/giotus.png';
import colodaxImg from '../../../assets/colodax.png';
import zebpayImg from '../../../assets/zebpay.png';
import coindcxImg from '../../../assets/coindcx.png';
import '../scss/data-table.scss';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';

const tableData = [
  {
    Image: wazirXImg,
    platform: 'WazirX',
    last: '49,37,998',
    buySell: '49,29,330/49,37,998',
    diff: {
      value: '8.71',
      profit: true,
    },
    savings: {
      value: '3,95,617',
      profit: true,
    },
  },
  {
    Image: bitbnsImg,
    platform: 'Bitbns',
    last: '49,37,998',
    buySell: '49,29,330/49,37,998',
    diff: {
      value: '8.71',
      profit: false,
    },
    savings: {
      value: '3,95,617',
      profit: false,
    },
  },
  {
    Image: giotusImg,
    platform: 'Giotus',
    last: '49,37,998',
    buySell: '49,29,330/49,37,998',
    diff: {
      value: '8.71',
      profit: true,
    },
    savings: {
      value: '3,95,617',
      profit: true,
    },
  },
  {
    Image: colodaxImg,
    platform: 'Colodax',
    last: '49,37,998',
    buySell: '49,29,330/49,37,998',
    diff: {
      value: '8.71',
      profit: true,
    },
    savings: {
      value: '3,95,617',
      profit: true,
    },
  },
  {
    Image: zebpayImg,
    platform: 'Zebpay',
    last: '49,37,998',
    buySell: '49,29,330/49,37,998',
    diff: {
      value: '8.71',
      profit: true,
    },
    savings: {
      value: '3,95,617',
      profit: true,
    },
  },
  {
    Image: coindcxImg,
    platform: 'CoinDCX',
    last: '49,37,998',
    buySell: '49,29,330/49,37,998',
    diff: {
      value: '8.71',
      profit: true,
    },
    savings: {
      value: '3,95,617',
      profit: true,
    },
  },
];

export const DataTable: React.FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Platform</th>
          <th>Last Traded Price</th>
          <th>Buy / Sell Price</th>
          <th>Difference</th>
          <th>Savings</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>
                <div className="platform">
                  <img src={row.Image} className="platform-img" />{' '}
                  {row.platform}
                </div>
              </td>
              <td>₹ {row.last}</td>
              <td>₹ {row.buySell}</td>
              <td className={row.diff.profit ? 'green' : 'red'}>
                {row.diff.value} %
              </td>
              <td className={row.savings.profit ? 'green' : 'red'}>
                <div className="savings">
                  {row.savings.profit ? (
                    <HiChevronUp className="arr" />
                  ) : (
                    <HiChevronDown className="arr" />
                  )}
                  ₹ {row.savings.value}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
