import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import propTypes from 'prop-types';
import store from '../../store/store';
import TopBar from '../../component/common/jsx/TopBar/topBar';

const MockTopBar = ({ year, title }) => (
  <BrowserRouter>
    <Provider store={store}>
      <TopBar year={year} title={title} />
    </Provider>
  </BrowserRouter>
);

MockTopBar.propTypes = {
  year: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

describe('Test the TopBar component', () => {
  beforeEach(() => {
    render(<MockTopBar year="2021" title="Most views" />);
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(<MockTopBar year="2021" title="Most views" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
