import { BASE_URI } from './constants';

const fetchPostData = (uri, body) => {
  return fetch(`${BASE_URI}${uri}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
};

export default fetchPostData;
