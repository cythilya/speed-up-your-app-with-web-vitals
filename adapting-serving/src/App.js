import { useState, useEffect } from 'react';

const App = () => {
  const [content, setContent] = useState(null);
  const loadContent = () => {
    if (navigator.connection && navigator.connection.effectiveType) {
      if (navigator.connection.effectiveType === '4g') {
        // 載入影片
        return (
          <video
            autoPlay
            loop
            muted
            src='https://cythilya.github.io/assets/optimize-for-core-web-vitals/kittens.mp4?123'
            width='500'
          />
        );
      } else {
        // 載入圖片
        return (
          <img
            src='https://cythilya.github.io/assets/optimize-for-core-web-vitals/kittens.jpeg'
            width='500'
          />
        );
      }
    }
  };

  const displayNetworkInfo = () => {
    console.log(`目前網路狀況為 ${navigator.connection.effectiveType}`);
  };

  useEffect(async () => {
    setContent(loadContent());
    navigator.connection.addEventListener('change', displayNetworkInfo);
  }, []);

  useEffect(async () => {
    displayNetworkInfo();
  }, [navigator.connection.effectiveType]);

  return <div className='app'>{content}</div>;
};

export default App;
