import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Home from '../../component/features/HomePage/home';
import store from '../../store/store';

const MockHome = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

describe('Test the Home component', () => {
  beforeEach(() => {
    render(<MockHome />);
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(<MockHome />);
    expect(tree).toMatchSnapshot();
  });
});
