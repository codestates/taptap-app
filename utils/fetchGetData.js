import { BASE_URI } from './constants';

const fetchGetData = uri => {
  return fetch(`${BASE_URI}${uri}`, {
    method: 'GET'
  }).then(response => response.json());
};

export default fetchGetData;
