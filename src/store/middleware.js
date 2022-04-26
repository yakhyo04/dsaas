import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { history } from '../services';

export const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');

  middleware.push(createLogger());
}

export default middleware;
