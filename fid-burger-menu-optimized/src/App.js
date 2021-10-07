import React, { useEffect } from 'react';
import './styles.css.js';
import Perfume from 'perfume.js';
import worker from 'workerize-loader!./sortData';
import { data } from './data';

const analyticsTracker = ({ metricName, data, duration }) => {
  const METRICS = ['cls', 'fid', 'lcp'];

  if (METRICS.includes(metricName)) {
    const duration = Math.round(Number(data));
    console.log(`${metricName}: ${duration}`);
  }
};

const perfume = new Perfume({
  analyticsTracker,
  cumulativeLayoutShift: true,
  firstInputDelay: true,
  largestContentfulPaint: true,
  logging: true,
  googleAnalytics: {
    enable: true,
    timingVar: 'userId',
  },
});

perfume.start('AppBeforePaint');

const App = () => {
  const fetcData = () => {
    return new Promise((resolve) => {
      resolve(data);
    });
  };

  useEffect(async () => {
    try {
      const data = await fetcData();
      const workerInstance = worker(data);
      workerInstance.sortData(data);

      workerInstance.addEventListener('message', (message) => {
        if (message.data === 'done') {
          console.log('sorted!');
        }
      });
    } catch (e) {
      console.warn(e);
    }

    perfume.endPaint('AppAfterPaint');
  }, []);

  return (
    <div className='App'>
      <aside>
        <h1>FID 範例</h1>
        <h3>使用 Web Worker 處理與使用者介面無關的複雜的運算</h3>
      </aside>
      <input type='checkbox' id='menu-toggle' />
      <label id='trigger' htmlFor='menu-toggle'></label>
      <label id='burger' htmlFor='menu-toggle'></label>
      <ul id='menu'>
        <li>
          <a
            target='_blank'
            href='https://cythilya.github.io/2018/11/26/what-happens-when-you-type-an-url-in-the-browser-and-press-enter/'
          >
            &#9733;&nbsp;在瀏覽器輸入網址並送出後，到底發生了什麼事？
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://cythilya.github.io/2020/10/01/animal-crossing-3-star-island/'
          >
            &#9733;&nbsp;動森日誌：從入坑到達成三星島嶼
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://cythilya.github.io/2020/10/05/the-7-habits-of-highly-effective-people/'
          >
            &#9733;&nbsp;與成功有約：高效能人士的七個習慣。閱讀筆記
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://cythilya.github.io/2020/11/01/google-how-to-do-a-code-review/'
          >
            &#9733;&nbsp;Google 教我如何進行 Code Review
          </a>
        </li>
      </ul>
    </div>
  );
};

export default App;
