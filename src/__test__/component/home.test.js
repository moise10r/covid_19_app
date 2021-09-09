/* eslint-disable react/display-name */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Home from '../../component/features/HomePage/home';

jest.mock('../../component/common/jsx/TopBar/topBar', () => () => (<div>Hello World</div>));
const MockHome = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Home />
    </Provider>
  </BrowserRouter>
);

describe('Test the Home component', () => {
  it('should match the snapshot', () => {
    const { container } = render(<MockHome />);
    expect(container.tagName).toBe('DIV');
  });
});
