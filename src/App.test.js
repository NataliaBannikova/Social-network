import { render, screen } from '@testing-library/react';
import SamuraiJSApp from './App';
import React from 'react';
import ReactDOM from 'react-dom'




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<BrowserRouter > <Provider store={store}> <App /> </Provider></BrowserRouter> , div);
//   ReactDOM.unmountComponentAtNode(div);
// });
