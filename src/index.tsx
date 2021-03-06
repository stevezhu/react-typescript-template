import React, {StrictMode} from 'react';
import {render} from 'react-dom';
import {App} from './App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('#root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
