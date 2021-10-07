import _map from 'lodash/map';

const SORT_TIMES = 99999;

export const sortData = (data) => {
  let sortedData = null;

  console.log('To sort data...');

  for (let i = 0; i < SORT_TIMES; i++) {
    sortedData = _map(data, 'item').sort();
  }

  postMessage('done');
};
