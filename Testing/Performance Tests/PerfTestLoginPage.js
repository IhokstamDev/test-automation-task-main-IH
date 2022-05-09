//Performance Test for Supermetrics Kitty Manager

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
      { duration: '10s', target: 15 },
      { duration: '20s', target: 15 },
      { duration: '10s', target: 0 },
    ],
    thresholds: {
      http_req_duration: ['p(90) < 5000']
    }
  };

export default function () {
  http.get('http://localhost:3000');
}