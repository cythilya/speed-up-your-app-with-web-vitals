import $ from 'jquery';
import { useEffect } from 'react';
const Newsticker = () => {
  useEffect(() => {
    $(function () {
      $('.ui-newsticker').newsticker();
    });
  }, []);

  return (
    <div className='ui-newsticker'>
      <ul className='ui-newsticker-list'>
        <li className='ui-newsticker-item'>
          今天吃飯，該吃什麼好呢？只要輸入美食欲望，立刻給你最真實、現場、生活化的評價，找餐廳再也不煩惱，就讓吃什麼，どっち幫你決定吃什麼！
        </li>
        <li className='ui-newsticker-item'>
          來自名古屋的早餐，Komeda coffee 鬆軟奶油吐司，南京松江站
        </li>
        <li className='ui-newsticker-item'>與小熊維尼的午茶約會！新宿「蜂蜜咖啡」限定登場</li>
      </ul>
    </div>
  );
};

export default Newsticker;
